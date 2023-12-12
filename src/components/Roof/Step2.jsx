import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import Gauben_B from "../../assets/Gauben_B.svg"; 
import keine_Gauben_B from "../../assets/keine_Gauben_B.svg";
import Anderes from "../../assets/Anderes.svg";

const Step2 = ({ setProgress }) => {
  const navigate = useNavigate();
  const [selectedRoof, setSelectedRoof] = useState('');
  const roofs = [
    { name: 'Ja', icon: Gauben_B },
    { name: 'Nein', icon: keine_Gauben_B },
    { name: 'Weiß nicht', icon: Anderes },
  ];

   const handleButtonClick = (roofName) => {
    setSelectedRoof(roofName);
    setProgress((prevProgress) => prevProgress + 25);
    navigate('/step3');
  }

  return (
    <div className="flex flex-col">
      <div className='w-full'>
         <p className="flex justify-start pt-5 flex-row w-full">Besitzt Ihr Haus Gauben oder Dachfenster?</p>
      </div>
      <div className='w-full flex gap-5 pt-5'>
        {roofs.map((roof) => (
        <button
          key={roof.name}
          className={`p-4 w-full bg-gray-100 flex flex-col items-center border rounded-md ${selectedRoof === roof.name ? 'border-green-500' : ''}`}
          onClick={() => handleButtonClick(roof.name)}
        >
          <div>
            <img src={roof.icon} alt={roof.name} />
          </div>
          <span>{roof.name}</span>
        </button>
      ))}
      </div>
      <button 
        className="flex pt-5 flex-row text-[#5f5f68] text-center font-['Scandia'] text-sm font-medium justify-start"
        onClick={() => navigate('/step1')}
      >
        ← Zurück
      </button>
    </div>
  );
};

export default Step2;
