import jobOfferService from "../services/jobOffer.js";

export default async function routes(fastify, options) {

  fastify.get("/:id", async (request, reply) => {
    const jobId = parseInt(request.params.id);
    const jobOffer = await jobOfferService.getJobOfferById(jobId);
    if (!jobOffer) {
      reply.code(404).send({ error: "Job offer not found or expired" });
    } else {
      const { id, position, employer_name, summary, description } = jobOffer;
      reply.send({ id, position, employer_name, summary, description });
    }
  });

  fastify.get("/search", {
    schema: {
      querystring: {
        position: { type: "string", description: "Search query" },
      },
    },
    handler: async function (request, reply) {
      const { position } = request.query;
      let jobOffers;
      jobOffers = await jobOfferService.searchJobOffers(position);
      jobOffers = jobOffers.map(({ id, position, employer_name }) => ({
        id,
        position,
        employer_name,
      }));
      reply.send(jobOffers);
    },
  });

  fastify.put("/:id", {
    schema: {
      params: {
        type: "object",
        properties: {
          id: { type: "number" },
        },
        required: ["id"],
      },
      body: {
        type: "object",
        properties: {
          status: { type: "string", enum: ["expired", "published"] },
        },
        required: ["status"],
      },
    },
    handler: async (request, reply) => {
      const jobId = request.params.id;
      const { status } = request.body;

      const jobOffer = await jobOfferService.getJobOfferToUpdate(jobId);

      if (!jobOffer) {
        reply.code(404).send({ error: "Job offer not found" });
        return;
      }

      jobOffer.state = status;
      reply.code(201).send(jobOffer);
    },
  });
}