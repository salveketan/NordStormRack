import React from 'react'
import { Grid, GridItem } from '@chakra-ui/react'

const Trending = () => {
  return (
    <div>
      <Grid templateColumns='repeat(5, 1fr)' gap={6} padding={10}>
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
        <GridItem w='100%' h='10' bg='blue.500' />
      </Grid>
    </div>
  )
}

export default Trending
