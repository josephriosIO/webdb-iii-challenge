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

router.put("/:id", async (req, res) => {
  if (!req.body.name) {
    return res.status(404).json({ msg: "please enter a student name" });
  }
  try {
    const updateStudent = await studentDb.update(req.body, req.params.id);
    if (updateStudent > 0) {
      res.json(req.body);
    } else {
      res.status(404).json({ msg: "theres no student to update" });
    }
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

module.exports = router;
