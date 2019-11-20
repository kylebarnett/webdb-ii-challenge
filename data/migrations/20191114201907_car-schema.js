
exports.up = function (knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();
    tbl.integer('VIN', 50).unique().notNullable();
    tbl.string('Make', 128).notNullable();
    tbl.string('Model', 128).notNullable();
    tbl.integer('Mileage', 12).notNullable();
  })
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('cars')
};
