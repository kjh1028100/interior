import express from "express";
import {
  getRank,
  getCreate,
  postCreate,
  getEdit,
  getSee,
  postEdit,
  delteRank,
} from "../controllers/rankController";
import { interiorUpload, protectedMiddleware } from "../middleware";
const rankRouter = express.Router();

rankRouter.get("/", getRank);

// 탐색
rankRouter.get("/:id([a-z\\d+]{24})", getSee);
// 생성
rankRouter
  .all(protectedMiddleware)
  .route("/:id([a-z\\d+]{24})/create")
  .get(getCreate)
  .post(interiorUpload.single("interior"), postCreate);

// 수정
rankRouter
  .all(protectedMiddleware)
  .route("/:id([a-z\\d+]{24})/edit")
  .get(getEdit)
  .post(interiorUpload.single("interior"), postEdit);
// 삭제
rankRouter.get("/:id([a-z\\d+]{24})/delete", delteRank);
export default rankRouter;
