import React from 'react';
import { FaCheck } from 'react-icons/fa';

export const ProgressBar = ({ progress }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative pt-1 w-full">
        <div className=" h-2 mb-4 text-xs flex rounded bg-green-200">
          <div style={{ width: `${progress}%` }} className="shadow-md flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500 relative">
            <div className="absolute flex flex-col items-center transform -translate-y-2">
              <span className="text-black font-bold">{progress}% geschafft</span>
              <FaCheck />
            </div>
          </div>
        </div>
      </div>
        <p className="text-[#5f5f68] font-Scandia text-base font-medium leading-5 flex justify-start flex-row w-full">Kostenloser Solarstrom-Check in einer Minute.</p>
    </div>
  );
};
