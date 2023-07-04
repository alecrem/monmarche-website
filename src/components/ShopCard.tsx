import {
  Link as ChakraLink,
  Heading,
  Text,
  Box,
  AspectRatio,
} from '@chakra-ui/react'

export const ShopCard = ({
  title,
  address,
  openingHours,
  phone,
  email,
  facebook,
  instagram,
  mapurl,
}: {
  title: string
  address: string
  openingHours?: string
  phone: string
  email: string
  facebook: string
  instagram: string
  mapurl: string
}) => (
  <Box minWidth={'30vh'}>
    <Heading size={'lg'}>{title}</Heading>
    <Text>
      <b>Add:</b> {address}
    </Text>
    {openingHours && (
      <Text>
        <b>Open:</b> {openingHours}
      </Text>
    )}
    <Text>
      <b>Tel:</b> {phone}
    </Text>
    <Text>
      <b>email:</b> {email}
    </Text>
    <Text>
      <b>Facebook:</b>{' '}
      <ChakraLink href={`https://www.facebook.com/${facebook}`}>
        {facebook}
      </ChakraLink>
    </Text>
    <Text>
      <b>Instagram:</b>{' '}
      <ChakraLink href={`https://www.instagram.com/${instagram}`}>
        {instagram}
      </ChakraLink>
    </Text>
    <AspectRatio ratio={4 / 3}>
      <iframe src={mapurl} width="400" height="300" loading="lazy"></iframe>
    </AspectRatio>
  </Box>
)

ShopCard.defaultProps = {
  title: 'Shop Name',
  address: 'Shop Address',
  phone: '000-0000-0000',
  email: 'email@yourshop.com',
  facebook: 'facebook_url_slug',
  instagram: 'instagram_user',
  mapurl:
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6663.268923921602!2d130.575274!3d33.380608!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3541a1c1b254611b%3A0x76be69e99415fd75!2smon%20March%C3%A9!5e0!3m2!1sen!2sjp!4v1688461027721!5m2!1sen!2sjp',
}
