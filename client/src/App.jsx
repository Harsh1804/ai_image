import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';

import { logov2 } from './assets';
import { Home, CreatePost } from './page';

const App = () => (
  <BrowserRouter>
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-6 border-b border-b-[#e6ebf4]">
      <Link to="/">
        <img src={logov2} alt="logo" className="w-40 object-contain" />
      </Link>
      <nav className="">
      <Link to="/" className="font-inter font-medium px-8">Documentation</Link>
      <Link to="/" className="font-inter font-medium px-8">Report</Link>
      <Link to="/" className="font-inter font-medium px-8">About us</Link>
      </nav>
      

      
    </header>
    <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create-post" element={<CreatePost />} />
      </Routes>
    </main>
  </BrowserRouter>
);

export default App;
