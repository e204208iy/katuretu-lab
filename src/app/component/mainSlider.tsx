'use client';

import Image from "next/image";

import React from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import "@splidejs/react-splide/css";

export default function MainSlider(){
    return(
        <Splide
        options={ {
            type: 'loop',
            rewind: true,
            autoplay: true,
            interval:5000,
            start:2,
            gap:"0.5rem",
            padding: "11%",
            arrows:false,
            height:280
        } }
        aria-label="お気に入りの写真"
        className="z-10"
        >
        <SplideSlide className="pt-12 z-10">
            <Image src="/details.png" alt="Image 1" width={900} height={900} className="z-10 bg-black shadow-lg md:w-10/12 md:h-max"/>
        </SplideSlide>
        <SplideSlide className="pt-12 z-10">
            <Image src="/aa2.png" alt="Image 2" width={900} height={900} className="z-10 bg-black shadow-lg md:w-10/12 md:h-max"/>
        </SplideSlide>
        <SplideSlide className="pt-12 z-10">
            <Image src="/sns.png" alt="Image 3" width={900} height={900} className="z-10 bg-black shadow-lg md:w-10/12 md:h-max"/>
        </SplideSlide>
        </Splide>
  );
}