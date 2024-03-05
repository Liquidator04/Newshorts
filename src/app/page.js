'use client'

import "./input.css"
import Heading from "./Header-Footer/Heading";
import Footing from "./Header-Footer/Footing";
import EmblaCarousel from "./shorts-interface/shorts";

export default function Home() {
  return (  
    <div>
      <Heading /> 
      <EmblaCarousel />    
      <Footing />
    </div>
  );
}
