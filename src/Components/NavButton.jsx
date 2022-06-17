
import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import AllActiveWearButtons from "../Pages/Activewear/ActivewearButtons";
import AllClearenceButtons from "../Pages/Clearence/ClearenceButtons";
import Clearence from "../Pages/Clearence/Clearence";
import Activewear from "../Pages/Activewear/Activewear";
import Mens from "../Pages/mens/Mens";
import BagAccessories from "../Pages/BagAccessories/BagsAccessories";
import Beauty from "../Pages/Beauty/Beauty";
import FlashEvents from "../Pages/FlashEvents/FlashEvents";
import Gifts from "../Pages/Gifts/Gifts";
import Home from "../Pages/Home/Home";
import Kids from "../Pages/Kids/Kids";
import Womens from "../Pages/Womens/Women";

function NavButton() {
  

    return (
       
        <Box display='flex' justifyContent="space-around" p="10px" >
                 <Clearence/>
                 <Activewear/>
                 <BagAccessories/>
                 <Beauty/>
                 <FlashEvents />
                 <Gifts/>
                 <Home/>
                 <Mens />
                 <Kids/>
                 <Womens/>
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
