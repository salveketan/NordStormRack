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
// import AllNavButtons from "../../Components/AllNavButtons";
// import AllClearenceButtons from "./ClearenceButtons";
// import AllNavButtons from "./AllNavButtons";



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
                    {/* {e.title} */}
                    Mens
                    {/* <AllNavButtons isVisible={isVisible} /> */}
                    {/* <AllNavButtons isVisible={isVisible} /> */}
                    {/* <AllClearenceButtons isVisible={isVisible} /> */}
                    {/* <AllActiveWearButtons isVisible={isVisible} /> */}
                    <AllMensButtons isVisible={isVisible} />
                </Box>

            {/* )} */}

        </Box>

    );
}

export default Mens;
