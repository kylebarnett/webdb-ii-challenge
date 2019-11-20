
exports.up = function (knex) {
  return knex.schema.table('cars', tbl => {
    tbl.string('Transmition Type', 128);
    tbl.string('Title Status', 128);
  })
};

exports.down = function (knex) {
  return knex.schema.table('cars', tbl => {
    tbl.dropColumns('Transmition Type', 'Title Status');
  })
};
