
import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import AllNavButtons from "./AllNavButtons";

const buttons = [
    { title: "Clearence" },
    { title:"activewears"},
    { title: "bagsaccessorie" },
    { title: "beauty" },
    { title: "flashevents" },
    { title: "gifts" },
    { title: "home" },
    { title: "kids" },
    { title: "mens" },
    { title: "shoes" },
    { title: "womens" },
]

function NavButton() {
    const [isVisible, setIsVisible] = useState(false);

    function over(e) {
        setIsVisible(true);
    }
    function out(e) {
        setIsVisible(false);
    }

    return (
       
        <Box>
            {buttons.map((e)=> 
            
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
                    {e.title}
                    <AllNavButtons isVisible={isVisible} />

                </Box>
            
            )}
            
        </Box>
      
    );
}

export default NavButton;







// import React from 'react'
// import {
//     Menu,
//     MenuButton,
//     MenuList,
//     MenuItem,
//     Box,
//     Text
// } from '@chakra-ui/react'
// import { ChevronDownIcon } from '@chakra-ui/icons'

// const NavButton = () => {
//     return (
//         <div >
//             <Box>
//                 <Menu>
//                     <MenuButton
//                         // as={Text}
//                     //  rightIcon={<ChevronDownIcon />}

//                         as="button"
//                         color="blue.700"
//                         fontWeight="semibold"
//                         py={2}
//                         px={4}
//                         borderWidth="1px"
//                         borderColor="blue.500"
//                         rounded="md"
//                         _hover={{ bg: "blue.500", color: " white" }}
//                         _focus={{ boxShadow: "outline" }}
//                         // onMouseOver="over"
//                         // onMouseOut="out"
//                         onMouseOver="over"
//                         onMouseOut="out"
//                     >
//                         Actions
//                     </MenuButton>
//                     <MenuList display={"flex"}>
//                         <Box>
//                             <MenuItem>Download</MenuItem>
//                             <MenuItem>Create a Copy</MenuItem>
//                             <MenuItem>Mark as Draft</MenuItem>
//                             <MenuItem>Delete</MenuItem>
//                             <MenuItem>Attend a Workshop</MenuItem>
//                         </Box>
//                         <Box>
//                             <MenuItem>Download</MenuItem>
//                             <MenuItem>Create a Copy</MenuItem>
//                             <MenuItem>Mark as Draft</MenuItem>
//                             <MenuItem>Delete</MenuItem>
//                             <MenuItem>Attend a Workshop</MenuItem>
//                         </Box>
//                         <Box>
//                             <MenuItem>Download</MenuItem>
//                             <MenuItem>Create a Copy</MenuItem>
//                             <MenuItem>Mark as Draft</MenuItem>
//                             <MenuItem>Delete</MenuItem>
//                             <MenuItem>Attend a Workshop</MenuItem>
//                         </Box>
//                     </MenuList>

//                 </Menu>
            
//             </Box>
            
//         </div>
//     )
// }

// export default NavButton
