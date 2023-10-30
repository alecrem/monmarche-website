import { Stack, StackProps, Box, AspectRatio } from '@chakra-ui/react'

export const PhotoGrid = (props: StackProps) => (
  <>
    <Stack
      spacing={4}
      direction={['column', 'column', 'row']}
      display={'flex'}
      alignItems={'flex-start'}
    >
      <AspectRatio ratio={1} minW={'360px'} minH={'360px'}>
        <Box bgColor={'red'}></Box>
      </AspectRatio>
      <AspectRatio ratio={1} minW={'360px'} minH={'360px'}>
        <Box bgColor={'blue'}></Box>
      </AspectRatio>
      <AspectRatio ratio={1} minW={'360px'} minH={'360px'}>
        <Box bgColor={'yellow'}></Box>
      </AspectRatio>
      <AspectRatio ratio={1} minW={'360px'} minH={'360px'}>
        <Box bgColor={'green'}></Box>
      </AspectRatio>
    </Stack>
  </>
)
