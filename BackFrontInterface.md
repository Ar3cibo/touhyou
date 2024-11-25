# Touhyou バック<==>フロントインターフェース

## 🔶 allVoteCards

### url
```
/api/allVoteCards
```

### メソッド
GET

### パラメーター
無し

### レスポンス
```
{
  "voteCards": [
    {
      id: number;
      title: string;
      added_user_id: number;
      is_closed: boolean;
      updated: Date
      options: IVoteOption[];
    },
    {
      id: number;
      title: string;
      added_user_id: number;
      is_closed: boolean;
      updated: Date
      options: IVoteOption[];
    }
  ]
}
```

## 🔶 getVoteCard

### url
```
/api/getVoteCard/:id
```

### メソッド
GET

### パラメーター
無し

### レスポンス
```
{
  id: number;
  title: string;
  added_user_id: number;
  is_closed: boolean;
  updated: Date
  options: IVoteOption[];
}
```

## 🔶 saveNewVoteTitle
回答の選択肢をDBに追加する際、所属する投票の vote_title_id が必要となる。

そのため、DBに投票を追加するときには、まず saveNewVoteTitle を呼び出し、そのレスポンスの id を使って saveNewVoteOption を呼び出す。

### url
```
/api/saveNewVoteTitle/
```

### メソッド
POST

### パラメーター
```
{
  title: string;
  added_user_id: number;
}
```

### レスポンス
```
{
  id: number;
}
```

## 🔶 saveNewVoteOption

### url
```
/api/saveNewVoteOption/
```

### メソッド
POST

### パラメーター
```
{
  vote_title_id: number;
  title: string;
}
```

### レスポンス
```
{
  id: number;
}
```

## updateVoteCard

### url
```
/api/updateVoteCard/:id
```

### メソッド
PUT

### パラメーター
```
{
  id: number;
  title: string;
  added_user_id: number;
  is_closed: boolean;
  updated: Date
  options: IVoteOption[];
}
```

### レスポンス
```
{
  id: number;
}
```

## 🔶 deleteVoteCard

### url
```
/api/deleteVoteCard/:id
```

### メソッド
DELETE

### パラメーター
無し

### レスポンス
```
{
  id: number;
}
```