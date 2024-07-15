import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';

import Home from './Home';
import About from './components/About';
import GraphicDesigns from './GrapicDesigns'
import MotionGraphics from './MotionGraphics'
import Navbar from './components/Navbar';
import Footer from './components/Footer';


function App () {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/about',
      element: <About />,
    },
    {
      path: '/graphic-designs',
      element: <GraphicDesigns />,
    },
    {
      path: '/motion-graphics',
      element: <MotionGraphics />,
    },
  ]);

  return (
    <>
      <div className="max-w-[1300px] w-[95%] m-auto bg-white shadow-lg my-4 rounded-xl overflow-hidden">
        <Navbar />
        <RouterProvider router={router} />
      </div>
      <div className="max-w-[1300px] w-[95%] m-auto text-white my-4 rounded-xl overflow-hidden">
        <Footer />
      </div>
    </>
  );
}

export default App;
