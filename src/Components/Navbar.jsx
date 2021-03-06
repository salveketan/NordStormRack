// BsBag
// BsSearch
import { BsSearch } from "react-icons/bs"
import { BsBag } from "react-icons/bs";
import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
    Spacer,


} from '@chakra-ui/react';
import {
    HamburgerIcon,
    CloseIcon

} from '@chakra-ui/icons';
import { Link } from "react-router-dom"
export default function WithSubnavigation() {
    const { isOpen, onToggle } = useDisclosure();

    return (
        <Box>
            <Flex
                bg={useColorModeValue('white', 'gray.800')}
                color={useColorModeValue('gray.600', 'white')}
                minH={'60px'}
                py={{ base: 2 }}
                px={{ base: 4 }}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>
                <Flex
                    flex={{ base: 1, md: 'auto' }}
                    ml={{ base: -2 }}
                    display={{ base: 'flex', md: 'none' }}>
                    <IconButton
                        onClick={onToggle}
                        icon={
                            isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
                        }
                        variant={'ghost'}
                        aria-label={'Toggle Navigation'}
                    />
                </Flex>
                <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
                    <Link to="/">
                        <Text
                            textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
                            fontFamily={'heading'}
                            color={useColorModeValue('gray.800', 'white')}>
                            <img src="https://assets.simon.com/tenantlogos/4226.png" alt="logo" width="83px" />
                        </Text>
                    </Link>
                    <Spacer />

                    <Flex display={{ base: 'none', md: 'flex' }} ml={10} border={"1px solid black"} h={12} marginTop={7}>
                        {/* <DesktopNav /> */}
                        <BsSearch style={{ width: "20px", height: "25px", marginTop: "10px", marginLeft: "7px" }} />
                        <input type="text" placeholder=' Search For Product Or Brand' style={{ width: "750px", border: "0px" }} />
                    </Flex>

                    <Spacer />
                </Flex>

                <Stack
                    flex={{ base: 1, md: 0 }}
                    justify={'flex-end'}
                    direction={'row'}
                    spacing={6}>
                    <Button
                       
                        as={'a'}
                        fontSize={'md'}
                        fontWeight={400}
                        variant={'link'}
                        href={'/singin'}>
                        Sign In
                    </Button>

                    <Box 
                    as={"a"}
                        href={'/cart'}
                    >
                        <BsBag style={{ height: "30px", width: "30px" }} />
                    </Box>

                </Stack>
            </Flex>

        </Box>
    );
}
