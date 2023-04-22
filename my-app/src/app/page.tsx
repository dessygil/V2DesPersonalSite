"use client"; 

import React, { useState } from 'react';
import Preloader from './preloader/preloader';



export default function Home() {
  const [loading, setLoading] = useState(false);

  // Setting up preloader animation
  React.useEffect(() =>{
    setTimeout(() => setLoading(true), 7000);
   })

  return (
    <>
      {!loading ? (
        <Preloader />
      ) : (
        <p>I am now here</p >
      )}
    </>
  )
}
