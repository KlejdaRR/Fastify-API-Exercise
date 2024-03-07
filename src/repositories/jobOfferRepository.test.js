import tap from "tap";
import jobOffersData from "./files/job_offers.json" assert { type: "json" };
import jobOfferRepository from "./jobOffer.js";

tap.test("jobOfferRepository.getJobOfferById", async (t) => {
  const jobOffer = await jobOfferRepository.getJobOfferById(56023);
  t.ok(jobOffer, "Job offer should be found");
  t.equal(
    jobOffer.position,
    "Recepcionista Bilingue",
    "Job offer position should match"
  );
  t.end();
});