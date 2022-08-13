import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route , Switch} from 'react-router-dom';
import './App.css';


//      ******  For Delete   ******    

//import NavBar from "./components/Components/NavBar/NavBar.js";
//import EditProfile from "./components/Components/EditProfile/EditProfile.js";
//import Security from "./components/Components/Security/Security.js";
//import BeSeller from "./components/Components/BeSeller/BeSeller.js";
//import PostCarOrPart from "./components/Components/PostCarOrPart/PostCarOrPart.js";
//import Favorites from "./components/Components/Favorites/Favorites.js";


//    *****    FOR TESTING     *****
//import InputPhoto from './components/Components/InputPhoto/InputPhoto'


//   *****   THE INTERFACES ***** 

import LogIn from "./components/Components/LogIn/LogIn"
import SignUp from "./components/Components/SignUp/SignUp"
import Filter from "./components/Components/Filter/Filter"
import CarInfo from "./components/Components/CarInfo/CarInfo.js"
import PartCard from './components/Components/PartCard/PartCard'
import CarCard from './components/Components/CarCard/CarCard'
import CarParts from './components/Components/CarParts/CarParts'
import CarShop from './components/Components/CarShop/CarShop'
import MainInterface from './components/Components/MainInterface/MainInterface'


function App() {

    return (
        
            <div className = "App" >
                <MainInterface />
            </div>
        
    );
}
export default App;
