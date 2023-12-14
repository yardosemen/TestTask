import React from 'react'; 

export default ({ onCallback, items, name, title }) => {
  const handleButtonClick = (item) => {
    onCallback(true, {[name]: item})
  }
  
  return (
    <div className="flex flex-col">
      <div className='w-full'>
        <p className="flex justify-start  pt-5 flex-row w-full font-Scandia text-base font-mediu text-blue-900">{title}</p>
      </div>
      <div className='w-full flex gap-5 pt-5 md:flex md:flex-col sm:flex sm:flex-col'>
        {items.map(({name, icon}, i) => (
          <button
            key={i + name}
            className={`w-full h-full bg-white sm:flex-row flex flex-col border border-solid border-transparent items-center border rounded-md transition-all ease-in-out duration-300 hover:bg-slate-900`}
            onClick={() => handleButtonClick(name)}
          >
            <div className={`bg-white w-full h-full items-center `}>
              <img src={icon} alt={name} />
            </div>
            <div className={`p-2 bg-white sm:flex sm:items-start w-full h-full sm:hover:bg-slate-900 hover:bg-slate-900`}>
              <span className="text-black hover:text-white">{name}</span>
            </div> 
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
