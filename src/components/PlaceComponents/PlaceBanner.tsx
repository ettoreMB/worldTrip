import { Flex, Image, Text } from "@chakra-ui/react";

interface CitybannerProps {
  image: string;
  title: string;
}

export default function PlaceBanner({image, title}: CitybannerProps) {
  return (
    <Flex 
      w='100%'
      h='500px'
      bgImage={`linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.5)), url(${image})`}
      backgroundSize='cover'
      align='flex-end'
      pb='59'
      pl='140'
    >
      <Text
        color='white'
        align='end'
        fontWeight='600'
        fontSize='48'
        lineHeight='72px'
      >
        {title}
      </Text>
    </Flex>
  )
  
}