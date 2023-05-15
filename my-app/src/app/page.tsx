"use client"; 

import React, { useState } from 'react';
import Preloader from './preloader/preloader';
import Header from './header/Header'
import Footer from './footer/Footer'
import Intro from './intro/Intro'
import SideSocials from './sideSocials/sideSocials';
import Epinephrine from './epinephrine/Epinephrine';
import Hero from './hero/Hero';
import Blog from './blog/Blog';

//TODO add an to the top arrow


export default function Home() {
  const [loading, setLoading] = useState(false);

  // Setting up preloader animation
  React.useEffect(() =>{
    setTimeout(() => setLoading(true), 2750);
  })

  return (
    <>
      {!loading ? (
        <Preloader />
      ) : (
        <>
          <Header />
          <main className="grid grid-cols-8">
              <div className="col-span-2">
                <SideSocials/>
              </div>
              <div className="col-span-4">
                <div className="flex">
                  <Intro/>
                  <Epinephrine/>
                </div>
                <Hero />
                <Blog/>
              </div>
              <div className="col-span-2">
                
              </div>
          </main>
          <Footer/>
        </>
      )}
    </>
  )
}
