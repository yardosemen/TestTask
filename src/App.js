
import React, {useState,useEffect} from 'react';
import { ProgressBar } from './components/ProgressBar/ProgressBar';
import config from './components/config';
import { send } from './api/mockapi';

export const App = () => {
  const [step, setStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [info, setInfo] = useState({});

  const onCallback = (next, result) => {
    const nextStep = step + (next ? 1 : -1);
    if (nextStep < 0) return alert('no steps compoent')
   
    if (next) {
        setInfo({
        ...info,
        ...result
      })
    } 
  
    setStep(nextStep);
  }

  const registrationSteps = config.map(({template, ...res}) => {
    return React.cloneElement(template, {
      ...res,
      onCallback: onCallback
    })
  })

  const sendData = async (info) => { 
    const result = await send(info);
    console.log(result)
    alert('finish')
  }
 
  useEffect( () => {
    setProgress(Math.ceil(100 / (registrationSteps.length) * step));

    if (step >= registrationSteps.length) {
      sendData(info)
    }
  }, [step, info, registrationSteps.length])

  return (
        <div className="flex items-center w-full justify-center min-h-screen bg-gray-100">
          <div className="p-6 bg-gray-200 h-screen w-screen">
            <ProgressBar progress={progress} />
            {registrationSteps[step]}
          </div>
        </div>
  );
};
