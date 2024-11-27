import {Flex, ListItem, Spacer} from "@yamada-ui/react";

interface IProps {
  voteOption: string;
  voteCount:number;
}

export function VoteCountList(Props:IProps) {
  return (
    <Flex>
      <ListItem mr={'50px'}>{Props.voteOption}</ListItem>
      <Spacer/>
      <ListItem>投票数：{Props.voteCount}</ListItem>
    </Flex>
  )
}