import {Box, Button, Flex, Heading, Radio, RadioGroup, Text, Container} from "@yamada-ui/react";

export function AnswerQuestionPage() {
    return (
        <>
            <Box p={'12px'} m={'12px'} rounded={'6px'} borderWidth={'1px'} borderColor={'black'} w={'960px'} ml={'auto'} mr={'auto'}>
                <h1>AnswerQuestion</h1>
                <Container centerContent>
                        <Heading as="h1" size="2xl" isTruncated>回答</Heading>
                        <Box>
                            <Flex>
                                <Text mr={'30px'}>質問</Text>
                                <Text>好きなテーマパークは？</Text>
                            </Flex>
                            <Flex mt={'50px'}>
                                <Text mr={'30px'}>回答</Text>
                                <RadioGroup>
                                    <Radio>ディズニー</Radio>
                                    <Radio>ユニバ</Radio>
                                </RadioGroup>
                            </Flex>
                        </Box>
                    <Button colorScheme={'blue'}>回答</Button>
                </Container>

            </Box>
        </>

        )
}