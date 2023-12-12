import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProgressBar } from '../ProgressBar/ProgressBar'
import Step1 from '../Roof/Step1'
import Step2 from '../Roof/Step2'
import Step3 from '../Roof/Step3'

export const Navbar = () => {
  const [progress, setProgress] = useState(25);

  return (
    <Router>
      <div className="flex items-center w-full justify-center min-h-screen bg-gray-100">
        <div className="p-6 bg-gray-200">
          <ProgressBar progress={progress} />
        <Routes>
            <Route path="/" element={<Step1 setProgress={setProgress} />} />          
            <Route path="/step1" element={<Step1 setProgress={setProgress} />} />
            <Route path="/step2" element={<Step2 setProgress={setProgress} />} />
            <Route path="/step3" element={<Step3 setProgress={setProgress} />} />
        </Routes>
        </div>
      </div>
    </Router>
  )
}