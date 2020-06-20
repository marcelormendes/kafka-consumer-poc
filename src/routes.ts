import { Router } from "express";

import * as getMessageList from "./controllers/getMessageList";

const router: Router = Router();

router.get("/api/get-message-list", getMessageList.index);

export default router;
