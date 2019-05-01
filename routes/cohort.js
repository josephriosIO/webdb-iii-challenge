const router = require("express").Router();

const cohortDb = require("../data/helpers/cohortDb");

router.get("/", async (req, res) => {
  try {
    const cohorts = await cohortDb.get();
    res.status(200).json(cohorts);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
});

module.exports = router;
