import { Image, Link as ChakraLink, useBreakpointValue,  Flex, Text} from '@chakra-ui/react'
import Link, { LinkProps } from 'next/link'


interface IconLinkProps extends LinkProps {
  image?: string;
  LinkName: string;

}



export function IconLink({image, LinkName,  ...rest}: IconLinkProps) {

  const isWideVersion  = useBreakpointValue ({
    base: true,
    lg: false,
  })

    if(!isWideVersion) {
      return (
        <ChakraLink>
          <Link {...rest} passHref>
            <Image src={`/assets/${image}`}/>
          </Link>
        </ChakraLink>
      )
      
    }

    return (
      <ChakraLink textDecoration='none'>
          <Link {...rest} passHref>
            <Flex align='center' justify='center' w='100%'>
             <Text 
              as='span'
              color='yellow.500'
              fontSize='6xl'
              fontWeight='bold'
              letterSpacing="tight"
              w='10'>.
              </Text>
              
              <Text
                fontWeight='500'
                fontSize='2xl'
                color='gray.900'
                pt='5'

              >{LinkName}</Text>
            </Flex>
          </Link>
        </ChakraLink>
    )

    
    
  
}