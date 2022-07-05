# Microserviço de autenticação com Nodejs
Este é um projeto desenvolvido durante algumas lives para dissiminação de conhecimento dentro da DIO, uma plataforma de cursos gratuíta que todo DEV deveria conhecer! 😉

Neste projeto iremos criar um microserviço de autenticação que poderá compor a sua caixinha de ferramentas e ser muito útil no seu dia a dia. 🔨🔧

Composição do nosso projeto
Neste projeto Temos alguns Endpoints Base que podem ser extendidos da forma mais adequada para seu contexto.

São eles:

Usuários
GET /users
GET /users/:uuid
POST /users
PUT /users/:uuid
DELETE /users/:uuid
Autenticação
POST /token
POST /token/validate
