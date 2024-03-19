import React from "react";

interface TrackInfoProps {
    trackName: string;
}

const TrackInfo: React.FC<TrackInfoProps> = ({trackName}) => {
    return (
        <div className="mt-4">
            <h3 className="text-2xl font-semibold text-center">{trackName}</h3>
        </div>
    );
};

export default TrackInfo;