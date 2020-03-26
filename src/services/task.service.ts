import { Request, Response } from "express";

export default class TaskService {
    
    public routeDefault(req: Request, res: Response) {
        return res.json({ msg: 'ok' });
    }

    public create(req: Request, res: Response) {
        const { nome, sobrenome } = req.body;

        return res.json({ msg: `create ok ${nome} ${sobrenome}` });
    }
}