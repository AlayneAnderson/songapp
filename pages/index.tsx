import Head from 'next/head'
import Image from 'next/image'
import GradientLayout from '../components/gradientLayout'
import styles from '../styles/Home.module.css'

const Home = (props) => {
  return (<GradientLayout 
    color = "red" 
    roundImage 
    subtitle="Profile" 
    title = "Alayne Anderson" 
    description="15 public playlists"
    image ="IMG_2660.jpeg">
      <div>home page</div>
  </GradientLayout>)
}

export default Home
