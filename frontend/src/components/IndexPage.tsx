import {Box, Center, Card, CardHeader, CardBody, Heading, Flex, Spacer, ListItem, List, Button} from "@yamada-ui/react"

export function IndexPage() {

  //データ仮置き------------------------------------------------------------------------------------------

  const questions = [
    {id: 1, question: '好きなテーマパークは？',user_id: 1,is_closed:true,updated:'2024-11-01 01:01:01'},
    {id: 2, question: '今一番いきたい場所は？',user_id: 1,is_closed:true,updated:'2024-11-02 01:01:01'},
    {id: 3, question: '好きなお酒は？',user_id: 1,is_closed:true,updated:'2024-11-03 01:01:01'},
    {id: 4, question: "好きな食べ物は？",user_id: 1,is_closed:true,updated:'2024-11-04 01:01:01'},
    {id: 5, question: "住んでみたい国は？",user_id: 1,is_closed:true,updated:'2024-11-05 01:01:01'},
  ]

  const allOptions = [
    {option_id: 1, question_id:1, option:'ディズニー',user_id:1,updated:'2024-11-01 01:01:01'},
    {option_id: 1, question_id:2, option:'イタリア',user_id:1,updated:'2024-11-02 02:02:02'},
    {option_id: 1, question_id:3, option:'ビール',user_id:2,updated:'2024-11-03 03:03:03'},
    {option_id: 2, question_id:1, option:'ユニバ',user_id:2,updated:'2024-11-04 04:04:04'},
    {option_id: 2, question_id:2, option:'北海道',user_id:3,updated:'2024-11-05 05:05:05'},
    {option_id: 2, question_id:3, option:'ハイボール',user_id:3,updated:'2024-11-06 06:06:06'},
  ]

  const user_voting = [
    {user_id: 1, question_id: 1,option_id:1},
    {user_id: 2, question_id: 1,option_id:1},
    {user_id: 3, question_id: 1,option_id:2},
    {user_id: 1, question_id: 2,option_id:2},
    {user_id: 2, question_id: 2,option_id:1},
    {user_id: 3, question_id: 2,option_id:2},
  ]

  //-----------------------------------------------------------------------------------------------------

  const questionCards = questions.map(question => {

    const options = allOptions.filter(option => option.question_id === question.id);
    const viewOptions = options.map(option => {
      const votes = user_voting.filter(vote => {
        return question.id === vote.question_id && option.option_id === vote.option_id
      }).length

      return (
          <Flex>
            <ListItem mr={'50px'}>{option.option}</ListItem>
            <Spacer/>
            <ListItem>投票数：{votes}</ListItem>
          </Flex>
      )
    })



    return(
        <Card m={'12px'}>
          <CardHeader>
            <Heading size="md">{question.question}</Heading>
          </CardHeader>
          <CardBody ml={'12sspx'}>
            <List>
              {viewOptions}
            </List>
            <Button ml={'auto'} width={'200px'}>投票する</Button>
          </CardBody>
        </Card>
    )
  })


  return (
    <>
      <Box p={'12px'} m={'12px'} rounded={'6px'} borderWidth={'1px'} borderColor={'black'} w={'960px'} ml={'auto'} mr={'auto'}>
        <h1>Touhyou</h1>

        {/* 新規登録ボタン */}
        <Box as={'button'} mt={'12px'} mb={'12px'} w={'100%'} h={'36px'} bg={'sky.500'} rounded={'6px'} color={'white'}>
          <Center>
            新規登録
          </Center>
        </Box>
        {questionCards}
      </Box>
    </>
  )
}