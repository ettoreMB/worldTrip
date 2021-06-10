import PlaceCardLink from "./PlaceCardLink";
import { Box, Text, SimpleGrid } from '@chakra-ui/react'


export default function PlaceNav() {
  return(
    <Box>
      <Text
        fontWeight='500'
        fontSize='36px'
        lineHeight='54px'
        align='left'
        py='10'
      >
        Cidades +100
      </Text>
      <SimpleGrid my='50' w='100%' minChildWidth="279px" spacing="40px" rows={1}>
        <PlaceCardLink 
          image={'europe1.jpg'}
          city={'Londres'}
          state={'Reino Unido'}
          flag={'UnitedKing.png'}
        />
        <PlaceCardLink 
          image={'europe1.jpg'}
          city={'Londres'}
          state={'Reino Unido'}
          flag={'UnitedKing.png'}
        />
        <PlaceCardLink 
          image={'europe1.jpg'}
          city={'Londres'}
          state={'Reino Unido'}
          flag={'UnitedKing.png'}
        />
      </SimpleGrid>
    </Box>
    
  )
}