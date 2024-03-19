import React, { useState } from "react";
import Header from "./components/Header/Header";
import Player from "./components/Player/Player";
import { images } from "./constants/ImageConstants";

const App: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleImageClick = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div
      className="app bg-cover bg-center w-screen h-screen"
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      onClick={handleImageClick}
    >
      <Header />
      <Player />
    </div>
  );
};

export default App;
