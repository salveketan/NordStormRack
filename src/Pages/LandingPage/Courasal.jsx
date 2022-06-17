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
            title: 'Design Projects 1',
            text:
                "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image:
                'https://n.nordstrommedia.com/id/88a5efc6-c3b9-4b31-9a19-01445ff9190b.jpeg?h=720&w=1608',
        },
        {
            title: 'Design Projects 2',
            text:
                "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image:
                'https://n.nordstrommedia.com/id/684ef2e6-362c-49da-9a87-6b2421c00afc.jpeg?h=720&w=1608',
        },
        {
            title: 'Design Projects 3',
            text:
                "The project board is an exclusive resource for contract work. It's perfect for freelancers, agencies, and moonlighters.",
            image:
                'https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
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
            <Box style={{ border: "1px soid red", padding: "10px" }}>

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

                            <Box key={index} border="1px solid red">
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
                                        border="1px solid red"
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
                                    <Box bg='tomato' w='100%' p={4} color='white' h="150px">

                                        <Heading fontSize={{ base: '2xl', md: '3xl', lg: '4xl' }}>
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