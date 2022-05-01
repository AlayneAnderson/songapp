import {Box, Flex, Text} from '@chakra-ui/layout'
import {Image} from '@chakra-ui/react'

//chakra UI is open source and open to devs to have images optimized for example

const GradientLayout = ({
    color,
    children,
    image,
    subtitle,
    title,
    description,
    roundImage,
}) => {
    return (
        <Box 
            height = "100vh" 
            overflowY = "auto" 
            bgGradient = {`linear(${color}.500 0%, ${color}.600 15%, ${color}.700 40%, rgba(0,0,0,0.95) 75%)`}>
            <Flex bg={`${color}.600`} padding = "40px" align="end">
                hello
            </Flex>     
        </Box>
    )
}

export default GradientLayout