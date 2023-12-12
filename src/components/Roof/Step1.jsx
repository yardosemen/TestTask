import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Anderes from "../../assets/Anderes.svg"; 
import Pultdach from "../../assets/Pultdach.svg"; 
import Flachdach from "../../assets/Flachdach.svg";
import Satteldach from "../../assets/Satteldach.svg";

const Step1 = ({ setProgress }) => {
  const navigate = useNavigate();
  const [selectedRoof, setSelectedRoof] = useState('');

  const roofs = [
    { name: 'Satteldach', icon: Satteldach },
    { name: 'Flachdach', icon: Flachdach },
    { name: 'Pultdach', icon: Pultdach },
    { name: 'Anderes', icon: Anderes },
  ];

  const handleButtonClick = (roofName) => {
    setSelectedRoof(roofName);
    setProgress((prevProgress) => prevProgress + 25);
    navigate('/step2');
  }

  return (
    <div className="flex flex-col">
      <div className='w-full '>
         <p className="flex justify-start flex-row w-full">Welche Dachform hat Ihr Haus?</p>
      </div>
      <div className='w-full space-x-4 pt-5'>
        {roofs.map((roof) => (
        <button
          key={roof.name}
          className={`p-4 bg-gray-100 border rounded-md ${selectedRoof === roof.name ? 'border-green-500' : ''}`}
          onClick={() => handleButtonClick(roof.name)}
        >
          <div>
            <img src={roof.icon} alt={roof.name} />
          </div>
          <span>{roof.name}</span>
        </button>
      ))}
      </div>
    </div>
  );
};

export default Step1;