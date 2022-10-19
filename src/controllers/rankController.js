import Installer from "../models/Installer";
import Rank from "../models/Rank";
import User from "../models/User";

export const getRank = async (req, res) => {
  const {
    session: { user },
  } = req;
  if (!user) {
    return res.render("rank/rank", { pageTitle: "Ranking" });
  }
  const rankUser = await User.findById(user._id).populate("Installer");
  if (!rankUser) {
    return res.render("rank/rank", { pageTitle: "Ranking" });
  }
  const rank = await Rank.find({})
    .sort({ score: "-1", createAt: "-1" })
    .populate("owner");
  console.log(rank);
  return res.render("rank/rank", {
    pageTitle: "Ranking",
    userInstaller: rankUser.Installer,
    rank,
  });
};

// rank 생성
export const getCreate = async (req, res) => {
  const {
    params: { id },
  } = req;
  const installer = await Installer.findById(id).populate("rank");
  return res.render("rank/create-rank", {
    pageTitle: "create-rank",
    installer,
  });
};

export const postCreate = async (req, res) => {
  const {
    session: {
      user: { _id },
    },
    params: { id },
    body: { description },
    file,
  } = req;
  const interior = await Installer.findById(id).populate("rank");
  const curUser = await User.findById(_id);
  // 중복일때 에러메세지

  // 중복 x
  const rank = await Rank.create({
    user: _id,
    owner: id,
    description,
    imgUrl: file ? file.path : undefined,
  });
  // 비교하는 함수
  const currRank = await rank.populate("owner");
  const {
    owner: {
      meta: { view: currRankView, like: currRankLike },
    },
  } = currRank;
  const curScore = currRankView + currRankLike;
  rank.score = curScore;
  await rank.save();
  interior.rank = rank;
  curUser.rank.push(rank);
  await interior.save();
  await curUser.save();
  return res.redirect("/rank");
};

export const getSee = async (req, res) => {
  const {
    params: { id },
  } = req;
  const rank = await Rank.findById(id).populate("owner").populate("user");
  console.log(rank);
  return res.render("rank/see", { pageTitle: `See ${rank.owner.title}`, rank });
};

export const getEdit = async (req, res) => {
  const {
    params: { id },
    session: { user },
  } = req;
  const rank = await Rank.findById(id).populate("owner").populate("user");
  if (!rank) {
    return res.redirect(`/rank/${rank._id}`);
  }
  if (String(rank.user._id) !== String(user._id)) {
    return res.redirect(`/rank/${rank._id}`);
  }
  return res.render("rank/edit", { pageTitle: "edit ranking", rank });
};

export const postEdit = async (req, res) => {
  const {
    params: { id },
    body: { description },
    file,
  } = req;
  const rank = await Rank.findById(id).populate("owner").populate("user");
  await Rank.findByIdAndUpdate(id, {
    description,
    imgUrl: file ? file.path : rank.imgUrl,
  });
  return res.redirect("/rank");
};

export const delteRank = async (req, res) => {
  const {
    params: { id },
  } = req;
  await Rank.findByIdAndDelete(id);
  return res.redirect("/rank");
};
