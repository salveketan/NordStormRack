import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { Box, SimpleGrid, Text, Button, Center } from '@chakra-ui/react';
import { BsTruck, BsBagFill, BsPaypal } from "react-icons/bs"

const ProductDetails = () => {
  const { id } = useParams();
  const [productDetails, SetProductDetails] = useState({});

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
      .then((r) => {
        SetProductDetails(r.data)
      })
  }, []);
  console.log(productDetails);

  return (
    <div>
      <SimpleGrid columns={[1, null, 2]} spacing='40px'>
        <Box p={20} >
          <img src={productDetails.image} alt="productDetails.title" />
        </Box>
        <Box p={2} marginTop={"150px"}>
          <Box p={2} marginBottom={3}>
            <Text fontSize='4xl'>{productDetails.title}</Text>
            <Text fontSize='md'>NORDSTORM</Text>
          </Box>
          <Box p={2} marginBottom={3}>
            ₹{productDetails.price}  23% off
            <br />
            <Text as='del'> ₹{productDetails.price + 33}</Text>
          </Box>
          <Box p={2} marginBottom={3} display={"flex"} gap={2}>
            <BsTruck style={{ width: "30px", height: "30px" }} />
            <p>FREE SHIPPING ON ORDERS $89+</p>
            <BsPaypal style={{ width: "20px", height: "20px" }} />
          </Box>
          <Box p={2} marginBottom={3}>
            <Text fontSize='sm'>or 4 interest-free payments of $44.99 with <span>APPLY</span> </Text>
            <Text fontSize='sm'>Get a $40 Bonus Note when you use a new Nordstrom credit card.</Text>
          </Box>
          <Box p={2} marginBottom={3}>
            <Text fontSize='sm'>A smart choice for travel, this slim-fitting sport coat is tailored in breathable, wrinkle-resistant Tech-Smart wool woven with a hint of stretch for comfort.</Text>

          </Box>
          <Box p={2} marginBottom={3}>
            <Text fontSize='sm'>Delivery</Text>
            <Button colorScheme='blue' width={"500px"} >
              <Center gap={3}><BsBagFill />  Add to bag</Center>
              {/* <center></center> */}
            </Button>
          </Box>

        </Box>
      </SimpleGrid>
    </div>
  )
}

export default ProductDetails
