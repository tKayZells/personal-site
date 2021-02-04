import Head from 'next/head';
import Fragment from 'react';
import Navigation from '../components/html/navigation';
import ScrollIndicator from '../components/html/scrollindicator';
import About from '../components/sections/about';
import Contact from '../components/sections/contact';
import Intro from '../components/sections/intro';
import Projects from '../components/sections/projects';
import Skills from '../components/sections/skills';

export default function Home() {
  return (
    <>
      <Head>
        <title>Miguel Lucena - Web App Developer</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="Miguel Lucena" />
        <meta name="description" content="Hi, I'm Miguel Lucena a web app developer, currently located in M&aacute;laga, Spain." />
        <meta name="keyword" content="App, Web, Developer, Portfolio, M&aacute;laga, Madrid, Spain" />
        <meta property="og:title" content="Miguel Lucena - Web App Developer" />
        <meta property="og:description" content="Hi, I'm Miguel Lucena a web app developer, currently located in M&aacute;laga, Spain." />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/og/portfolio.png" />
      </Head>

      <Navigation />

      <main>
        
        <Intro />
        <ScrollIndicator />

        <About />

        <Skills />

        <Projects />

      </main>

      <footer>

        <Contact />
      
      </footer>
    </>
  )
}
