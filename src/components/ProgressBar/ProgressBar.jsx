import React from 'react';

export const ProgressBar = ({ progress }) => {
   const progressPercentage = `${progress}%`;
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative pt-1 w-full">
       <div className='w-full px-4 lg:w-5/12'>
        <div className='mb-6 mt-6'>
          <div className='bg-green-200 dark:bg-dark-3 relative h-2.5 w-full rounded-2xl'>
            <div className='bg-green-500 absolute top-0 left-0 h-full w-1/2 rounded-2xl'
              style={{ width: progressPercentage }}>
                <span className='bg-primary absolute -right-4 bottom-full mb-2 rounded-sm px-3.5 py-1 text-sm text-white mb-6'>
                  <span className='bg-primary absolute bottom-[-2px] left-1/2 -z-10 h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm'></span>
                  {progress}% geschafft
                </span>
              </div>
            </div>
          </div>
        </div>
          <p className="text-[#5f5f68] font-Scandia text-base font-medium leading-5 flex justify-start flex-row w-full">
            Kostenloser Solarstrom-Check in einer Minute.
          </p>
      </div>
    </div>
      
   
  );
};
