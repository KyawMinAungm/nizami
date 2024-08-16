import React, { useState } from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";
import { Movie } from "@/type";
interface Props {
  movie: Movie;
  setBackDrop: (path: string) => void;
  backDrop: string;
}
const ImageCard = ({ movie, setBackDrop, backDrop }: Props) => {
  
  return (
    <Card
      onClick={() => {
        setBackDrop(movie.backdrop_path);
      }}
      className={`w-[124px] bg-transparent text-white relative flex-shrink-0  overflow-hidden h-[179px] transition-all ease-in-out duration-300  rounded-[5px] hover:w-[287px] hover:h-[383px] ${
        (backDrop === movie.backdrop_path) && "border-primary border-[3px]  "
      }`}
    >
      <CardContent className="absolute m-0 p-0 w-full h-full">
        <Image
          width={285}
          height={383}
          src={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
          alt=""
        />
      </CardContent>
      <CardFooter className=" w-full h-full transition-all ease-in-out bg-gradient-to-t from-gray-950/50 to-transparent duration-300 translate-y-20 hover:translate-y-0 bottom-0  flex flex-col relative justify-end opacity-0 hover:opacity-100">
        <p className="mb-5 ">{movie.title}</p>
        <Button className="bg-primary text-white px-[25px]">Book Now</Button>
      </CardFooter>
    </Card>
  );
};

export default ImageCard;
