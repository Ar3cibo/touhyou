const express =require("express");
const router=express.Router();
const userModel= require("./handlers/models/user_info_model");
const passportSetting = require("./passport")
const passport = require("passport");
const bcrypt = require("bcrypt");

const getController=require("./handlers/controller/getController")
const saveController=require("./handlers/controller/saveController")
// const deleteController=require("./handlers/controller/deleteController")

router.get("/api/allVoteCards",getController.allVoteCards)
router.get("/api/voteCards/:id",getController.findWithVoting)
// router.get("/api/voteCard/:id",getController.getVoteCard)
router.post("/api/saveNewQuestion",saveController.saveNewQuestion)
router.post("/api/saveNewOption",saveController.saveNewOption)
// router.delete("/api/voteCard/:id",deleteController.deleteVoteCard)
router.post("/api/userVoting",saveController.userVoting)

//認証用

router.use((req, res, next) => {
    console.log("Session Data:", req.session); // セッション情報を表示
    next(); // 次のミドルウェアに処理を渡す
});

// ユーザー一覧取得エンドポイント
router.get("/users", (req, res) => {
    // sessionから情報を取得して認証
    if (req.isAuthenticated()) {
        res.json(userDB);
    } else {
        res.status(401).json({ message: "ログインが必要です！" });
    }
});

// ログインエンドポイント
router.post("/login", (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({
            message: "usernameとpasswordが必要です",
        });
    }

    // 最初に設定したLocalStrategy(ユーザー名とパスワードでの認証)を使ってログイン
    passport.authenticate("local", (err, user) => {
        if (!user) return res.status(401).json({ message: "ログイン失敗！" });

        // sessionにログイン情報を格納
        req.logIn(user, () => {
            // res.redirect('/')
            return res.json({ message: `ログイン成功！ Hello, ${user}` });
        });
    })(req, res);
});

//--- 要確認
// 認証されたか確認するミドルウェア
function checkAuth(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    } else {
        res.status(401).send('Unauthorized');
    }
}

// 認証されたユーザーのみアクセスできるルート
router.get('/profile', checkAuth, (req, res) => {
    res.send(`Hello ${req.user.username}`);
});
//--- 要確認


// サインアップ（アカウント作成）エンドポイント
router.post("/sign-up", async(req, res) => {
    const { username, loginname,password } = req.body;
    if (!username || !loginname|| !password) {
        return res.status(400).json({
            message: "ユーザー名、ログイン名、パスワード全て入力してください",
        });
    }

    // passwordをハッシュ化してDBに保存
    const max_id =await userModel.getMaxId()
    const newUser = {id:max_id+1,username:username,loginname:loginname,hashed_password:bcrypt.hashSync(password, 10)};
    userModel.save(newUser)

    // signUpが成功したのでログイン済みとしてsessionの追加
    req.logIn(newUser.user_name, () => {
        // res.redirect('/')
        return res.json({ message: `サインアップ完了！ ${newUser.user_name}` });
    });
});

// ログアウトエンドポイント
router.get("/logout", (req, res) => {
    req.logout(() => {
        res.json({ message: "ログアウト成功" });
    });
});

module.exports=router