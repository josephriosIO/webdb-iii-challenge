const db = require("../dbConfig.js");

module.exports = {
  get,
  getById,
  add
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
      return getById(id[0]);
    });
}
