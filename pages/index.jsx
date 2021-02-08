import Head from 'next/head';
import { Fragment, useEffect, useState, createRef } from 'react';
import Navigation from '../components/html/navigation';
import ScrollIndicator from '../components/html/scrollindicator';
import About from '../components/sections/about';
import Contact from '../components/sections/contact';
import Intro from '../components/sections/intro';
import Projects from '../components/sections/projects';
import Skills from '../components/sections/skills';


let locomotiveScroll = {};
const ScrollToTarget = ( target ) => locomotiveScroll.scrollTo( target, {} );

export default function Home() {
  
  const scrollRef = createRef();

  useEffect( () =>{
    
    import("locomotive-scroll").then( locomotivemodule => {

      locomotiveScroll = new locomotivemodule.default({
          el: scrollRef.current, 
          smooth: true,
          getDirection: true
      });
      
      locomotiveScroll.on('scroll', (instance) => {
        document.documentElement.setAttribute('data-direction', instance.direction)
      });

    });

  });

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

      <Navigation scrollTargetEvent={ ScrollToTarget } />

      <main ref={ scrollRef } className="relative" data-scroll-container >
        
        <Intro />

        <About />

        <Skills />

        <Projects />
        

        <Contact />

      </main>

    </>
  )
}
