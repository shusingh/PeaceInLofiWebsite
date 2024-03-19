import React from "react";
import { PlayIcon, PauseIcon, ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/solid";

interface TrackControlsProps {
  isPlaying: boolean;
  onPlayPause: () => void;
  onPrevious: () => void;
  onNext: () => void;
}

const TrackControls: React.FC<TrackControlsProps> = ({
  isPlaying,
  onPlayPause,
  onPrevious,
  onNext,
}) => {
  return (
    <div className="mt-5 flex items-center justify-center space-x-4">
      <button
        className="rounded-full bg-gray-200 p-2 hover:bg-gray-300"
        onClick={onPrevious}
      >
        <ArrowLeftIcon className="h-6 w-6" />
      </button>
      <button
        className={`rounded-full p-2 ${
          isPlaying ? "bg-amber-500 text-white" : "bg-gray-200 hover:bg-gray-300"
        }`}
        onClick={onPlayPause}
      >
        {isPlaying ? (
          <PauseIcon className="h-10 w-10" />
        ) : (
          <PlayIcon className="h-10 w-10" />
        )}
      </button>
      <button
        className="rounded-full bg-gray-200 p-2 hover:bg-gray-300"
        onClick={onNext}
      >
        <ArrowRightIcon className="h-6 w-6" />
      </button>
    </div>
  );
};

export default TrackControls;