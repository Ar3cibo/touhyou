import {Box, Button, Flex, Heading, Radio, RadioGroup, Text, Container} from "@yamada-ui/react";
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import {IVoteCard} from "../globals";

export function AnswerQuestionPage() {

  const navigate = useNavigate();
  const {question_id} = useParams();

  function handlerClickSelectOption(value:string) {
    setSelectValue(value)
  }

  function handlerClickMoveToIndex() {
    navigate('/')
  }

  const [currentVoteCard, setCurrentVoteCard] = useState<IVoteCard>();

  const [selectValue, setSelectValue] = useState("");

  useEffect(() => {
    (async () => {
      const resultVoteCard = await fetch('http://localhost:8080/api/voteCards/' + question_id);
      const voteCard = await resultVoteCard.json();
      setCurrentVoteCard(voteCard[0] as IVoteCard);
    })()
  }, []);


    return (
        <>
            <Box p={'12px'} m={'12px'} rounded={'6px'} borderWidth={'1px'} borderColor={'black'} w={'960px'} ml={'auto'} mr={'auto'}>
                <Container centerContent>
                        <Heading as="h1" size="2xl" isTruncated>回答</Heading>
                        <Box>
                            <Flex>
                              <Text fontSize="2xl" isTruncated mr={'40px'}>質問</Text>
                                <Text fontSize="2xl" isTruncated >{currentVoteCard?.question}</Text>
                            </Flex>
                            <Flex mt={'50px'}>
                                <Text fontSize="2xl" isTruncated  mr={'40px'}>回答</Text>
                                <RadioGroup value={selectValue} onChange={(value) => handlerClickSelectOption(value)}>
                                  {currentVoteCard?.options.map((option,index) => {
                                    return <Radio key={index} value={option.option} size="lg" mb={'12px'}>{option.option}</Radio>
                                  })}
                                </RadioGroup>
                            </Flex>
                        </Box>
                  <Flex>
                    <Button variant="outline" colorScheme="blue" m={'12px'} width={'300px'} onClick={() => {handlerClickMoveToIndex()}}>リストに戻る</Button>
                    <Button colorScheme={'blue'} m={'12px'} width={'300px'} >回答</Button>
                  </Flex>
                </Container>

            </Box>
        </>

        )
}