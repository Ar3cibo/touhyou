/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const table="vote_questions"
exports.up = async function(knex) {
    await knex.schema.createTable(table, (table) => {
        table.increments("id").primary();
        table.string("question").notNullable();
        table.integer("user_id").notNullable();
        table.boolean("is_closed").notNullable();
        table.timestamp("updated").notNullable();
        table.foreign("user_id").references("user_info.id").onDelete("CASCADE")
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema.dropTable(table);
};