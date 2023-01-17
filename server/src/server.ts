import Fastify from "fastify";

const app = Fastify()

app.get('/', ()=>{
    return 'Ola  mundo, seja bem vindo!!!!!'
})

app.listen({
    port: 3333
})

console.log('http://localhost:3333')