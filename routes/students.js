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

router.post("/", async (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ msg: "please enter name and cohort id" });
  }
  try {
    const addStudent = await studentDb.add(req.body);
    res.status(201).json(addStudent);
  } catch (err) {
    res.status(500).json({ msg: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const getStudent = await studentDb.getById(id);
    if (getStudent.length === 0) {
      res.status(400).json({ msg: "id does not exist" });
    } else {
      res.json(getStudent);
    }
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
