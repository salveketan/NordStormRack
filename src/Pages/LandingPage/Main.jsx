import React from 'react'
import Carousel from './Courasal'
import PromoCard from './PromoCard'
import { Box, Heading, Button, Text } from '@chakra-ui/react'
import Flash from './Flash'
import Reapeat from './Reapeat'
import Trending from './Trending'
import More from './More'

const Main = () => {
    return (
        <div>
            <Box bg='white' w='100%' p={4} color='Black' align={'center'}>
                <Text fontSize='29px'
                    display="block"
                    fontFamily="Brandon Text,Arial,sans-serif"
                >
                    More to Rack, easier and faster.
                </Text>
                {/* <Button>Sign in</Button> */}
                <Button
                    as='a'
                    w='20%'
                    p={5}
                    color='rgb(0,146,223)'
                    border="1px solid rgb(0,146,223)"
                    marginTop={2}
                    href="/singin"
                >
                    Sign-In Or Create an Acount
                </Button>
            </Box>
            <PromoCard />
            <Carousel />

            <Heading as='h4' size='md' align={'center'} p={5}>
                Here Today, Gone in a Flash
            </Heading>
            <Flash />
            <Heading as='h4' size='md' align={'center'} p={5}>
                Wear on Repeat
            </Heading>
            <Reapeat />
            <Heading as='h4' size='md' align={'center'} p={5}>
                Tending now
            </Heading>
            <Trending />

            <Heading as='h4' size='md' align={'center'} p={5}>
                Rack Your Look
            </Heading>
            <More />
        </div>
    )
}

export default Main
