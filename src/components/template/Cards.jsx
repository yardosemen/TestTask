import React from 'react'; 

export default ({ onCallback, items, name, title }) => {
  const handleButtonClick = (item) => {
    onCallback(true, {[name]: item})
   }
  
  return (
    <div className="flex flex-col">
      <div className='w-full'>
              <p className="flex justify-start pt-5 flex-row w-full font-Scandia text-base font-mediu text-blue-900">{title}</p>
      </div>
      <div className='w-full flex gap-5 pt-5 md:flex md:flex-col sm:flex sm:flex-col'>
              {items.map(({name, icon}, i) => (
        <button
          key={i + name}
          className={`p-4 w-full bg-gray-100 flex flex-col items-center border rounded-md `}
          onClick={() => handleButtonClick(name)}
        >
          <div>
            <img src={icon} alt={name} />
          </div>
          <span>{name}</span>
        </button>
      ))}
      </div>
      <button 
        className="flex pt-5 flex-row text-[#5f5f68] text-center font-['Scandia'] text-sm font-medium justify-start"
        onClick={() => onCallback(false)}
      >
        ← Zurück
      </button>
    </div>
  );
};
