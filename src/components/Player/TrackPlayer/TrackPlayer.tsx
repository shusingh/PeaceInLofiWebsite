import React, { useEffect, useRef, useState } from "react";
import { Howl } from "howler";
import trackList from "../../../constants/TrackList";
import { TrackPlayerProps } from "../../../models/TrackPlayer";
import TrackImage from "./TrackImage/TrackImage";
import TrackInfo from "./TrackInfo/TrackInfo";
import TrackControls from "./TrackControls/TrackControls";
import { fetchTrackData } from "../../../services/jamendoApi";

const TrackPlayer: React.FC<TrackPlayerProps> = ({ trackData }) => {
  const playerRef = useRef<Howl | null>(null);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(trackData?.results[0]);

  useEffect(() => {
    const fetchAndLoadTrack = async () => {
      try {
        const trackId = trackList[currentTrackIndex].id;
        const data = await fetchTrackData(trackId);
        setCurrentTrack(data.results[0]);
      } catch (error) {
        console.error("Error fetching track data:", error);
      }
    };

    fetchAndLoadTrack();
  }, [currentTrackIndex]);

  useEffect(() => {
    if (currentTrack) {
      const audioUrl = currentTrack.audio;

      playerRef.current = new Howl({
        src: [audioUrl],
        html5: true,
        onplay: () => setIsPlaying(true),
        onpause: () => setIsPlaying(false),
        onstop: () => setIsPlaying(false),
      });

      return () => {
        playerRef.current?.unload();
      };
    }
  }, [currentTrack]);

  const handlePlayPause = () => {
    if (playerRef.current?.playing()) {
      playerRef.current.pause();
    } else {
      playerRef.current?.play();
    }
  };

  const handlePrevious = () => {
    const previousIndex = (currentTrackIndex - 1 + trackList.length) % trackList.length;
    setCurrentTrackIndex(previousIndex);
  };

  const handleNext = () => {
    const nextIndex = (currentTrackIndex + 1) % trackList.length;
    setCurrentTrackIndex(nextIndex);
  };

  if (!currentTrack) {
    return <div>Loading track data...</div>;
  }

  return (
    <div className="relative mt-6 flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
      <div className="p-6 flex">
        <TrackImage imageUrl={currentTrack.album_image} trackName={currentTrack.name} />
        <div className="ml-10">
          <TrackInfo trackName={currentTrack.name} />
          <TrackControls
            isPlaying={isPlaying}
            onPlayPause={handlePlayPause}
            onPrevious={handlePrevious}
            onNext={handleNext}
          />
        </div>
      </div>
    </div>
  );
};

export default TrackPlayer;