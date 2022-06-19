import React from 'react'
import { Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
// import NavRouters from './NavRouters'

const AllMensButtons = ({ isVisible }) => {

    const buttons = [
        { to: "/mens", title: "Clothes" },
        { to: "/mens", title: "Shoes" },
        { to: "/mens", title: "Accessories" },
    ]
    return (
        <div>

            {buttons.map((e) =>
                <Box display={isVisible ? "block" : "none"}>
                    <Link to="/mens">{e.title}</Link>
                    {/* {e.title} */}
                </Box>
            )}

        </div>
    )
}

export default AllMensButtons;