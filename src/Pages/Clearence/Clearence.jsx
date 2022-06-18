
import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import AllClearenceButtons from "./ClearenceButtons";

function Clearence() {
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
          // position="fixed"
          borderWidth="1px"
          borderColor="white"
          rounded="md"
          _hover={{ bg: "white", color: "black" }}
          // _focus={{ boxShadow: "outline" }}
          onMouseOver={over}
          // onClick={over}
          onMouseOut={out}

        >
 
          Clearence

          <AllClearenceButtons isVisible={isVisible} />
        </Box>

    </Box>

  );
}

export default Clearence;




