const router = require("express").Router();

const studentDb = require("../data/helpers/studentDb");

router.get("/", async (req, res) => {
  try {
    const getAllStudents = await studentDb.get();
    res.status(200).json(getAllStudents);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
});

module.exports = router;
