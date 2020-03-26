import { Request, Response } from "express";

const middleware = (req: Request, res: Response, next: any) => {
  console.log("Middleware ok!");
  next();
};

export default middleware;
