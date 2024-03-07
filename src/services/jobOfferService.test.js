import tap from "tap";
import jobOfferService from "./jobOffer.js";
import jobOfferRepository from "../repositories/jobOffer.js";

jobOfferRepository.getJobOfferById = (id) => {
  if (id === 56023) {
    return {
      id: 56023,
      position: "Recepcionista Bilingue",
      employer_name: "JLL",
      state: "published",
    };
  }
  return null;
};

tap.test("jobOfferService.getJobOfferById", async (t) => {
  const jobOffer = await jobOfferService.getJobOfferById(56023);
  t.ok(jobOffer, "Job offer should be found");
  t.equal(
    jobOffer.position,
    "Recepcionista Bilingue",
    "Job offer position should match"
  );
  t.end();
});