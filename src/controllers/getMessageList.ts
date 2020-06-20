import { Request, Response } from "express";
import { messageList } from "src/index";

export const index = async (_req: Request, res: Response): Promise<void> => {
    res.send({ messageList });
};
