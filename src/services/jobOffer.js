import jobOfferRepository from "../repositories/jobOffer.js";

export default {
  async getJobOfferById(id) {
    return jobOfferRepository.getJobOfferById(id);
  },

  async searchJobOffers(query) {
    return jobOfferRepository.searchJobOffers(query);
  },

  async getJobOfferToUpdate(id) {
    return jobOfferRepository.getJobOfferToUpdate(id);
  },
};