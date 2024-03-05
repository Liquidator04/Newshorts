import "../input.css";
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from "next/image";
import test1 from "../../../public/Images/Test1.jpg";
import test2 from "../../../public/Images/Test2.jpg";
import test3 from "../../../public/Images/Test3.webp";
import test4 from "../../../public/Images/Test4.jpeg";


export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel()

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide flex justify-center"><Image src={test1} alt="test" width={400} height={250}/></div>
        <div className="embla__slide flex justify-center"><Image src={test2} alt="test" width={400} height={250}/></div>
        <div className="embla__slide flex justify-center"><Image src={test3} alt="test" width={400} height={250}/></div>
        <div className="embla__slide flex justify-center"><Image src={test4} alt="test" width={400} height={250}/></div>
      </div>
    </div>
  )
}