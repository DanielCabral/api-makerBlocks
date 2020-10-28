
exports.up = function(knex) {
    return knex.schema.createTable('projects',function(table){
        table.string('id').primary;
        table.string('name').notNullable();
        table.string('xml').notNullable();
    });
};

exports.down = function(knex) {
    return knex.dropTable('projects');
};
