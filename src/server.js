import Fastify from 'fastify';
import fastifyPostgres from '@fastify/postgres';
import userRouter from './routes/user.js';
const PORT = process.env.BACKEND_PORT || 5000
const fastify = Fastify({
    // logger: true
})



fastify.register(userRouter)
fastify.register(fastifyPostgres,{connectionString:process.env.DATABASE_URL})


fastify.get('/',(req,res)=>{
    return {
        message:"everything is working properly"
    }
})



const startServer = async () => {
    try {
        await fastify.listen({ port: PORT })
        console.log(`Server Started Succesfully on http://localhost:${PORT}`)
    } catch (err) {
        fastify.log.err(err, "Something went wrong to start server")
        process.exit(1)
    }
}

export {
    startServer
}


