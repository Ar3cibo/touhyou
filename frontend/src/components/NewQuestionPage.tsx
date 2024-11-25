import { Box } from "@yamada-ui/react"
import { FormControl } from "@yamada-ui/react"
import { Button } from "@yamada-ui/react"

export function NewQuestionPage() {

  return (
    <>
      <Box p={'12px'} m={'12px'} rounded={'6px'} borderWidth={'1px'} borderColor={'black'} w={'960px'} ml={'auto'} mr={'auto'}>
        <h1>NewQuestionPage</h1>
        <h2>新しい質問</h2>
        <Box>
          <FormControl label="新しい質問内容を入力してください">
            <input type="text" placeholder="質問を入力" />
          </FormControl>
        </Box>
        <Box>
          <FormControl label="２つ以上の回答を設置してください">
            <input type="text" placeholder="回答を入力" />
            <Button colorScheme="red">削除</Button>
            <input type="text" placeholder="回答を入力" />
            <Button colorScheme="red">削除</Button>
            <input type="text" placeholder="回答を入力" />
            <Button colorScheme="red">削除</Button>
          </FormControl>
        </Box>

      </Box>
    </>
  )
}