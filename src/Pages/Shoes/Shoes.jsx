import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
// import AllActiveWearButtons from "./ActivewearButtons";
import AllShoesButtons from "./ShoesButton";


function Shoes() {
  const [isVisible, setIsVisible] = useState(false);

  function over(e) {
    setIsVisible(true);
  }
  function out(e) {
    setIsVisible(false);
  }

  return (
    <Box>
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
        onMouseOut={out} >
        Shoes
        {/* <AllActiveWearButtons isVisible={isVisible} /> */}
        <AllShoesButtons isVisible={isVisible} />

      </Box>
    </Box>

  );
}

export default Shoes;
