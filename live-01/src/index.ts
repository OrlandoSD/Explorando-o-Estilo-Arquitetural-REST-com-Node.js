import express, {Response, Request, NextFunction} from 'express';
import usersRoute from './routes/users.route';

const app = express();
//Configurações da aplicação
app.use(express.json);
app.use(express.urlencoded({ extended:true}));

// Configuração de rotas
app.use(usersRoute);

app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send({foo:'Sucesso Total!'});

});

// inicialização do servidor
app.listen(3000, () => {
    console.log('aplicação executendo na porta 3000!!!')
})