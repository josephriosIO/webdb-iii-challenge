exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("students")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("students").insert([
        { name: "Joseph Rios", cohort_id: 1 },
        { name: "Bill Nye", cohort_id: 2 },
        { name: "Kid Cudi", cohort_id: 3 }
      ]);
    });
};
