import { Stack, StackProps } from '@chakra-ui/react'

export const Main = (props: StackProps) => (
  <Stack
    gap={'1.5rem'}
    width={'100%'}
    maxWidth={'48rem'}
    mt={'-45vh'}
    pt={['6rem', '7rem', '7rem']}
    px={'1rem'}
    {...props}
  />
)
