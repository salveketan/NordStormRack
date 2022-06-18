import React from 'react'
import { Box, Heading } from '@chakra-ui/react'
import { Grid, GridItem } from '@chakra-ui/react'
const Flash = () => {
  return (
    <div>
      <Box w='100%' p={4} color='black'>
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
          <GridItem w='100%'>
            <img src="https://n.nordstrommedia.com/id/5a3c7354-88de-4e17-a69e-148913205c62.jpeg?h=1224&w=1224" alt="img" />

            <Heading as='h6' size='sm' p={2}>
              Running Shoes Feat. ASICS, Saucony & More
            </Heading>
          </GridItem>
          <GridItem w='100%'>
            <img src="https://n.nordstrommedia.com/id/45241fba-4d34-4762-9606-b8b1def173b9.jpeg?h=1224&w=1224" alt="img" />
            <Heading as='h6' size='sm' p={2}>
              Women's Skirts, Pants & More Up to 60% Off
            </Heading>
          </GridItem>
          <GridItem w='100%'>
            <img src="https://n.nordstrommedia.com/id/04947e78-c1ce-4e09-b8a5-8274f4caf745.jpeg?h=1224&w=1224" alt="img" />
            <Heading as='h6' size='sm' p={2}>
              Men's Layers Feat. Cole Haan Up to 65% Off
            </Heading>
          </GridItem>

        </Grid>
      </Box>
    </div>
  )
}

export default Flash
