import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
// components
import Spacer from '../components/Spacer.js';
import People from '../components/People.js';
import Length from '../components/Length.js';
import Stack from '../components/Stack.js';
import Industry from '../components/Industry.js';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>RPP31 Outcome Tracker</title>
        <meta
          name="description"
          content="An outcome tracking app for Hack Reactor Cohort RPP31"
        />
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="/RPP31-logos_black.webp" />
      </Head>
      <svg
        viewBox="0 0 100% 100%"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.filter}
      >
        <filter id="noiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.9"
            numOctaves="3"
            stitchTiles="stitch"
          />
        </filter>

        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>

      <main className={styles.main}>
        <Image
          src="/RPP31-logos_black.webp"
          alt="RPP31 logo"
          width="300px"
          height="300px"
        />
        <h1 className={styles.title}>Outcome Tracker</h1>

        <Spacer size="48px" />
        <People />
        <Spacer size="48px" />
        <Length />
        <Spacer size="48px" />
        <Stack />
        <Spacer size="48px" />
        <Industry />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
