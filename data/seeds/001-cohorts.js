exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("cohorts")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("cohorts").insert([
        { name: "WEB 18" },
        { name: "WEB 19" },
        { name: "WEB 20" }
      ]);
    });
};
