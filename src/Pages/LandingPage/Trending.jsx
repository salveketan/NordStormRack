import React from 'react'
import { Grid, GridItem, Heading } from '@chakra-ui/react'

const Trending = () => {
  return (
    <div>
      <Grid templateColumns='repeat(5, 1fr)' gap={6} padding={10}>
        <GridItem w='100%'>
          <img src="https://n.nordstrommedia.com/id/b696c8a3-f2e2-4738-bfdd-dcffba6ee55a.jpeg?h=188&w=402 " alt="img" />
          <Heading as='h6' size='sm' p={2}>
            Tops & Shorts Under $50
          </Heading>
        </GridItem>
        <GridItem w='100%'>
          <img src="https://n.nordstrommedia.com/id/bd0e1c8b-f6c0-4d46-899f-fc9d07e014ac.jpeg?h=188&w=402" alt="img" />
          <Heading as='h6' size='sm' p={2}>
            HOUSE OF WANT, Marc Jacobs & More
          </Heading>

        </GridItem>
        <GridItem w='100%'>
          <img src="https://n.nordstrommedia.com/id/2961092c-5387-4c52-9c94-1379fe2ac7ec.jpeg?h=188&w=402" alt="img" />
          <Heading as='h6' size='sm' p={2}>
            HOUSE OF WANT, Marc Jacobs & More
          </Heading>

        </GridItem>
        <GridItem w='100%'>
          <img src="	https://n.nordstrommedia.com/id/bd0e1c8b-f6c0-4d46-899f-fc9d07e014ac.jpeg?h=188&w=402" alt="img" />
          <Heading as='h6' size='sm' p={2}>
            HOUSE OF WANT, Marc Jacobs & More
          </Heading>

        </GridItem>
        <GridItem w='100%'>
          <img src="https://n.nordstrommedia.com/id/e071bbdf-e456-41a9-bed2-cd7974109afe.jpeg?h=188&w=402" alt="img" />
          <Heading as='h6' size='sm' p={2}>
            HOUSE OF WANT, Marc Jacobs & More
          </Heading>

        </GridItem>
      </Grid>
    </div>
  )
}

export default Trending
