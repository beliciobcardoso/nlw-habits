import Fastify from "fastify";

const app = Fastify()

app.get('/', ()=>{
    return 'Ola  mundo, seja bem vindo!!!!!'
})

app.listen({
    port: 3333
}).then(()=>{
    console.log('HTTP Server running! http://localhost:3333')
})
