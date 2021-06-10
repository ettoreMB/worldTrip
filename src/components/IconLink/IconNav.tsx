import { Flex, useBreakpointValue } from "@chakra-ui/react";
import { IconLink } from "./IconLink";

export function IconNav() {

  const isWideVersion  = useBreakpointValue ({
    base: true,
    lg: false,
  })
  return (
    <Flex
      width={['50%','100%']}
      justify='space-between'
      py={['10','20']}
      direction={["column",'row']}
      align={['self-start','center']}
      m='auto'
    >

      <IconLink image='Nightlife.png' href='/' LinkName='Vida Noturna' />
      <IconLink  image='Beach.png' href='/' LinkName='Praia'/>
      <IconLink  image='Modern.png' href='/' LinkName='Moderno'/>
      <IconLink  image='Classic.png' href='/' LinkName='Classico'/>
      <IconLink  image='More.png' href='/' LinkName='Mais'/>

    </Flex>
  )
}