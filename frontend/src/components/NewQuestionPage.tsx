import {Box, Input, Center, FormControl, Button, Flex, Heading} from "@yamada-ui/react"
import { IoAdd } from "react-icons/io5";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";


export function NewQuestionPage() {

  // const [countDrawOption,setCountDrawOption] = useState(2);

  const navigate = useNavigate()
  const[newQuestion, setNewQuestion] = useState("")
  const [aryAnswers, setAryAnswers] = useState(["",""]);
  const [isNotAddNewOption, setIsNotAddNewOption] = useState(false)

  useEffect(() => {
    if (aryAnswers.length >= 6) {
      setIsNotAddNewOption(true);
    } else {
      setIsNotAddNewOption(false);
    }
  }, [aryAnswers]);

  function handlerChangeOptionValue(changeOption:string, targetIndex:number) {
    setAryAnswers(aryAnswers.map((item, i) => i === targetIndex ? changeOption : item))
  }

  function handlerClickAddNewOption() {
    if (aryAnswers.length < 6){
      setAryAnswers([...aryAnswers, ""]);
    }
  }

  function handlerClickDeleteOption(targetIndex: number) {
    if(aryAnswers.length > 2){
      setAryAnswers(aryAnswers.filter((answer, index) => index !== targetIndex && answer === answer))
    }
  }

  function handlerClickMoveToIndex() {
    navigate('/')
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
            <Input type="text" placeholder="質問を入力" value={newQuestion} onChange={(evt) => {setNewQuestion(evt.target.value)}}/>
          </FormControl>
        </Box>
        <Box m={'12px'}>
          <FormControl label="２つ以上の回答を設置してください(最大６個)" mt={'30px'}>
              {aryAnswers.map((answer, index) => {
                  return(
                      <Flex key={index} gap="md" mt={'12px'}>
                          <Input type="text" value={answer} placeholder="回答を入力" onChange={(evt) => {
                            handlerChangeOptionValue(evt.target.value, index)
                          }}/>
                          <Button colorScheme="red" onClick={() => {handlerClickDeleteOption(index)}}>削除</Button>
                      </Flex>
                  );
              })}
          </FormControl>
          <Center>
            <Button colorScheme="sky" leftIcon={<IoAdd />} m={'12px'} onClick={() =>{handlerClickAddNewOption()}} isDisabled={isNotAddNewOption}>
              回答の追加
            </Button>
          </Center>
        </Box>
          <Center>
            <Button variant="outline" colorScheme="blue" m={'12px'} width={'300px'} onClick={() => {handlerClickMoveToIndex()}}>リストに戻る</Button>
            <Button colorScheme="blue" m={'12px'} width={'300px'}>質問登録</Button>
          </Center>
      </Box>
    </>
  )
}