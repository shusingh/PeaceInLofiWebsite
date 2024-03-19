import React from "react";
import { MusicalNoteIcon, VideoCameraIcon } from "@heroicons/react/24/solid";

const Header: React.FC = () => {
  return (
    <header className="bg-white">
      <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-2">
        <div className="flex items-center">
          <MusicalNoteIcon className="h-6 w-6 text-amber-500 mr-2" />
          <span className="text-sm font-semibold leading-6 text-gray-900">Peace In Lo-Fi</span>
        </div>
        <nav className="md:ml-auto">
          <ul className="flex flex-wrap space-x-4">
            <li className="text-sm font-semibold leading-6 text-gray-900">Home</li>
            <li className="text-sm font-semibold leading-6 text-gray-900">Lo-Fi Library</li>
            <li className="text-sm font-semibold leading-6 text-gray-900">About</li>
            <li className="text-sm font-semibold leading-6 text-gray-900">
              <VideoCameraIcon className="h-6 w-6 text-amber-500 mr-2" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;