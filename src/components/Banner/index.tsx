import { Flex, Text, Box, Image, useBreakpointValue } from "@chakra-ui/react";

export function Banner() {

  const isWideVersion = useBreakpointValue({
    base: true,
    lg: false,
  })

  return (
    <Flex h='100vh' display='flex' align='center'>
      <Flex
        backgroundImage="url('/assets/Background.jpg')"
        backgroundSize='cover'
        h='335px'
        mb='5rem'
        w='100%'
      >
        <Flex
          color='white'
          pl='10%'
          w='100%'
          justify='center'
          direction='column'
        >
          <Text
            fontWeight='500'
            fontSize='36px'
            lineHeight='54px'
            maxWidth='426px'
            mb='8'
          >
            5 Continentes,<br/> infinitas possibilidades.
            </Text>

          <Text
            maxWidth='524px'
            fontWeight='400'
            fontSize='20px'
            lineHeight='30px'
          >Chegou a hora de tirar do papel a viagem que você sempre sonhou.</Text>
        </Flex>
        {!isWideVersion && (
          <Flex
          w='100%'
          flexDirection='row'
          justify='center'
          pt='8'
        >
          <Image src='/assets/Airplane.png' size='lg' boxSize='400px' objectFit='contain'/>
        </Flex>
        )}
        
      </Flex>
    </Flex>
  )
}