require("dotenv").config ({path:"../../.env"})
const environment =process.env.NODE_ENV;
const config =require("../../knexfile")[environment]
const db=require("knex")(config)
const crypto = require('crypto');
const bcrypt = require("bcrypt");

const USER_TABLE = 'user_info';


function checkPassWord(username, password) {}

module.exports = {
    USER_TABLE,

    async all(){
        try {
            return await db(USER_TABLE);
        } catch (error) {
            console.error('Error fetch all:', error);
            throw new Error('ユーザー一覧の取得に失敗しました');
        }
    },
    async find(username) {
        try {
            const [result] = await db(USER_TABLE).where({ username });
            return result;
        } catch (error) {
            console.error('Error find user:', error);
            throw new Error(`ユーザー「${username}」の検索に失敗しました`);
        }
    },
    async getMaxId(){
        try {
            const result = await db(USER_TABLE).max('id as max_id').first();
            // result.max_id = undefined;
            console.log("result:",result)
            return result.max_id || 0;
        } catch (error) {
            console.error('Error get max_id:', error);
            throw new Error('最大IDの取得に失敗しました');
        }
    },
    async save(data){
        try {
            await db.table(USER_TABLE).insert(data);
            return this.find(data.id);
        } catch (error) {
            console.error('Error save user:', error);
            throw new Error('ユーザーの保存に失敗しました');
        }
    },

    async signup(username, password) {
        const [newUsername] = await db(USER_TABLE)
            .insert({
                username,
                hashed_password: bcrypt.hashSync(password, 10),
            })
            .returning('username');
        return newUsername;
    },

    async login(username, password) {
        const userData = this.find(username);
        if (!userData.id) {
            return false;
        } else {
            // パスワードのハッシュ化
            const { hashedPassword } = createHash(userData.salt, password);
            // パスワードチェック
            return userData.hashedPassword === hashedPassword;
        }
    },
};
