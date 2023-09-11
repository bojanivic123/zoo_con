import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { AnimalsProvider } from "./storage/AnimalsProvider";
import { SectorsProvider } from "./storage/SectorsProvider";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimalsProvider>
        <SectorsProvider>
          <App />
        </SectorsProvider>
      </AnimalsProvider>
     </BrowserRouter>
  </React.StrictMode>
);

