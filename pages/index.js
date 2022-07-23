import Head from 'next/head';
import Apps from '../Components/Apps';
import Banner from '../Components/Banner';
import Bannerig from '../Components/Bannerimg';
import Blocks from '../Components/Blocks';
import Connect from '../Components/Connect';
import Connectext from '../Components/Connectext';

import Desktop from '../Components/Desktop';
import Download from '../Components/Download';
import Footer from '../Components/Footer';
import Game from '../Components/Game';
import Lastblock from '../Components/Lastblock';
import Morespeed from '../Components/Morespeed';
import Nav from '../Components/Nav';
import Reviews from '../Components/Reviews';
import Revive from '../Components/Revive';
import Swiper from '../Components/Swiper';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zorin OS</title>
      </Head>
      <Nav />
      <Banner />
      <Swiper />
      <Download />
      <Bannerig />
      <Reviews />
      <Desktop />
      <Morespeed />
      <Revive />
      <Blocks />
      <Lastblock />
      <Apps />
      <Game />
      <Connect />
      <Connectext />
      <Footer />
    </div>
  );
}

// FUNCTION

// const Banner = () => {
//   return (
//     <div>Banner</div>
//   )
// }

// export default Banner
