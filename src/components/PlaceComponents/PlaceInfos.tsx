import { HStack, Text, Box, SimpleGrid } from '@chakra-ui/react'

export default  function PlaceInfo() {

  return (
    <SimpleGrid columns={2} spacing='10' py='10' minChildWidth='300px'>
      <Box textAlign='start' w='100%'>
        <Text 
          fontWeight='400'
          fontSize='24px'
          lineHeight='36px'
          align='justify'
          color='#47585B'
        > 
          A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
        </Text>
      </Box>
     
    <HStack justify='space-evenly' w='100%'>
      <Box display='flex' flexDirection='column' >
        <Text
          fontWeight='600'
          fontSize='48'
          lineHeight='72px'
          color='yellow.300'
        >
          50
        </Text>
        <Text
          fontWeight='600'
          fontSize='24'
          lineHeight='36px'
        >Paises</Text>
      </Box >
      <Box display='flex' flexDirection='column'>
        <Text
          fontWeight='600'
          fontSize='48'
          lineHeight='72px'
          color='yellow.300'
        >
          60
        </Text>
        <Text
          fontWeight='600'
          fontSize='24'
          lineHeight='36px'
        >
          Linguas
        </Text>
      </Box>
      <Box display='flex' flexDirection='column'>
        <Text
          fontWeight='600'
          fontSize='48'
          lineHeight='72px'
          color='yellow.300'
        >
          27
        </Text>
        <Text
          fontWeight='600'
          fontSize='24'
          lineHeight='36px'
        >
          Cidades+100
        </Text>
      </Box>
    </HStack>
  </SimpleGrid>
  )
}