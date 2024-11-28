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

  const URL = process.env.VITE_URL;

  async function handlerClickVoteDelete() {
      const url = URL + "/api/voteCard/" + Props.currentVoteCard.question_id
      const res = await fetch(url, {method: "DELETE"})
      const res_body = await res.json()
      location.reload()
      console.log(res_body)
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
        <Button variant="outline" colorScheme="red" ml={'auto'} width={'200px'} onClick={() => handlerClickVoteDelete()}>削除する</Button>
      </CardBody>
    </Card>
  )
}