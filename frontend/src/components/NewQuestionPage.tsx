import {Box, Input, Center, FormControl, Button, Flex, Heading} from "@yamada-ui/react"
import { IoAdd } from "react-icons/io5";


export function NewQuestionPage() {

  const num:number = 2;

  const answers = [];

  for (let i = 0; i < num; i++) {
    answers.push(
        <Flex key={i} gap="md" mt={'12px'}>
          <Input type="text" placeholder="回答を入力"/>
          <Button colorScheme="red">削除</Button>
        </Flex>
    )
  }

  return (
      <>
        <Box p={'12px'} m={'12px'} rounded={'6px'} borderWidth={'1px'} borderColor={'black'} w={'960px'} ml={'auto'} mr={'auto'}>
        <h1>NewQuestionPage</h1>
          <Center>
              <Heading as="h1" size="2xl" isTruncated>新しい質問</Heading>
          </Center>
        <Box m={'12px'}>
          <FormControl label="新しい質問内容を入力してください">
            <Input type="text" placeholder="質問を入力"/>
          </FormControl>
        </Box>
        <Box m={'12px'}>
          <FormControl label="２つ以上の回答を設置してください" mt={'30px'}>
            {answers}
          </FormControl>
          <Center>
            <Button colorScheme="sky" leftIcon={<IoAdd />} m={'12px'}>
              回答の追加
            </Button>
          </Center>
        </Box>
          <Center>
            <Button colorScheme="blue" m={'12px'} width={'300px'}>質問登録</Button>
          </Center>
      </Box>
    </>
  )
}