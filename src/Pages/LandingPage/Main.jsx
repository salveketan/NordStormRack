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
                <Text fontSize='30px' >
                    More to Rack, easier and faster
                </Text>
                <Button>Sign in</Button>
            </Box>
            <PromoCard />
            <Carousel />
            <Text fontSize='30px' align={'center'}>
                Here Today, Gone in a Flash
            </Text>
            <Flash />
            <Text fontSize='30px' align={'center'}>
                Wear on Repeat
            </Text>
            <Reapeat />
            <Text fontSize='30px' >
                Tending now
            </Text>
            <Trending />
            <Text fontSize='30px' align={'center'}>
                Know more
            </Text>
            <More />
        </div>
    )
}

export default Main
