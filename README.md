# 投票アプリ

https://touhyou.onrender.com/

## 目次
1. アプリの概要
2. ローカル環境構築手順
3. 利用技術 


# アプリの概要
みんなで気軽に投票ができるサービス

質問と回答の集計結果一覧がトップに表示されます。   
質問者は、質問と回答の選択肢（最大６まで）を設定できる。  
質問に対して、選択肢に投票が行われると集計結果に即時反映される。  


# ローカル環境構築手順
1. このリポジトリをクローン
2. データベースtouhyouを構築
3. frontendディレクトリ直下に.envファイルを作成
```
VITE_URL=http://localhost:8080
```  
4. backendディレクトリ直下に.envファイルを作成  

```
DB_NAME=  ＜当仕組で利用する Database 名>
DB_USER=  ＜ご自身の環境のユーザー名>
DB_PASSWORD= ＜ DB_USER で指定したユーザーのパスワード>  
NODE_ENV= development
PORT=     ＜当仕組で利用するポート番号>
```

5. プロジェクトルートで npm run build
   (パッケージの登録、テーブルの構築、サンプルデータの登録を実施します。）
 ※アプリで利用しているDBのテーブル構造は[ER図](./ER.md)を参照ください。   
6. プロジェクトルートで npm start を実行し、コンテナを起動 

以下のコマンドでコンテナを停止できます
Ctrl + C




# 利用技術
#### フロントエンド

| 言語・フレームワーク       | バージョン  |
|------------------|--------|
| React            | 18.3.1 |
| React-dom        | 18.3.1 |
| React-router-dom | 7.0.1  |
| @yamada-ui/React | 1.6.4  |
| Jotai            | 2.10.3 |

#### バックエンド

<!-- 言語、フレームワーク、ミドルウェア、インフラの一覧とバージョンを記載 -->

| 言語・フレームワーク       | バージョン   |
|------------------|---------|
| express          | 4.21.1  |
| knex             | 3.1.0   |
| dotenv           | 16.4.5  |
| pg               | 8.13.1  |

※その他のパッケージのバージョンは package.json を参照してください
