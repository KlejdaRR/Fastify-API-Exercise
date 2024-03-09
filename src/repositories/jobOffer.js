import jobOffersData from "./files/job_offers.json" assert { type: "json" };

export default {
  async getJobOfferById(id) {
    return jobOffersData.find(
      (offer) => offer.id === id && offer.state === "published"
    );
  },

  async searchJobOffers(query, page, limit) {
    const lowerCaseQuery = query.toLowerCase();
    const filteredOffers = jobOffersData.filter(
        (offer) =>
            offer.state === "published" &&
            offer.position.toLowerCase().includes(lowerCaseQuery)
    );
    const totalOffers = filteredOffers.length;

    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + limit;

    const paginatedOffers = filteredOffers.slice(startIndex, endIndex);
    return { totalOffers, paginatedOffers };
},

  async getJobOfferToUpdate(id) {
    return jobOffersData.find((offer) => offer.id === id);
  },
};