import "../input.css";
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from "next/image";
import test1 from "../../../public/Images/Test1.jpg";
import test2 from "../../../public/Images/Test2.jpg";
import test3 from "../../../public/Images/Test3.webp";
import test4 from "../../../public/Images/Test4.jpeg";
import Like from "../../../public/Images/Like-unfilled.svg";
import LikeFill from "../../../public/Images/Like-filled.svg";

var like=Like;
var liked = false;

function setLike(){
  console.log("Function is being called");
  console.log(liked);
  if(liked){
    like = Like;
    liked = false;
  }
  else{
    like = LikeFill;
    liked = true;
  }
}

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel()


  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide flex justify-center">
          <video width="300" height="400" controls preload="none">
            <source src="/Video/Video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <button onClick={setLike}><Image src={like} alt="test" width={30} height={30}/></button>
        </div>
        <div className="embla__slide flex justify-center"><Image src={test2} alt="test" width={300} height={400}/></div>
        <div className="embla__slide flex justify-center"><Image src={test3} alt="test" width={300} height={400}/></div>
        {/* <div className="embla__slide flex justify-center"><Image src={test4} alt="test" width={400} height={250}/></div> */}
      </div>
    </div>
  )
}