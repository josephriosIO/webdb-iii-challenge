const db = require("../dbConfig.js");

module.exports = {
  get,
  getById,
  add,
  update,
  remove
};

function get() {
  return db("students");
}

function getById(id) {
  return db("students")
    .where({ id })
    .first();
}

function add(student) {
  return db("students")
    .insert(student)
    .then(ids => {
      return getById(ids[0]);
    });
}

function update(student, id) {
  return db("students")
    .where({ id })
    .update(student);
}

function remove(id) {
  return db("students")
    .where({ id })
    .del();
}
