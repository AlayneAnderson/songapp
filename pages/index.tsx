import { Box, Flex, Text, Image } from '@chakra-ui/react'
import Head from 'next/head'
import GradientLayout from '../components/gradientLayout'
import prisma from '../lib/prisma'
import styles from '../styles/Home.module.css'

const Home = ({artists}) => {
  return (<GradientLayout 
    color = "red" 
    roundImage 
    subtitle="Profile" 
    title = "Alayne Anderson" 
    description="15 public playlists"
    image ="IMG_2660.jpeg"
  >
    <Box color="white" paddingX="40px">
        <Box marginBottom="40px">
          <Text fontSize="2xl" fontWeight="bold">
            Top artist this month
          </Text>
          <Text fontSize="md">only visible to you</Text>
        </Box>
        <Flex>
          {artists.map((artist) => (
            <Box paddingX="10px" width="20%">
              <Box bg="gray.900" borderRadius="4px" padding="15px" width="100%">
                <Image
                  src="https://placekitten.com/300/300"
                  borderRadius="100%"
                />
                <Box marginTop="20px">
                  <Text fontSize="large">{artist.name}</Text>
                  <Text fontSize="x-small">Artist</Text>
                </Box>
              </Box>
            </Box>
          ))}
        </Flex>
      </Box>
  </GradientLayout>)
}

//This function wont show on the client side. Next.JS would strip it out
export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({})
  console.log(artists)
  return {
    props: {artists},
  }
}
export default Home
