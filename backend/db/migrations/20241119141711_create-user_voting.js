/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const table="user_voting"
exports.up = async function(knex) {
    await knex.schema.createTable(table, (table) => {
        table.integer("user_id").notNullable();
        table.integer("question_id").notNullable();
        table.primary(["user_id", "question_id"]);
        table.integer("option_id").notNullable();
        table.foreign("user_id").references("user_info.id").onDelete("CASCADE");
        table.foreign("question_id").references("vote_questions.id").onDelete("CASCADE");
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
    await knex.schema.dropTable(table);
};