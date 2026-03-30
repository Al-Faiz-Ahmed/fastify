

const schema = {

    body: {
        type: "object",
        required: ["name", "email", "password"],
        properties: {
            name: {
                type: "string"
            },
            email: {
                type: "string"
            },
            password: {
                type: "string"
            }
        }

    },
    response: {
        201: {
            type: "object",
            properties: {
                id: {
                    type: "string"
                }
            }
        }
    }

}


async function userRouter(fastify, opts) {

    fastify.post("/api/users", { schema }, (req, reply) => {
        console.log(req.body)
        reply.code(201)
        return {
            id:"faizan",
            message: "User Created"
        }
    })
}

export default userRouter