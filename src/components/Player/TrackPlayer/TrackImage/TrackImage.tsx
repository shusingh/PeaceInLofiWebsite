import React from "react";

interface TrackImageProps {
    imageUrl: string;
    trackName: string;
}

const TrackImage: React.FC<TrackImageProps> = ({imageUrl, trackName}) => {
    return (
        <div className="relative pt-3">
            <img
                src={imageUrl}
                alt={trackName}
                className="h-24 w-24 rounded-sm object-cover" 
            />
        </div>
    );
};

export default TrackImage;