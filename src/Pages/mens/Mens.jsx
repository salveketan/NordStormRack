// import React from 'react'

// const Activewear = () => {
//   return (
//     <div>
//           Activewear
//     </div>
//   )
// }

// export default Activewear


import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
// import AllActiveWearButtons from "./ActivewearButtons";
import AllMensButtons from "./MensButtons";


function Mens() {
    const [isVisible, setIsVisible] = useState(false);

    function over(e) {
        setIsVisible(true);
    }
    function out(e) {
        setIsVisible(false);
    }

    return (

        <Box>
            {/* {buttons.map((e) => */}

            <Box
                as="button"
                color="black"
                fontWeight="semibold"
                py={2}
                px={4}
                variant="ghost"
                position="relative"
                borderWidth="1px"
                borderColor="white"
                rounded="md"
                _hover={{ bg: "white", color: "black" }}
                // _focus={{ boxShadow: "outline" }}
                onMouseOver={over}
                onMouseOut={out}

            >

                Mens

                <AllMensButtons isVisible={isVisible} />
            </Box>

            {/* )} */}

        </Box>

    );
}

export default Mens;
