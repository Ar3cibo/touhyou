import {Button, Card, CardBody, CardHeader, Heading, List} from "@yamada-ui/react";
import {IVoteCard} from "../globals";
import {useNavigate} from "react-router-dom";
import {VoteCountList} from "./VoteCountList.tsx";

interface IProps {
  currentVoteCard:IVoteCard
}


export function VoteCard(Props: IProps) {

  const navigate = useNavigate()

  function handlerClickMoveToAnswer() {
    navigate("/answers/" + Props.currentVoteCard.question_id)
  }

  return(
    <Card m={'12px'}>
      <CardHeader>
        <Heading size="md">{Props.currentVoteCard.question}</Heading>
      </CardHeader>
      <CardBody ml={'12px'}>
        <List>
          {Props.currentVoteCard.options.map((option, index) => {
            return (
              <VoteCountList key={index} voteOption={option.option} voteCount={option.count}/>
            )
          })}
        </List>
        <Button ml={'auto'} width={'200px'} onClick={() => handlerClickMoveToAnswer()}>投票する</Button>
      </CardBody>
    </Card>
  )
}