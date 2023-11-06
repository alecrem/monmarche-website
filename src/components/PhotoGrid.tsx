import { SimpleGrid, StackProps, AspectRatio, Image } from '@chakra-ui/react'

export const PhotoGrid = (props: StackProps) => (
  <>
    <SimpleGrid
      minW={['100%', '80%', '70%']}
      columns={[null, 2, 2]}
      px={[0, 4]}
      spacing={4}
    >
      <AspectRatio ratio={1}>
        <Image src={'/monmarche-1.jpg'} alt={'mon Marché 店舗 商品 1'} />
      </AspectRatio>
      <AspectRatio ratio={1}>
        <Image src={'/monmarche-2.jpg'} alt={'mon Marché 店舗 商品 2'} />
      </AspectRatio>
      <AspectRatio ratio={1}>
        <Image src={'/monmarche-3.jpg'} alt={'mon Marché 店舗 商品 3'} />
      </AspectRatio>
      <AspectRatio ratio={1}>
        <Image src={'/monmarche-4.jpg'} alt={'mon Marché 店舗 商品 4'} />
      </AspectRatio>
    </SimpleGrid>
  </>
)
