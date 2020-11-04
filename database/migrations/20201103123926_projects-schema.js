
exports.up = function(knex, Promise) {
    return knex.schema
    .createTable('types', tbl => {
        tbl.increments();
        tbl.string('type');
    })
    .createTable('projects', tbl => {
        tbl.increments();
        tbl.integer('types_id').unsigned().notNullable().references('id').inTable('types').onUpdate('CASCADE').onDelete('CASCADE');
        tbl.string('name').notNullable();
        tbl.string('description');
        tbl.string('source').notNullable();
        tbl.string('link').notNullable();
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema
    .dropTableIfExists('projects')
    .dropTableIfExists('types');
  };
  