# touhyou


```mermaid
---
title: "touhyouDB ER図"
---
erDiagram

user_table {
increments id PK "id"
string username "ユーザー名"
string loginname "ログイン名"
string hashed_password "ハッシュ後パスワード"
}

vote_title {
increments id PK "id"
string title "タイトル"
integer added_user_id  FK "投稿者のユーザーID"
boolean is_closed "クローズ判定"
timestamp updated "更新日時"
}

options {
vote_title_id id PK "タイトルID"
option_number id PK "主キー"
string question "質問"
integer user_id "投稿者ID"
timestamp updated "更新日時"
}

user_title {
integer user_id PK "ユーザID 複合主キー"
integer vote_title_id PK "質問タイトルID 複合主キー"
integer answer "一番多かった投票オプションのID"
}

user_info ||--o{ user_title : "1つのuser_infoは、0以上のuser_titleを持つ"
user_info ||--o{ vote_title : "1つのuser_infoは、0以上のvote_titleを持つ"
user_info ||--o{ option : "1つのuser_infoは、0以上のoptionを持つ"
vote_title ||--o{ options : "1つのvote_titleは、0以上のoptionsを持つ"
vote_title ||--o{ user_title : "1つのvote_titleは、0以上のuser_titleを持つ"
options ||--o{ user_title : "1つのoptionsは、0以上のuser_titleを持つ"