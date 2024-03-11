import "../input.css";
import React from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from "next/image";
import test1 from "../../../public/Images/Test1.jpg";
import test2 from "../../../public/Images/Test2.jpg";
import test3 from "../../../public/Images/Test3.webp";

var likes=15 , dislikes=3, comments = 5;

export default function EmblaCarousel() {
  const [emblaRef] = useEmblaCarousel()
  
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        <div className="embla__slide flex justify-center gap-5">
          <div className="flex">
            <video width="300" height="400" controls preload="none">
              <source src="/Video/Video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="flex items-center h-400 w-100">
            <div className="items-center flex-col justify-center align-center w-8 h-8 gap-x-3">
              <div>
                <button type="button" className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                <path d="M3 7H1a1 1 0 0 0-1 1v8a2 2 0 0 0 4 0V8a1 1 0 0 0-1-1Zm12.954 0H12l1.558-4.5a1.778 1.778 0 0 0-3.331-1.06A24.859 24.859 0 0 1 6 6.8v9.586h.114C8.223 16.969 11.015 18 13.6 18c1.4 0 1.592-.526 1.88-1.317l2.354-7A2 2 0 0 0 15.954 7Z"/>
                </svg>
                <span className="sr-only">Icon description</span>
                </button>
                <div className="flex justify-center items-center">
                  <h6 className="text-blue-300 items-center">{likes}</h6>
                </div>
              </div>
              <div>
                <button type="button" className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                <svg className="w-5 h-5" fill="currentColor" height="200px" width="200px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 208.666 208.666" xmlSpace="preserve" stroke="#1d4edb"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M54.715,24.957c-0.544,0.357-1.162,0.598-1.806,0.696l-28.871,4.403c-2.228,0.341-3.956,2.257-3.956,4.511v79.825 c0,1.204,33.353,20.624,43.171,30.142c12.427,12.053,21.31,34.681,33.983,54.373c4.405,6.845,10.201,9.759,15.584,9.759 c10.103,0,18.831-10.273,14.493-24.104c-4.018-12.804-8.195-24.237-13.934-34.529c-4.672-8.376,1.399-18.7,10.989-18.7h48.991 c18.852,0,18.321-26.312,8.552-34.01c-1.676-1.32-2.182-3.682-1.175-5.563c3.519-6.572,2.86-20.571-6.054-25.363 c-2.15-1.156-3.165-3.74-2.108-5.941c3.784-7.878,3.233-24.126-8.71-27.307c-2.242-0.598-3.699-2.703-3.405-5.006 c0.909-7.13-0.509-20.86-22.856-26.447C133.112,0.573,128.281,0,123.136,0C104.047,0.001,80.683,7.903,54.715,24.957z"></path> </g> </g></svg>
                <span className="sr-only">Icon description</span>
                </button>
                <div className="flex justify-center items-center">
                  <h6 className="text-blue-300 items-center">{dislikes}</h6>
                </div>
              </div>
              <div>
                <button type="button" className="text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500">
                <svg className="w-5 h-5" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#1d4cd8"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clipRule="evenodd" d="M18.1 5.00016H6.9C6.53425 4.99455 6.18126 5.13448 5.9187 5.38917C5.65614 5.64385 5.50553 5.99242 5.5 6.35816V14.5002C5.50553 14.8659 5.65614 15.2145 5.9187 15.4692C6.18126 15.7238 6.53425 15.8638 6.9 15.8582H10.77C10.9881 15.857 11.2035 15.9056 11.4 16.0002L17.051 19.0002L17 14.5002H18.43C19.0106 14.5091 19.4891 14.0467 19.5 13.4662V6.35816C19.4945 5.99242 19.3439 5.64385 19.0813 5.38917C18.8187 5.13448 18.4657 4.99455 18.1 5.00016Z" stroke="#1d4cd8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M8.5 8.25024C8.08579 8.25024 7.75 8.58603 7.75 9.00024C7.75 9.41446 8.08579 9.75024 8.5 9.75024V8.25024ZM16.5 9.75024C16.9142 9.75024 17.25 9.41446 17.25 9.00024C17.25 8.58603 16.9142 8.25024 16.5 8.25024V9.75024ZM8.5 11.2502C8.08579 11.2502 7.75 11.586 7.75 12.0002C7.75 12.4145 8.08579 12.7502 8.5 12.7502V11.2502ZM14.5 12.7502C14.9142 12.7502 15.25 12.4145 15.25 12.0002C15.25 11.586 14.9142 11.2502 14.5 11.2502V12.7502ZM8.5 9.75024H16.5V8.25024H8.5V9.75024ZM8.5 12.7502H14.5V11.2502H8.5V12.7502Z" fill="currentColor"></path> </g></svg>
                <span className="sr-only">Icon description</span>
                </button>
                <div className="flex justify-center items-center">
                  <h6 className="text-blue-300 items-center">{comments}</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="embla__slide flex justify-center"><Image src={test2} alt="test" width={300} height={400}/></div>
        <div className="embla__slide flex justify-center"><Image src={test3} alt="test" width={300} height={400}/></div>
        {/* <div className="embla__slide flex justify-center"><Image src={test4} alt="test" width={400} height={250}/></div> */}
      </div>
    </div>
  )
}