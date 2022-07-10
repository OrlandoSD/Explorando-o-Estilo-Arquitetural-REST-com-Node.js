import { Request, Response, NextFunction } from "express";
import ForbiddenError from "../models/errors/forbidden.error.model";
import JWT from 'jsonwebtoken';
import User from '../models/user.model';
import userRepository from '../repositories/user.repository';



async function jwtAuthenticationMiddleware (req:Request, res: Response, next: NextFunction){
    try{

       const authorizationHeader =  req.headers['authentication'];

       if(!authorizationHeader){
        throw new ForbiddenError('Credenciais não informadads');
       }

       const [authenticationType, token] = authorizationHeader.split(' ');

       if(authenticationType !== 'Bearer' || !token) {
        throw new ForbiddenError('Tipo de autenticação inválido');
       }

       try{
    
        const tokenPayload = JWT.verify(token, 'my_secret_key');
     
        if(typeof tokenPayload !== 'object' || !tokenPayload.sub){
        
        }
        
        const user ={
         uuid: tokenPayload.sub,
         username: tokenPayload.username
        };

        req.user = user;
        next();
       }catch(error){
        throw new ForbiddenError('Token Inválido');
       }
    
    }catch(error){
        next(error)

    }
}

export default jwtAuthenticationMiddleware;