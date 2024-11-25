/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
const table="user_info"
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex(table).del()
  await knex(table).insert([
    {
      id: 1,
      username: 'kuni',
      loginname: 'kuni',
      hashed_password: '$2b$10$.fJXeZkMr/28UFu/dohFrubKP/mqeCchnFnML0D/gTkRh9rUkFMkG'
    },
    {
      id: 2,
      username: 'suke',
      loginname: 'suke',
      hashed_password: '$2b$10$kfkjN9Ii5XZ1wpJhT71leOb4yzkW2qQ5DEs8uEdfVMQQDSeTzU6u.'
    },
    {
      id: 3,
      username: 'natsu',
      loginname: 'natsu',
      hashed_password: '$2b$10$t3EfsX7v4P2kmOZcThrNxeFSPGSyVIRrLZ8KxNTd9ujw94XMT.O6y'
    },
    {
      id: 4,
      username: 'muusan',
      loginname: 'muusan',
      hashed_password: '$2b$10$MnqirvrJq7V7tpn70HkcR.lnzATuwzAvJrGrqoz.cxjcJUjUaWnpC'
    },
    {
      id: 5,
      username: 'taro',
      loginname: 'taro',
      hashed_password: '$2b$10$UEdyY./66.pMbiAl065IKuo8edWQaHc9VMtOSmBehZuVFh7i3.eMq'
    }
  ]);
};
