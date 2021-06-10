import {Flex,  Divider, Center} from '@chakra-ui/react'

import Head from 'next/head';
import { Banner } from '../components/Banner';
import { IconNav } from '../components/IconLink/IconNav';
import { SwiperBanner } from '../components/SwiperBanner';


export default function Home() {
  return (
    <>
      <Head>
        <title>WorldTrip</title>
      </Head>
      <Banner />
      <Flex
        maxWidth='1240px'
        direction='column'
        m='auto'
        mb='40px'

      >
        <IconNav />

        <Center mb='20px'>
          <Divider orientation="horizontal" w='90px' colorScheme='black' size='30px'/>
        </Center>

        <SwiperBanner />
    
      </Flex>
    </>
  );
}
