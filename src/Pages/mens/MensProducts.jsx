import { Box, Flex, Grid, GridItem, Heading, SimpleGrid, Stack } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import FilterComponents from './FilterComponents'
import axios from "axios"
import { MensData } from '../../Redux/MensProduct/action'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useParams, useSearchParams } from 'react-router-dom'
import AllMensProducts from './AllMenProduct'
// import AllMensProducts from './AllMenProduct'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/breadcrumb'
import { ChevronRightIcon } from '@chakra-ui/icons'
const MensProducts = () => {
    const dispatch = useDispatch();
    const product = useSelector(state => state.MensProduct.product);
    // console.log("kettan", product);

    const [searchParams] = useSearchParams()

    // console.log(searchParams);
    useEffect(() => {
        dispatch(MensData())
    }, [])
    return (
        <div>
            <Box w='100%' p={4} color='Black'>
                <Breadcrumb spacing='8px' separator={<ChevronRightIcon color='gray.500' />}>
                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Home</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem>
                        <BreadcrumbLink href='#'>Products</BreadcrumbLink>
                    </BreadcrumbItem>

                    <BreadcrumbItem isCurrentPage>
                        <BreadcrumbLink href='#'>AllCategory</BreadcrumbLink>
                    </BreadcrumbItem>
                </Breadcrumb>
            </Box>
            <Box>

                <Stack display={{ md: "flex" }} flexDirection={{ md: "row" }}>
                    <Box >
                        <FilterComponents />
                    </Box>
                    <Box>
                        <Heading>Products</Heading>

                        <SimpleGrid columns={{ sm: 2, md: 3 }} spacing='40px'>

                            {product.map((e) => {
                                return <Box key={e.id}  >
                                    <Link to={`/mens/${e.id}`}>
                                        <AllMensProducts
                                            key={e.id}
                                            title={e.title}
                                            price={e.price}
                                            image={e.image}
                                            rating={e.rating.rate}
                                            review={e.rating.count}
                                        />
                                    </Link>

                                </Box>
                            })}

                        </SimpleGrid>
                        {/* <Flex flexWrap='wrap' justifyContent='space-around'>
                            {product.map((e) => {
                                return <AllMensProducts/>
                                    

                                        // key={e.id}
                                        // description={e.description}
                                        // title={e.title}
                                        // price={e.price}
                                        // image={e.image}
                                    

                               
                            })}

                        </Flex> */}
                    </Box>
                    {/* <AllMensProducts /> */}
                </Stack>
            </Box>

        </div>
    )
}

export default MensProducts


