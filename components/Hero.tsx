"use client";
import React, { useEffect, useState } from "react";

import ImageCard from "./ImageCard";
import Image from "next/image";
import { Movie } from "@/type";
import { motion } from "framer-motion";
import { fadeIn, slideInFormLeft, slideInFromBottom } from "@/lib/motion";

interface Props {
  todayPlaying: Movie[];
  playSoon: Movie[];
}

const Hero = ({ todayPlaying, playSoon }: Props) => {
  const [backDrop, setBackDrop] = useState(todayPlaying[0].backdrop_path);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    setBackDrop(backDrop);
  }, [backDrop]);

  const today = todayPlaying.slice(0, 10);
  const soon = playSoon.slice(0, 10);
  const [movies, setMovies] = useState(today);

  return (
    <section className=" relative h-screen overflow-hidden  ">
      <motion.div
        key={backDrop}
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        className={`abslute w-full h-full  -z-10 `}
      >
        <Image
          className={`w-full h-full transition-all object-cover ease-in-out duration-500`}
          onLoadingComplete={() => setLoading(false)}
          width={1280}
          height={920}
          alt=""
          src={`https://image.tmdb.org/t/p/w1280${backDrop}`}
        />
      </motion.div>

      <div className="absolute top-32 left-0 flex items-start flex-col">
        <motion.div whileHover={{scale : 1.1}} variants={slideInFormLeft(0.5)} initial='hidden' animate='visible' exit='exit' className="  cursor-pointer flex justify-center items-center">
            <span className="w-36 h-[1px] bg-white"/>
            <p className="text-white text-lg italic">TODAY</p>
        </motion.div>
        <motion.div whileHover={{scale : 1.1}} variants={slideInFormLeft(0.8)} initial='hidden' animate='visible' exit='exit' className=" mt-5 cursor-pointer flex justify-center items-center">
            <span className="w-32 h-[0.5px] bg-white"/>
            <p className="text-white text-sm italic">SOON</p>
        </motion.div>
      </div>

      <motion.span
        variants={slideInFromBottom}
        initial="hidden"
        animate="visible"
        className="bg-white left-0 w-full h-[1px] absolute bottom-20 "
      />
      <motion.div
        variants={slideInFromBottom}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="absolute bottom-10 overflow-x-scroll scrollbar-hide left-0 px-10 w-full flex  gap-10 justify-start items-end "
      >
        {movies.map((movie) => (
          <ImageCard
            key={movie.id}
            movie={movie}
            setBackDrop={setBackDrop}
            backDrop={backDrop}
          />
        ))}
      </motion.div>
      <span className="absolute w-full h-20 bg-gradient-to-t from-black/80 to-transparent bottom-0" />
    </section>
  );
};

export default Hero;
