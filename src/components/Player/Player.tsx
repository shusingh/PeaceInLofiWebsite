import React, { useState, useEffect } from "react";
import { fetchTrackData } from "../../services/jamendoApi";
import TrackPlayer from "./TrackPlayer/TrackPlayer";

const Player: React.FC = () => {
  const [trackData, setTrackData] = useState(null);

  useEffect(() => {
    const getTrackData = async () => {
      try {
        const data = await fetchTrackData(1940621);
        setTrackData(data);

      } catch (error) {
        console.error('Error fetching track data:', error);
      }
    };

    getTrackData();
  }, []);

  return (
    <>
      {trackData ? (
        <div className="fixed bottom-0 left-0 m-10">
          <TrackPlayer trackData={trackData} />
        </div>
      ) : (
        <p>Loading track data...</p>
      )}
    </>
  );
};

export default Player;
