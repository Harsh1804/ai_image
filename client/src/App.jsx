import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logov2 } from './assets';
import { Home, CreatePost, Report, Aboutus } from './page';

const App = () => (
  <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-6 border-b border-b-[#e6ebf4]">
      <Link to="/">
        <img src={logov2} alt="logo" className="w-40 object-contain" />
      </Link>
      <nav className="">
      <Link to="https://github.com/Harsh1804/ai_image" className="hover:text-[#00ADE1] transition delay-150  ont-inter font-medium px-8" target="_blank">Github</Link>
      <Link to="/report" className="hover:text-[#00ADE1] transition delay-150  ont-inter font-medium px-8">Report</Link>
      <Link to="/aboutus" className="hover:text-[#00ADE1] transition delay-150  font-inter font-medium px-8">About us</Link>
      </nav>
      

      
    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
        <Route path="/report" element={<Report />} />
        <Route path="/aboutus" element={<Aboutus />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
