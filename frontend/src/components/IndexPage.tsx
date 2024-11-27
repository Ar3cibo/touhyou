import {Box, Center, Card, CardHeader, CardBody, Heading, Flex, Spacer, ListItem, List, Button} from "@yamada-ui/react"
import { GiVote } from "react-icons/gi";
import {useNavigate} from "react-router-dom";
import {testVoteCard} from "../testData/testDataVoteCard.ts";
import {useEffect, useState} from "react";
import {IVoteCard} from "../globals";

export function IndexPage() {

  const navigate = useNavigate();

  function handlerClickMoveToNew() {
    navigate('/new')
  }

  function handlerClickMoveToAnswer() {
    navigate("/answer")
  }

  const [currentVoteCards, setCurrentVoteCards] = useState<IVoteCard[]>([]);

  useEffect(() => {
    const _voteCards:IVoteCard[] = [];

    for (let i = 0; i < 6 ; i++) {
      _voteCards.push(testVoteCard)
    }

    setCurrentVoteCards(_voteCards)

  }, []);


  const questionCards = currentVoteCards.map(card => {

    const options = card.options;
    const viewOptions = options.map(option => {

      return (
          <Flex>
            <ListItem mr={'50px'}>{option.option}</ListItem>
            <Spacer/>
            <ListItem>投票数：{option.count}</ListItem>
          </Flex>
      )
    })


    return(
        <Card m={'12px'}>
          <CardHeader>
            <Heading size="md">{card.question}</Heading>
          </CardHeader>
          <CardBody ml={'12px'}>
            <List>
              {viewOptions}
            </List>
            <Button ml={'auto'} width={'200px'} onClick={() => handlerClickMoveToAnswer()}>投票する</Button>
          </CardBody>
        </Card>
    )
  })


  return (
    <>
      <Center>
        <Heading as="h1" size="4xl" isTruncated><GiVote/> TOHYO</Heading>
      </Center>
      <Box p={'12px'} m={'12px'} rounded={'6px'} borderWidth={'1px'} borderColor={'black'} w={'960px'} ml={'auto'} mr={'auto'}>
        {/* 新規登録ボタン */}
        <Button colorScheme={'sky'} w={'100%'} onClick={() => handlerClickMoveToNew()}>新規登録</Button>
        {questionCards}
      </Box>
    </>
  )
}