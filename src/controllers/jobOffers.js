import jobOfferService from "../services/jobOffer.js";

/**
 * @param {Object} options plugin options, refer to https://fastify.dev/docs/latest/Reference/Plugins/#plugin-options
 */

export default async function routes(fastify, options) {

    fastify.get('/:id', async (request, options) => {
        const jobId = parseInt(request.params.id);
        const jobOffer = await jobOfferService.getJobOfferById(jobId);

        if (!jobOffer) 
        {
          return { statusCode: 404, error: 'Job offer not found or expired' };
        } 
        else {
            const { id, position, employer_name, summary, description } = jobOffer;
            return { id, position, employer_name, summary, description };
        }
    });

    fastify.get('/search', {
        schema: {
            querystring: {
                position: { type: 'string', description: 'Search query' },
                page: { type: 'number', default: 1, description: 'Page number' },
                limit: { type: 'number', default: 5, description: 'Number of items per page' }
            },
        },
        handler: async function (request, options) {
          const { position, page, limit } = request.query;

          const { totalOffers, paginatedOffers } = await jobOfferService.searchJobOffers(position, page, limit);
      
          const jobOffers = paginatedOffers.map(({ id, position, employer_name }) => ({
              id,
              position,
              employer_name,
          }));
  
          return { totalOffers, jobOffers };
        },
    });

    fastify.put('/:id', {
        schema: {
            params: {
                type: 'object',
                properties: {
                    id: { type: 'number' },
                },
                required: ['id'],
            },
            body: {
                type: 'object',
                properties: {
                    status: { type: 'string', enum: ['expired', 'published'] },
                },
                required: ['status'],
            },
        },
        handler: async (request, options) => {
            const jobId = request.params.id;
            const { status } = request.body;

            const jobOffer = await jobOfferService.getJobOfferToUpdate(jobId);

            if (!jobOffer) 
            {
              return { statusCode: 404, error: 'Job offer not found' };
            }

            jobOffer.state = status;
            return {statusCode: 201, jobOffer};
        },
    });
}
