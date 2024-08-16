import Hero from '@/components/Hero'
import React from 'react'
const token = process.env.TMDB_API_KEY;
const base_url = "https://api.themoviedb.org/3";

const fetchTodayPlaying = async () => {
  const response = await fetch(`${base_url}/movie/now_playing?language=en-US&page=1`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();

  return data.results;
};

const fetchUpcoming = async () => {
  const response = await fetch(`${base_url}/movie/upcoming?language=en-US&page=1`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();

  return data.results;
};


const page = async () => {
  const todayPlaying = await fetchTodayPlaying();
  const playSoon = await fetchUpcoming();
  return (
    <>
      <Hero todayPlaying = {todayPlaying} playSoon ={playSoon}/>
    </>
  )
}

export default page