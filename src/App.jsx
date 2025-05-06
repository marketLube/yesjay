import React from 'react';
import Header from './layout/header/Header';
import Hero from './page/Hero/hero';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';


function App() {
  return (
    <div>
     <RouterProvider router={router} />
    
      
    </div>
  )
}

export default App
