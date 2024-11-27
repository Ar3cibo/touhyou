
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const userModel= require("./handlers/models/user_info_model");
const session = require("express-session");
// const flash = require("connect-flash");

function authentication(app){

//認証初期化処理
// セッション設定
// express-session
    app.use(session({ secret: "secretKey",resave: false,saveUninitialized: false,cookie: {
            httpOnly: true,          // JavaScriptからクッキーにアクセスできない
            secure: process.env.NODE_ENV === 'production', // HTTPS時のみクッキーを送信
            maxAge: 60*60*1000       // クッキーの有効期限（1時間）
        } }));
// passport session
    app.use(passport.initialize());
    app.use(passport.session());
    // app.use(flash());

// LocalStrategy(ユーザー名・パスワードでの認証)の設定
passport.use(
    new LocalStrategy(async (username, password, done) => {
    // new LocalStrategy(async (req,username, password, done) => {

        const user=await userModel.find(username)
        if (!user) {
            // ユーザーが見つからない場合
            return done(null, false);
        }
        // ハッシュ化したPWの突き合わせ。入力されたpasswordから、DBに保存されたハッシュ値を比較する
        const match = await bcrypt.compare(password, user.hashed_password);
        if (match) {
            return done(null, user.username); // ログイン成功
        } else {
            return done(null, false); // ログイン失敗
            // return done(null, false,req.flash("message","ユーザー名　または　パスワードが間違っています")); // ログイン失敗
        }
    })
);

// 認証に成功した時にsessionにusernameを保存するための記述
passport.serializeUser((user, done) => {
    console.log("⭐️passport.serializeUser",user)
    done(null, user)
});
// sessionからusernameを取り出して検証するための記述
passport.deserializeUser(async(username, done) => {
    try{
        console.log("⭐️passport.serializeUser")
        const user = await userModel.find(username);
        done(null, user);
    }catch (error) {
        done(error, null);
    }
});


}
module.exports = {
    authentication,
};


