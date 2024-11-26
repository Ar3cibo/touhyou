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
      question_id: number;
      question: string;
      user_id: number;
      is_closed: boolean;
      updated: Date
      options: IVoteOption[];
    },
    {
      question_id: number;
      question: string;
      user_id: number;
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
  question_id: number;
  question: string;
  user_id: number;
  is_closed: boolean;
  updated: Date
  options: IVoteOption[];
}
```

## 🔶 saveNewVoteTitle
回答の選択肢をDBに追加する際、所属する投票の question_id が必要となる。

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
  question: string;
  user_id: number;
}
```

### レスポンス
```
{
  question_id: number;
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
  question_id: number;
  question: string;
}
```

### レスポンス
```
{
  question_id: number;
}
```

## 🔶 updateVoteCard

### url
```
/api/updateVoteCard/:id
```

### メソッド
PUT

### パラメーター
```
{
  question_id: number;
  question: string;
  user_id: number;
  is_closed: boolean;
  updated: Date
  options: IVoteOption[];
}
```

### レスポンス
```
{
  question_id: number;
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
  question_id: number;
}
```

## 🔶 userVoting

### url
```
/api/userVoting/:id
```

### メソッド
POST

### パラメーター
```
{
  user_id: number;
  question_id: number;
  option_id: number;
}
```

### レスポンス
```
{
  question_id: number;
  option_id: number;
}
```