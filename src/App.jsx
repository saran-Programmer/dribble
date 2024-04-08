import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPages from './components/pages/MainPage';

const App = () => {
  const [jobElementList, setJobElementList] = useState([
    {
      title: "Job Board",
      describe: "Let top creative talent come to you by posting your listing on #1 design job board.",
      price: "$5/day"
    },
    {
      title: "Hiring Suite",
      describe: "Tap into our ready-to-hire community of top designers with our seamless hiring solution.",
      price: "$10/day"
    }
  ]);

  const handleJobElementChange = (props) => {
    setJobElementList(prevList => [...prevList, props]);
  }

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<MainPages isAdmin={false} jobElementList={jobElementList} setJobElementList={handleJobElementChange} />}
          />
          <Route
            path="/admin"
            element={<MainPages isAdmin={true} jobElementList={jobElementList} setJobElementList={handleJobElementChange} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
