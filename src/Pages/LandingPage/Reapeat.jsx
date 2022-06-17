import React from 'react'
import { Box } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
const Reapeat = () => {
  return (
    <div>
      <Box bg='tomato' w='100%' p={4} color='white'>
        <Grid templateColumns='repeat(2, 1fr)' gap={6}>
          <GridItem w='100%' h='10' bg='blue.500' />
          <GridItem w='100%' h='10' bg='blue.500' />

        </Grid>
      </Box>
    </div>
  )
}

export default Reapeat
