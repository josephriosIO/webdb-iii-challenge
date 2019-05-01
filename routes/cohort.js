const router = require("express").Router();

const cohortDb = require("../data/helpers/cohortDb");

//get all cohorts
router.get("/", async (req, res) => {
  try {
    const cohorts = await cohortDb.get();
    res.status(200).json(cohorts);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
});

//get cohort by id
router.get("/:id", async (req, res) => {
  try {
    const getCohortById = await cohortDb.getById(req.params.id);
    if (getCohortById.length === 0) {
      res.status(400).json({ msg: "id does not exist" });
    } else {
      res.json(getCohortById);
    }
  } catch (err) {
    res.status(500).json({ msg: err });
  }
});

module.exports = router;
