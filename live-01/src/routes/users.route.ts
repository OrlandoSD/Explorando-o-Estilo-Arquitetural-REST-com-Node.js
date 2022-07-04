import { Router } from "express";
import { Request, Response, NextFunction } from "express";
import { StatusCodes } from 'http-status-codes';

const usersRoute = Router();

usersRoute.get('/users', (req: Request, res: Response, next: NextFunction) => {
    const users = [{userName: 'Renam'}];
    res.status(StatusCodes.OK).send(users);
});

usersRoute.get('/users/:uuid', (req: Request<{uuid: string}>, res: Response, next: NextFunction) => {
    const uuid = req.params.uuid;
    //bancoDeDados.getUserByUUid(uuid)

    res.sendStatus(200);
})

export default usersRoute;