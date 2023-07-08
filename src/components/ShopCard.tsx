import {
  Link as ChakraLink,
  Button,
  Text,
  Box,
  AspectRatio,
  Flex,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaInstagram, FaEnvelope, FaPhone, FaMap } from 'react-icons/fa'

export const ShopCard = ({
  title,
  address,
  openingHours,
  phone,
  email,
  instagram,
  mapurl,
}: {
  title: string
  address: string
  openingHours?: string
  phone: string
  email: string
  instagram: string
  mapurl: string
}) => {
  return (
    <Flex p={4} w={'full'}>
      <Box
        bg={useColorModeValue('white', 'gray.800')}
        maxW={'sm'}
        minW={'sm'}
        borderWidth={'1px'}
        rounded={'lg'}
        shadow={'lg'}
        position={'relative'}
      >
        <AspectRatio ratio={1} roundedTop={'lg'}>
          <iframe src={mapurl} loading={'lazy'}></iframe>
        </AspectRatio>

        <Box p={6}>
          <Flex mt={1} justifyContent={'space-between'} alignContent={'center'}>
            <Box
              fontSize={'2xl'}
              fontWeight={'semibold'}
              as={'h4'}
              lineHeight={'tight'}
              isTruncated
            >
              {title}
            </Box>
          </Flex>

          {openingHours && (
            <Text mt={2}>
              <b>Open:</b> {openingHours}
            </Text>
          )}
          <Text mt={2} fontSize={'80%'}>
            <Button
              as={ChakraLink}
              variant={'outline'}
              size={'sm'}
              href={`https://www.google.co.jp/maps?hl=ja&q=${address}`}
            >
              <FaMap />
            </Button>{' '}
            {address}
          </Text>
          <Text mt={2}>
            <Button
              as={ChakraLink}
              variant={'outline'}
              size={'sm'}
              href={`tel:${phone}`}
            >
              <FaPhone />
              &nbsp;
              {phone}
            </Button>
          </Text>
          <Text mt={2}>
            <Button
              as={ChakraLink}
              variant={'outline'}
              size={'sm'}
              href={`mailto:${email}`}
            >
              <FaEnvelope />
              &nbsp;
              {email}
            </Button>
          </Text>
          <Text mt={2}>
            <Button
              as={ChakraLink}
              variant={'outline'}
              size={'sm'}
              href={`https://www.instagram.com/${instagram}`}
            >
              <FaInstagram />
              &nbsp;
              {instagram}
            </Button>
          </Text>
        </Box>
      </Box>
    </Flex>
  )
}

ShopCard.defaultProps = {
  title: 'Shop Name',
  address: 'Shop Address',
  phone: '000-0000-0000',
  email: 'email@yourshop.com',
  instagram: 'instagram_user',
  mapurl:
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6663.268923921602!2d130.575274!3d33.380608!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3541a1c1b254611b%3A0x76be69e99415fd75!2smon%20March%C3%A9!5e0!3m2!1sen!2sjp!4v1688461027721!5m2!1sen!2sjp',
}
