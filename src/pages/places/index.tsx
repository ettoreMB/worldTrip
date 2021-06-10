import { VStack, Box} from '@chakra-ui/react'

import PlaceBanner from '../../components/PlaceComponents/PlaceBanner';
import PlaceInfo from '../../components/PlaceComponents/PlaceInfos';
import PlaceNav from '../../components/PlaceComponents/PlaceNav';


export default function City() {
  return (
    <VStack>
      <PlaceBanner image='assets/images/Japan.jpg' title='Japão'/>
      <Box maxWidth='1240px' m='auto' align='center' py='10' >
        <PlaceInfo />
        <PlaceNav />
      </Box>
    </VStack>
  )
}