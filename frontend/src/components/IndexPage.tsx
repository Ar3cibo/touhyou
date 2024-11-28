import {Box, Center, Heading, Button} from "@yamada-ui/react"
import { GiVote } from "react-icons/gi";
import {useNavigate} from "react-router-dom";

import {useEffect, useState} from "react";
import {IVoteCard} from "../globals";
import {VoteCard} from "./VoteCard.tsx";


export function IndexPage() {

  const navigate = useNavigate();

  function handlerClickMoveToNew() {
    navigate('/new')
  }

  const [currentVoteCards, setCurrentVoteCards] = useState<IVoteCard[]>([]);

  useEffect(() => {
    (async () => {
      const URL = process.env.VITE_URL;
      const _resultAllVoteCards = await fetch(URL + '/api/allVoteCards');
      const _aryVoteCards = await _resultAllVoteCards.json();
      setCurrentVoteCards(_aryVoteCards as IVoteCard[]);
    })();
  }, []);

  return (
    <>
      <Center>
        <Heading as="h1" size="4xl" isTruncated><GiVote/> TOHYO</Heading>
      </Center>
      <Box p={'12px'} m={'12px'} rounded={'6px'} borderWidth={'1px'} borderColor={'black'} w={'960px'} ml={'auto'} mr={'auto'}>

        {/* 新規登録ボタン */}
        <Button colorScheme={'sky'} w={'100%'} onClick={() => handlerClickMoveToNew()}>新規登録</Button>

        {/* 投票カード表示 */}
        {currentVoteCards.map((voteCard, index) => {
          return(
            <VoteCard key={index} currentVoteCard={voteCard}/>
          )
        })}


      </Box>
    </>
  )
}