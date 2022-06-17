import React from 'react'
import { Box, Text } from '@chakra-ui/react'


const AllClearenceButtons = ({ isVisible }) => {

    const buttons = [
        { title: "Shoes1" },
        { title: "Shoes2" },
    ]
    const Womens = [
        { title: "Clothing" },
        { title: "shoes" }
    ]
    return (
        <div>
            <Box display='flex' gap="50px" marginTop="30px">
                <Box>
                    {buttons.map((e) => <Box display={isVisible ? "block" : "none"}>{e.title}</Box>)}
                </Box>
                <Box >
                    <Box display={isVisible ? "block" : "none"}>
                        Women
                        {Womens.map((e) => <Box display={isVisible ? "block" : "none"}><p>{<Text as='u' >{e.title}</Text>}</p></Box>)}
                    </Box>
                </Box>


            </Box>

        </div>
    )
}

export default AllClearenceButtons;
