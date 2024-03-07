import jobOffersData from "./files/job_offers.json" assert { type: "json" };

export default {
  async getJobOfferById(id) {
    return jobOffersData.find(
      (offer) => offer.id === id && offer.state === "published"
    );
  },

  async searchJobOffers(query) {
    const lowerCaseQuery = query.toLowerCase();
    return jobOffersData.filter(
      (offer) =>
        offer.state === "published" &&
        offer.position.toLowerCase().includes(lowerCaseQuery)
    );
  },

  async getJobOfferToUpdate(id) {
    return jobOffersData.find((offer) => offer.id === id);
  },
};