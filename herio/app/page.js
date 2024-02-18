"use client";

import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";
import Image from 'next/image'
import SpotifyPlayer from 'react-spotify-web-playback';

export default function Home() {
  const [tracks, setTracks] = useState([]);
  const [search, setSearch] = useState("");
  const [flag, setFlag] = useState(false);
  const resultOffset = 20;
  const endpoint = "https://v1.nocodeapi.com/chow/spotify/SvfOXBxbPseLrAeQ/search";

  useEffect(() => {
    const fetchMusic = async () => {
      try {
        const response = await fetch(
          `${endpoint}?q=${search}&type=track&offset=${resultOffset}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch music data");
        }

        const jsonData = await response.json();
        console.log(jsonData);

        setTracks(jsonData.tracks.items);
        console.log(tracks);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMusic();
  }, [flag]);

  const handleChange = (event) => {
    setSearch(event.target.value);
  };
  const handleClick = (event) => {
    setFlag(event.target.value);
  };

  return (
    <div>
      <Navbar />
      <div>
        <div className="flex items-center justify-center gap-5">
          <input
            className="w-64 h-8 rounded-lg text-lg border border-solid
         border-white bg-black text-white"
            placeholder="Search for the Song"
            onChange={handleChange}
          />
          <button onClick={handleClick}
            className="w-32 h-8 text-white border border-solid
        border-white hover:bg-white italic hover:text-black rounded-lg"
          >
          Get Song
        </button>
        </div>
        <div className="my-5 flex items-start justify-center flex-wrap gap-5">
  {tracks.map((track) => (
    <div key={track.id} className="bg-gray-800 flex flex-col items-center justify-start gap-1 text-white border border-solid border-white rounded-lg p-4 w-72 h-72 text-wrap overflow-hidden">
      <div className="flex items-center justify-center mb-2">
        <Image src={track.album.images[0].url} alt="Album Cover" className=" my-3 w-16 h-16 rounded-lg" width={5} height={5}/>
      </div>
      <p className="text-lg font-bold text-center">{track.name}</p>
      <p className="text-sm">{track.artists[0].name}</p>
      {/* <div className=" w-full"> */}
        <audio src={track.preview_url} controls className=" mt-auto w-full"></audio>
      {/* </div> */}
    </div>
  ))}
</div>

      </div>
    </div>
  );
}
