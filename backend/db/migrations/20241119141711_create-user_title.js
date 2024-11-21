/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const table="user_title"
exports.up = async function(knex) {
    await knex.schema.createTable(table, (table) => {
        table.integer("user_id").notNullable();
        table.integer("vote_title_id").notNullable();
        table.primary(["user_id", "vote_title_id"]);
        table.integer("answer").notNullable();
        table.foreign("user_id").references("user_table.id").onDelete("CASCADE");
        table.foreign("vote_title_id").references("vote_title.id").onDelete("CASCADE");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema.dropTable(table);
};