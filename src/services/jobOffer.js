import jobOfferRepository from "../repositories/jobOffer.js";

export default {
  async getJobOfferById(id) {
    return jobOfferRepository.getJobOfferById(id);
  },

  async searchJobOffers(position, page, limit) {
    return jobOfferRepository.searchJobOffers(position, page, limit);
  },

  async getJobOfferToUpdate(id) {
    return jobOfferRepository.getJobOfferToUpdate(id);
  },
};