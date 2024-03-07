import Fastify from 'fastify';
import routes from "./controllers/jobOffers.js";

export default async function buildServer() {
    const server = Fastify({logger: true});

    server.get('/', async (request, reply) => {
        return "Hello World";
    });

    server.register(routes, {prefix: '/'})

    return server;
}
