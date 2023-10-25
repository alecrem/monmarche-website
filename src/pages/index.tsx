import { Text, Center, Heading, Stack, Image } from '@chakra-ui/react'

import { Container } from '../components/Container'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'
import { ShopCard } from '../components/ShopCard'

const mapIframeUrls = [
  'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6663.268923921602!2d130.575274!3d33.380608!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3541a1c1b254611b%3A0x76be69e99415fd75!2smon%20March%C3%A9!5e0!3m2!1sen!2sjp!4v1688461027721!5m2!1sen!2sjp',
  'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6786.329189221611!2d131.083361!3d31.738707999999995!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x353f2659dbebffff%3A0x4b709954aeaa2bab!2sSLF!5e0!3m2!1sen!2sjp!4v1688461156562!5m2!1sen!2sjp',
]
const Index = () => (
  <>
    <Container minW={'60%'}>
      <Main mt={'5vh'}>
        <Center>
          <Heading>
            <Image
              src={'/monmarche-logo-2023.png'}
              maxW={'300px'}
              alt={'mon Marché'}
            />
          </Heading>
        </Center>
        <Center>
          <Text
            fontWeight={'black'}
            fontSize={'lg'}
            align={'center'}
            maxWidth={'32rem'}
            pb={'3em'}
          >
            フランスを主に、ヨーロッパの古道具を販売。
            商品は、ヨーロッパに直接仕入れに行って、
            ひとつひとつ選んでおります。
            ぜひご覧ください。自然派ワインも置いております。
            大切につくられたワインで素敵時間をお過ごしください…{' '}
          </Text>
        </Center>
      </Main>
    </Container>
    <Container height={'100vh'}>
      <Main mt={['-20vh', '-20vh', '-16vh']}>
        <Center mt={20}>
          <Stack
            spacing={4}
            direction={['column', 'column', 'row']}
            display={'flex'}
            alignItems={'flex-start'}
          >
            <ShopCard
              title={'mon Marché'}
              address={'838-0124 福岡県小郡市古飯489-1'}
              openingHours={'水曜日 11:00-16:00'}
              phone={'090-2078-7809'}
              email={'info@mmfukuoka.com'}
              instagram={'_monmarche'}
              mapurl={mapIframeUrls[0]}
            />
            <ShopCard
              title={'mon Marché SLF店'}
              address={'885-0015 宮崎県都城市千町5000 (SLF)'}
              openingHours={'第2第3土曜日 13:00-15:00'}
              phone={'090-2078-7809'}
              email={'info@mmfukuoka.com'}
              instagram={'_monmarche'}
              mapurl={mapIframeUrls[1]}
            />
          </Stack>
        </Center>
      </Main>

      <Footer>
        <Text align={'center'}>
          <Center>
            <Image
              src={'/monmarche-logo-2023.png'}
              alt={'mon Marché'}
              maxW="160px"
            />
          </Center>
          <br />
          Copyright © 2018 - {new Date().getFullYear()} mon Marché
          <br />
          ヨーロッパの古道具屋さんと自然派ワイン
        </Text>
      </Footer>
    </Container>
  </>
)

export default Index
