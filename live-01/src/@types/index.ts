import express, {Response, Request, NextFunction} from 'express';

const app = express();

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({foo:'Sucesso Total!'});

});

app.listen(3000, () => {
    console.log('aplicação executendo na porta 3000!!!')
})