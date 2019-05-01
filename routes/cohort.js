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

//get students from cohort
router.get("/:id/students", async (req, res) => {
  try {
    const { id } = req.params;
    const studentsCohort = await cohortDb.getStudentsById(id);
    res.json(studentsCohort);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
});

//add new cohort
router.post("/", async (req, res) => {
  if (!req.body.name) {
    return res.status(404).json({ msg: "please enter a cohort name" });
  }
  try {
    const addCohort = await cohortDb.add(req.body);
    res.status(201).json(addCohort);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
});

router.put("/:id", async (req, res) => {
  if (!req.body.name) {
    return res.status(404).json({ msg: "please enter a cohort name" });
  }
  try {
    const updateCohort = await cohortDb.update(req.body, req.params.id);
    if (updateCohort > 0) {
      res.json(req.body);
    } else {
      res.status(404).json({ msg: "theres no cohort to update" });
    }
  } catch (err) {
    res.status(500).json({ msg: err });
  }
});

module.exports = router;
