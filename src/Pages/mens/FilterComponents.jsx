import { Box, Checkbox, CheckboxGroup, Divider, Select, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { AiOutlinePlus } from "react-icons/ai";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
} from '@chakra-ui/react'
import { useDispatch } from 'react-redux';
import { MensData } from '../../Redux/MensProduct/action';

const FilterComponents = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [category, sestCategory] = useState(searchParams.getAll("category") || []);
    const dispatch = useDispatch();

    const handle = (value) => {
        sestCategory(value)
    }


    useEffect(() => {
        if (category) {
            setSearchParams({ category: category }, { replace: true });
            let param = {
                category: searchParams.getAll("category")
            };
            dispatch(MensData(param));
        }
    }, [category, searchParams, setSearchParams]);
    // console.log(category);

    return (
        <div>
            <Box>
                <Box display={{ base: "none", md: "block" }} p="1rem 2rem">
                    {/* <Text fontSize={"2xl"}>Filter</Text>
                    <Text>category</Text> */}
                    <Box p="3px">
                        <CheckboxGroup
                            colorScheme='green'
                            defaultValue={category}
                            onChange={handle}  >
                            <VStack align={"baseline"}>
                                <Menu >
                                    <MenuButton
                                        // px={1}
                                        // py={1}
                                        transition='all 0.2s'
                                        borderRadius='md'
                                        // borderWidth='1px'
                                        _hover={{ bg: 'gray.400' }}
                                        _expanded={{ bg: 'blue.300' }}
                                        _focus={{ boxShadow: 'outline' }} >
                                        <Box display={"flex"} w="200px" justifyContent="space-between">
                                            <Box px={25} py={3} >
                                                All Category
                                            </Box>
                                            <Box px={2} marginTop={4}>
                                                <AiOutlinePlus />
                                            </Box>
                                        </Box>
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem><Checkbox value='bags' color={"black"}>bags</Checkbox></MenuItem>
                                        <MenuItem><Checkbox value="men's clothing" color={"black"}  >men's clothing</Checkbox></MenuItem>
                                        <MenuDivider />
                                        <MenuItem> <Checkbox value="electronics" color={"black"}>electronics</Checkbox></MenuItem>
                                        <MenuItem> <Checkbox value="jewelery" color={"black"}>jewelery</Checkbox></MenuItem>
                                    </MenuList>
                                </Menu>
                            </VStack>
                        </CheckboxGroup>
                    </Box>
                    <Divider />
                    <Box p="3px">
                        <CheckboxGroup
                            colorScheme='blue'
                            defaultValue={category}
                            onChange={handle}  >
                            <VStack align={"baseline"}>
                                <Menu >
                                    <MenuButton
                                        // px={1}
                                        // py={1}
                                        transition='all 0.2s'
                                        borderRadius='md'
                                        // borderWidth='1px'
                                        // _hover={{ bg: 'gray.400' }}
                                        _expanded={{ bg: 'blue.300' }}
                                    // _focus={{ boxShadow: 'outline' }}
                                    >
                                        <Box display={"flex"} w="200px" justifyContent="space-between">
                                            <Box px={25} py={3} >
                                                Color
                                            </Box>
                                            <Box px={2} marginTop={4}>
                                                <AiOutlinePlus />
                                            </Box>
                                        </Box>
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem><Checkbox value='red' color={"black"}>Red</Checkbox></MenuItem>
                                        <MenuItem><Checkbox value="black" color={"black"}>black</Checkbox></MenuItem>
                                        <MenuDivider />
                                        <MenuItem> <Checkbox value="grey" color={"black"}>Grey</Checkbox></MenuItem>
                                        <MenuItem> <Checkbox value="brown" color={"black"}>Brown</Checkbox></MenuItem>
                                    </MenuList>
                                </Menu>
                            </VStack>
                        </CheckboxGroup>
                    </Box>
                    <Divider />
                    <Box p="3px">
                        <CheckboxGroup
                            colorScheme='green'
                            defaultValue={category}
                            onChange={handle}  >
                            <VStack align={"baseline"}>
                                <Menu >
                                    <MenuButton
                                        // px={1}
                                        // py={1}
                                        transition='all 0.2s'
                                        borderRadius='md'
                                        // borderWidth='1px'
                                        _hover={{ bg: 'gray.400' }}
                                        _expanded={{ bg: 'blue.300' }}
                                        _focus={{ boxShadow: 'outline' }} >
                                        <Box display={"flex"} w="200px" justifyContent="space-between">
                                            <Box px={25} py={3} >
                                                Size
                                            </Box>
                                            <Box px={2} marginTop={4}>
                                                <AiOutlinePlus />
                                            </Box>
                                        </Box>
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem><Checkbox value='34S' color={"black"}>34S</Checkbox></MenuItem>
                                        <MenuItem><Checkbox value="34R" color={"black"}>34R</Checkbox></MenuItem>
                                        <MenuDivider />
                                        <MenuItem> <Checkbox value="36S" color={"black"}>36S</Checkbox></MenuItem>
                                        <MenuItem> <Checkbox value="38R" color={"black"}>38R</Checkbox></MenuItem>
                                    </MenuList>
                                </Menu>
                            </VStack>
                        </CheckboxGroup>
                    </Box>

                    <Divider />
                    <Box p="3px">
                        <CheckboxGroup
                            colorScheme='green'
                            defaultValue={category}
                            onChange={handle}  >
                            <VStack align={"baseline"}>
                                <Menu >
                                    <MenuButton
                                        // px={1}
                                        // py={1}
                                        transition='all 0.2s'
                                        borderRadius='md'
                                        // borderWidth='1px'
                                        _hover={{ bg: 'gray.400' }}
                                        _expanded={{ bg: 'blue.300' }}
                                        _focus={{ boxShadow: 'outline' }} >
                                        <Box display={"flex"} w="200px" justifyContent="space-between">
                                            <Box px={25} py={3} >
                                                Feature
                                            </Box>
                                            <Box px={2} marginTop={4}>
                                                <AiOutlinePlus />
                                            </Box>
                                        </Box>
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem><Checkbox value='bags' color={"black"}>bags</Checkbox></MenuItem>
                                        <MenuItem><Checkbox value="men's clothing" color={"black"}  >men's clothing</Checkbox></MenuItem>
                                        <MenuDivider />
                                        <MenuItem> <Checkbox value="electronics" color={"black"}>electronics</Checkbox></MenuItem>
                                        <MenuItem> <Checkbox value="jewelery" color={"black"}>jewelery</Checkbox></MenuItem>
                                    </MenuList>
                                </Menu>
                            </VStack>
                        </CheckboxGroup>
                    </Box>
                    <Divider />
                    <Box p="3px">
                        <CheckboxGroup
                            colorScheme='green'
                            defaultValue={category}
                            onChange={handle}  >
                            <VStack align={"baseline"}>
                                <Menu >
                                    <MenuButton
                                        // px={1}
                                        // py={1}
                                        transition='all 0.2s'
                                        borderRadius='md'
                                        // borderWidth='1px'
                                        _hover={{ bg: 'gray.400' }}
                                        _expanded={{ bg: 'blue.300' }}
                                        _focus={{ boxShadow: 'outline' }} >
                                        <Box display={"flex"} w="200px" justifyContent="space-between">
                                            <Box px={25} py={3} >
                                                Fit
                                            </Box>
                                            <Box px={2} marginTop={4}>
                                                <AiOutlinePlus />
                                            </Box>
                                        </Box>
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem><Checkbox value='bags' color={"black"}>bags</Checkbox></MenuItem>
                                        <MenuItem><Checkbox value="men's clothing" color={"black"}  >men's clothing</Checkbox></MenuItem>
                                        <MenuDivider />
                                        <MenuItem> <Checkbox value="electronics" color={"black"}>electronics</Checkbox></MenuItem>
                                        <MenuItem> <Checkbox value="jewelery" color={"black"}>jewelery</Checkbox></MenuItem>
                                    </MenuList>
                                </Menu>
                            </VStack>
                        </CheckboxGroup>
                    </Box>
                    <Divider />
                    <Box p="3px">
                        <CheckboxGroup
                            colorScheme='green'
                            defaultValue={category}
                            onChange={handle}  >
                            <VStack align={"baseline"}>
                                <Menu >
                                    <MenuButton
                                        // px={1}
                                        // py={1}
                                        transition='all 0.2s'
                                        borderRadius='md'
                                        // borderWidth='1px'
                                        _hover={{ bg: 'gray.400' }}
                                        _expanded={{ bg: 'blue.300' }}
                                        _focus={{ boxShadow: 'outline' }} >
                                        <Box display={"flex"} w="200px" justifyContent="space-between">
                                            <Box px={25} py={3} >
                                                Price
                                            </Box>
                                            <Box px={2} marginTop={4}>
                                                <AiOutlinePlus />
                                            </Box>
                                        </Box>
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem><Checkbox value='bags' color={"black"}>bags</Checkbox></MenuItem>
                                        <MenuItem><Checkbox value="men's clothing" color={"black"}  >men's clothing</Checkbox></MenuItem>
                                        <MenuDivider />
                                        <MenuItem> <Checkbox value="electronics" color={"black"}>electronics</Checkbox></MenuItem>
                                        <MenuItem> <Checkbox value="jewelery" color={"black"}>jewelery</Checkbox></MenuItem>
                                    </MenuList>
                                </Menu>
                            </VStack>
                        </CheckboxGroup>
                    </Box>
                    <Divider />
                    <Box p="3px">
                        <CheckboxGroup
                            colorScheme='green'
                            defaultValue={category}
                            onChange={handle}  >
                            <VStack align={"baseline"}>
                                <Menu >
                                    <MenuButton
                                        // px={1}
                                        // py={1}
                                        transition='all 0.2s'
                                        borderRadius='md'
                                        // borderWidth='1px'
                                        _hover={{ bg: 'gray.400' }}
                                        _expanded={{ bg: 'blue.300' }}
                                        _focus={{ boxShadow: 'outline' }} >
                                        <Box display={"flex"} w="200px" justifyContent="space-between">
                                            <Box px={25} py={3} >
                                                Ocsasion
                                            </Box>
                                            <Box px={2} marginTop={4}>
                                                <AiOutlinePlus />
                                            </Box>
                                        </Box>
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem><Checkbox value='bags' color={"black"}>bags</Checkbox></MenuItem>
                                        <MenuItem><Checkbox value="men's clothing" color={"black"}  >men's clothing</Checkbox></MenuItem>
                                        <MenuDivider />
                                        <MenuItem> <Checkbox value="electronics" color={"black"}>electronics</Checkbox></MenuItem>
                                        <MenuItem> <Checkbox value="jewelery" color={"black"}>jewelery</Checkbox></MenuItem>
                                    </MenuList>
                                </Menu>
                            </VStack>
                        </CheckboxGroup>
                    </Box>
                    <Divider />
                    <Box p="3px">
                        <CheckboxGroup
                            colorScheme='green'
                            defaultValue={category}
                            onChange={handle}  >
                            <VStack align={"baseline"}>
                                <Menu >
                                    <MenuButton
                                        // px={1}
                                        // py={1}
                                        transition='all 0.2s'
                                        borderRadius='md'
                                        // borderWidth='1px'
                                        _hover={{ bg: 'gray.400' }}
                                        _expanded={{ bg: 'blue.300' }}
                                        _focus={{ boxShadow: 'outline' }} >
                                        <Box display={"flex"} w="200px" justifyContent="space-between">
                                            <Box px={25} py={3} >
                                                Length
                                            </Box>
                                            <Box px={2} marginTop={4}>
                                                <AiOutlinePlus />
                                            </Box>
                                        </Box>
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem><Checkbox value='bags' color={"black"}>bags</Checkbox></MenuItem>
                                        <MenuItem><Checkbox value="men's clothing" color={"black"}  >men's clothing</Checkbox></MenuItem>
                                        <MenuDivider />
                                        <MenuItem> <Checkbox value="electronics" color={"black"}>electronics</Checkbox></MenuItem>
                                        <MenuItem> <Checkbox value="jewelery" color={"black"}>jewelery</Checkbox></MenuItem>
                                    </MenuList>
                                </Menu>
                            </VStack>
                        </CheckboxGroup>
                    </Box>
                    <Divider />





                </Box>

            </Box>

        </div>
    )
}

export default FilterComponents
