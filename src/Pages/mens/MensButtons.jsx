import React from 'react'
import { Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
// import NavRouters from './NavRouters'

const AllMensButtons = ({ isVisible }) => {

    const buttons = [
        {to:"/mens", title: "underwear" },
        {to:"/shoes", title: "Shoes2" },
    ]
    return (
        <div>

            {buttons.map((e) =>
             <Box display={isVisible ? "block" : "none"}>
                    <Link to="/mens">{e.title}</Link>
                {/* {e.title} */}
                </Box>
                )}
            {/* <Box display={isVisible ? "block" : "none"}>
                <Link to="/mens">underwear</Link>
                
                </Box> */}
        </div>
    )
}

export default AllMensButtons;