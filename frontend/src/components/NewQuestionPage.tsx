import {Box, Input, FormControl, Button, Flex, Heading, Container, Center} from "@yamada-ui/react"
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

  async function handlerClickQuestionAdd() {

    const URL = process.env.VITE_URL;

    //質問追加
    const newQuestionData ={
      question: newQuestion,
      user_id: 5,
    }

    const url = URL + '/api/saveNewQuestion/'
    const params = {method: "POST",
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newQuestionData)
    };

    const res = await fetch(url, params);
    const body = await res.json()
    const { question_id } = body;
    console.log('res', body);

    //項目追加
    for (let i = 0; i < aryAnswers.length; i++) {
      const newOptionData = {
        question_id: question_id,
        option: aryAnswers[i],
        user_id: 5,
      }
      const url = URL + '/api/saveNewOption/'
      const params = {method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(newOptionData)
      };

      const res = await fetch(url, params);
      const body = await res.json()
      console.log('res', body);
    }
    navigate('/')
  }

  return (
      <>
        <Box p={'12px'} m={'12px'} rounded={'6px'} borderWidth={'1px'} borderColor={'black'} w={'960px'} ml={'auto'} mr={'auto'}>
          <Container centerContent>
              <Heading as="h1" size="2xl" isTruncated>新しい質問</Heading>
              <Box m={'12px'} w={'100%'}>
                <FormControl label="新しい質問内容を入力してください">
                  <Input type="text" placeholder="質問を入力" value={newQuestion} onChange={(evt) => {setNewQuestion(evt.target.value)}}/>
                </FormControl>
              </Box>
        <Box m={'12px'} w={'100%'}>
          <FormControl label="２つ以上の回答を設置してください(最大６個)" >
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
            <Flex>
              <Button variant="outline" colorScheme="blue" m={'12px'} width={'300px'} onClick={() => {handlerClickMoveToIndex()}}>リストに戻る</Button>
              <Button colorScheme="blue" m={'12px'} width={'300px'} onClick={() => handlerClickQuestionAdd()}>質問登録</Button>
            </Flex>
          </Container>
      </Box>
    </>
  )
}