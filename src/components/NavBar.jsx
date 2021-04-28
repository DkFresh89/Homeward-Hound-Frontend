import logo from './HomewardHound.png'
import { Flex, Box, Image, Center, AspectRatio } from "@chakra-ui/react"


function NavBar() {

    return(
        <Flex justifyContent='center' w='100%' bg='red' h='56px'>
            <Box >
                {/* <AspectRatio ratio={16 / 9}> */}
                <Image src={logo} />
                {/* </AspectRatio> */}
            </Box>
        </Flex>
    )
}

export default NavBar