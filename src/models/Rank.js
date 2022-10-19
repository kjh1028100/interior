import mongoose from "mongoose";

const rankSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "Installer" },
  imgUrl: { type: String, trim: true, require: true },
  description: { type: String, trim: true },
  createAt: { type: Date, default: Date.now, trim: true },
  score: { type: Number, default: 0 },
});

const Rank = mongoose.model("Rank", rankSchema);

export default Rank;
