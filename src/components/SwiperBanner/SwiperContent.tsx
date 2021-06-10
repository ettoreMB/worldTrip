import { Flex,Text, LinkOverlay, Box} from "@chakra-ui/react";
import Link, { LinkProps } from 'next/link'

interface SwiperContentProps extends LinkProps{
  childrenTitle: string;
  children: string;
  bg: string;
}

export function SwiperContent({childrenTitle, children, bg, ...rest}: SwiperContentProps) {
  return (

    
     
        
        <Flex
        h='300px'
        w='100%'
        bg='no-repeat center'
        backgroundSize='cover'
        bgImage={`linear-gradient(rgba(0, 0, 0, 0.3),rgba(0, 0, 0, 0.5)), url(${bg})`}
        color='white'
        direction='column'
        align='center'
        justify='center'
        >
          <Link passHref {...rest}>
            <LinkOverlay >
              <Text
                fontWeight='700'
                fontSize='3rem'
                lineHeight='4.5rem'
                textAlign='center'
              >
                {childrenTitle}
              </Text>
          
              <Text
                fontSize='24'
                fontWeight='700'
                lineHeight='8'
              >
                {children}
              </Text>
            </LinkOverlay>
          </Link>
        </Flex>
        
      

  )
}