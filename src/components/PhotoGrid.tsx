import { SimpleGrid, StackProps, Box, AspectRatio } from '@chakra-ui/react'

export const PhotoGrid = (props: StackProps) => (
  <>
    <SimpleGrid
      minW={['100%', '90%', '80%']}
      columns={[null, 2, 2]}
      px={[0, 4]}
      spacing={4}
    >
      <AspectRatio ratio={1}>
        <Box bgColor={'grey'}></Box>
      </AspectRatio>
      <AspectRatio ratio={1}>
        <Box bgColor={'grey'}></Box>
      </AspectRatio>
      <AspectRatio ratio={1}>
        <Box bgColor={'grey'}></Box>
      </AspectRatio>
      <AspectRatio ratio={1}>
        <Box bgColor={'grey'}></Box>
      </AspectRatio>
    </SimpleGrid>
  </>
)
