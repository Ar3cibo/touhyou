import {Box, Center} from "@yamada-ui/react"

export function IndexPage() {
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

      </Box>
    </>
  )
}