import { Box, LinkOverlay, Image, Flex, Text, Avatar, VStack, Center} from '@chakra-ui/react'


interface PlaceCardLinkProps {
  state: string;
  city: string;
  image: string;
  flag: string;
}

export default function PlaceCardLink({state, city, image, flag}: PlaceCardLinkProps) {
  return (
    <LinkOverlay >
      <Box  w='279px' >
        <Image src={`assets/images/${image}`}  h='173px' w='100%' borderTopRadius='4'/>
        <Flex
          justify='space-between'
          borderBottomRadius='4'
          border='2px'
          borderColor='yellow.500'
          borderTop='0'
          p='4'
        >
          <VStack align='flex-start' fontFamily='Barlow' spacing='4' w='50%'>
            <Text
              fontWeight='500'
              fontSize='20px'
              lineHeight='6'
              color='gray.600'

            >
              {state}
            </Text>
            <Text
              fontWeight='500'
              fontSize='16'
              lineHeight='6'
              color='#999999'

            >
              {city}
            </Text>
          </VStack>
          <Center >
            <Avatar src={`assets/flags/${flag}`}size='sm' />
          </Center>
        </Flex>
      </Box>
    </LinkOverlay>
  )
}