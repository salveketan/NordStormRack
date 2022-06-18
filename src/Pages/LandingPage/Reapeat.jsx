import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
const Reapeat = () => {
  return (
    <div>
      <Box w='100%' p={4} color='black'>

        <Grid templateColumns='repeat(2, 1fr)' gap={6}>
          <GridItem w='100%'>
            <img src="https://n.nordstrommedia.com/id/a0dd02d9-eec6-4fb5-8944-8de326bf7b58.jpeg?h=555&w=804" alt="img" />
            <Heading as='h6' size='sm' p={2}>
              Tops & Shorts Under $50
            </Heading>
          </GridItem>
          <GridItem w='100%'>
            <img src="https://n.nordstrommedia.com/id/9d58aaf1-a787-4e55-aa4d-928afa6beb5c.jpeg?h=555&w=804" alt="img" />
            <Heading as='h6' size='sm' p={2}>
              HOUSE OF WANT, Marc Jacobs & More
            </Heading>

          </GridItem>

        </Grid>
      </Box>
    </div>
  )
}

export default Reapeat
