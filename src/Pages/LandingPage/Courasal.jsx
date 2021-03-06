import React, { useState } from 'react';
import {
    Box,
    IconButton,
    useBreakpointValue,
    Stack,
    Heading,
    Text,
    Container,
} from '@chakra-ui/react';
// Here we have used react-icons package for the icons
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
// And react-slick as our Carousel Lib
import Slider from 'react-slick';

// Settings for the slider
const settings = {
    dots: true,
    arrows: false,
    fade: true,
    infinite: true,
    autoplay: true,
    speed: 200,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
};

export default function Carousel() {
    // As we have used custom buttons, we need a reference variable to
    // change the state
    const [slider, setSlider] = useState({ Slider } || null)

    // These are the breakpoints which changes the position of the
    // buttons as the screen size changes
    const top = useBreakpointValue({ base: '90%', md: '50%' });
    const side = useBreakpointValue({ base: '30%', md: '40px' });

    // This list contains all the data for carousels
    // This can be static or loaded from a server
    const cards = [
        {
            title: 'SWIMWEAR + SUNGLASSES + SANDALS + SHORTS FROM $20',
            text:
                "Online & in stores through June 19! Take 20% off selected styles from kate spade new york, Ted Baker London, Steve Madden & more.",
            image:
                'https://n.nordstrommedia.com/id/3c67fa87-474f-40d0-9b52-53b794baa14d.jpeg?h=720&w=1608',
        },
        {
            title: 'Classic Styles from Classic Brands',
            text:
                "Here's how to dress for warmer weather.",
            image:
                'https://n.nordstrommedia.com/id/8881ce44-5e3b-40e3-8ff7-122fab6adff7.jpeg?h=720&w=1608',
        },
        {
            title: 'Ends June 18 at 11:59PM PT',
            text:
                "Selected styles for women, men and kids. Online only. Not combinable with any other offers.",
            image:
                'https://n.nordstrommedia.com/id/8c581ec3-f7eb-49ac-9ba3-436c2f419ae4.jpeg?h=720&w=1608',
        },
    ];

    return (
        <Box
            position={'relative'}
            height={'750px'}
            width={'100'}
            overflow={'hidden'}
            display={"block"}
            padding={"10px"}
        >

            {/* CSS files for react-slick */}
            <Box style={{  padding: "10px" }}>

                <link

                    rel="stylesheet"
                    type="text/css"
                    charSet="UTF-8"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                />
                <link
                    rel="stylesheet"
                    type="text/css"
                    href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                />
            </Box>

            {/* Left Icon */}
            <IconButton
                aria-label="left-arrow"
                variant="ghost"
                position="absolute"
                left={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickPrev()}>
                <BiLeftArrowAlt size="40px" />
            </IconButton>
            {/* Right Icon */}
            <IconButton
                aria-label="right-arrow"
                variant="ghost"
                position="absolute"
                right={side}
                top={top}
                transform={'translate(0%, -50%)'}
                zIndex={2}
                onClick={() => slider?.slickNext()}>
                <BiRightArrowAlt size="40px" />
            </IconButton>
            {/* Slider */}
            <Slider {...settings} ref={(slider) => setSlider(slider)}>
                {cards.map((card, index) => {

                    return (
                        <>

                            <Box key={index}>
                                <Box
                                    // key={index}
                                    // height={'3xl'}
                                    position="relative"
                                    backgroundPosition="center"
                                    backgroundRepeat="no-repeat"
                                    backgroundSize="cover"
                                    backgroundImage={`url(${card.image})`}>
                                    {/* This is the block you need to change, to customize the caption */}
                                    <Container size="container.lg" height="600px"
                                        position="relative"
                                        // border="1px solid red"
                                    >
                                        <Stack
                                            spacing={6}
                                            w={'full'}
                                            maxW={'lg'}
                                            position="absolute"
                                            top="80%"
                                            right="90%"
                                            transform="translate(0, -50%)">

                                        </Stack>
                                    </Container>
                                    <Box w='100%' p={4} color='black' h="150px" >

                                        <Heading fontSize={{ base: '1xl', md: '2xl', lg: '3xl' }} marginTop={4}>
                                            {card.title}
                                        </Heading>
                                        <Text fontSize={{ base: 'md', lg: 'lg' }} color="GrayText">
                                            {card.text}
                                        </Text>
                                    </Box>
                                </Box>

                            </Box>

                        </>
                    )
                })}
            </Slider>
        </Box>
    );
}