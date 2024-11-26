/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
const table="vote_options"
exports.up = async function(knex) {
    await knex.schema.createTable(table, (table) => {
        table.integer("option_id" ).notNullable();
        table.integer("question_id").notNullable();
        table.primary(["option_id", "question_id"]);
        table.string("option").notNullable();
        table.integer("user_id").notNullable();
        table.timestamp( "updated" ).notNullable();
        table.foreign("question_id").references("vote_questions.id").onDelete("CASCADE");
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
