import React from 'react'
import { Box } from '@chakra-ui/react'


const AllGiftsButtons = ({ isVisible }) => {

    const buttons = [
        { title: "Shoes1" },
        { title: "Shoes2" },
    ]
    return (
        <div>
            {buttons.map((e) => <Box display={isVisible ? "block" : "none"}>{e.title}</Box>)}
        </div>
    )
}

export default AllGiftsButtons;