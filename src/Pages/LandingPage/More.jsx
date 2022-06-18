import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'

const More = () => {
    return (
        <div>
            <Grid templateColumns='repeat(5, 1fr)' gap={6} padding={10}>
                <GridItem w='100%'>
                    <img src="https://cdn.dashhudson.com/media/640/1635798101.057760741882.jpeg" alt="img" />
                </GridItem>
                <GridItem w='100%'>
                    <img src="https://cdn.dashhudson.com/media/640/1628598956.37983440346.jpeg" alt="img" />
                </GridItem>
                <GridItem w='100%'>
                    <img src="https://cdn.dashhudson.com/media/640/1625812071.39856985243.jpeg" alt="img" />
                </GridItem>
                <GridItem w='100%'>
                    <img src="https://cdn.dashhudson.com/media/640/1626312391.206982943516.jpeg" alt="img" />
                </GridItem>
                <GridItem w='100%'>
                    <img src="https://cdn.dashhudson.com/media/640/1619542695.85628681795.jpeg" alt="img" />
                </GridItem>
                {/*  */}
            </Grid>
        </div>
    )
}

export default More;