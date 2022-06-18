import React from 'react'
import { Box, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

const AllBagAccessoriesButtons = ({ isVisible }) => {

    const buttons = [
        { title: "Clearance:Get Insired" },
        { title: "20% off summer styles" },
        { title: "best Sellers" },
        { title: "New Markdown" },
    ]
    const Womens = [
        { title: "Clothing" },
        { title: "shoes" },
        { title: "Handbags" },
        { title: "Sunglasses & Eyewear" },
        { title: "Jewelry" },
        { title: "Watches" },
        { title: "Accessories" },

    ]
    const Mens = [
        { title: "Clothing" },
        { title: "shoes" },
        { title: "Handbags" },
        { title: "Watches" },
        { title: "Accessories" },
    ]
    const Kids = [
        { title: "Girls' Clothing" },
        { title: "Girls' shoes" },
        { title: "Boys' Clothing" },
        { title: "Boys' shoes" },
        { title: "Kids' Clothing" },
        { title: "Baby Clothig & Shoes" },

    ]
    return (
        <div>
            <Box display='flex' gap="50px" marginTop="30px" >
                <Box>
                    {buttons.map((e) => <Box display={isVisible ? "block" : "none"} marginBottom={"10px"} >{e.title}</Box>)}
                </Box>
                <Box >
                    <Box display={isVisible ? "block" : "none"}>
                        <Text fontSize='lg' marginBottom={"10px"}>Womens</Text>
                        {Womens.map((e) => <Box display={isVisible ? "block" : "none"}>
                            {<Link to="/mens"><Text as='em'>{e.title}</Text></Link>}
                        </Box>)}
                    </Box>
                </Box>
                <Box >
                    <Box display={isVisible ? "block" : "none"}>
                        <Text fontSize='lg' marginBottom={"10px"}>Mens</Text>
                        {Mens.map((e) => <Box display={isVisible ? "block" : "none"}>
                            {<Link to="/mens"><Text as='em'>{e.title}</Text></Link>}
                        </Box>)}
                    </Box>
                </Box>
                <Box >
                    <Box display={isVisible ? "block" : "none"}>
                        <Text fontSize='lg' marginBottom={"10px"}>Kids</Text>
                        {Kids.map((e) => <Box display={isVisible ? "block" : "none"}>
                            {<Link to="/mens"><Text as='em'>{e.title}</Text></Link>}
                        </Box>)}
                    </Box>
                </Box>


            </Box>

        </div>
    )
}

export default AllBagAccessoriesButtons;