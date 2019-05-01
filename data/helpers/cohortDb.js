const db = require("../dbConfig.js");

module.exports = {
  get,
  getById,
  add,
  getStudentsById,
  update
};

function get() {
  return db("cohorts");
}

function getById(id) {
  return db("cohorts")
    .where({ id })
    .first();
}

function add(cohort) {
  return db("cohorts")
    .insert(cohort)
    .then(ids => {
      return getById(ids[0]);
    });
}

function getStudentsById(cohortId) {
  return db("cohorts")
    .join("students as s", "cohorts.id", "s.cohort_id")
    .select("s.id as student_id", "s.name as student_name")
    .where("cohorts.id", cohortId);
}

function update(cohort, id) {
  return db("cohorts")
    .where({ id })
    .update(cohort);
}
