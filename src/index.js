import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import CarShop from './components/Components/CarShop/CarShop';
import CarParts from './components/Components/CarParts/CarParts';
import LogIn from './components/Components/LogIn/LogIn'
import SignUp from './components/Components/SignUp/SignUp';
import Filter from './components/Components/Filter/Filter';
//import MainInterface from './components/Components/MainInterface/MainInterface';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>

     <Route path='/' element={<App />}/>
     <Route path='/cars' element={<CarShop/>}/>
     <Route path='/parts' element={<CarParts/>}/>
     <Route path='/login' element={<LogIn/>}/>
     <Route path='/signup' element={<SignUp/>}/>
     <Route path='/filter' element={<Filter/>}/>
     
  </Routes>
     
  </BrowserRouter>    

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
