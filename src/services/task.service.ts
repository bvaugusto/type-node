import { Request, Response } from "express";
import TaskModel, { ITask, ITaskObj } from "../models/task.models";

export default class TaskService {
  public async findAll(req: Request, res: Response) {
    try {
      const list: Array<ITaskObj> = await TaskModel.find({});

      return res.json({ list });
    } catch (error) {
      return res.json({ error });
    }
  }

  public async create(req: Request, res: Response) {
    try {
      const iTask = req.body as ITask;
      const task = await TaskModel.create(iTask);

      return res.json({ task });
    } catch (error) {
      return res.json({ error });
    }
  }

  public async findOne(req: Request, res: Response) {
    try {
      const { id: taskId } = req.params;
      const task = await TaskModel.findById(taskId);

      return res.json({ task });
    } catch (error) {
      return res.json({ error });
    }
  }
}
