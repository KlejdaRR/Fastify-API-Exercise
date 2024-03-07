import exampleService from '../services/example.js';
import {GetExampleDto} from './dtos/example.js';

/**
 * @param {FastifyInstance} fastify  Encapsulated Fastify Instance
 * @param {Object} options plugin options, refer to https://fastify.dev/docs/latest/Reference/Plugins/#plugin-options
 */
export default async function routes(fastify, options) {

    fastify.get('/', async (request, reply) => {
        const response = await exampleService.getExample();
        return response.map(GetExampleDto.fromExampleEntity);
    });
}

