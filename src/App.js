import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import HomeView from "./components/pages/HomeView/HomeView";
import ThreeJsView from "./components/pages/three-js/ThreeJsView";
import BabylonJsView from "./components/pages/babylon-js/BabylonJsView";


function App (){
    return (
        <>
                <h1>WebAR Research </h1>
                <Router>
                    <Routes>
                        <Route path="/" element={<HomeView/>} exact/>
                        <Route path='three-js' element={<ThreeJsView/>}/>
                        <Route path='babylon-js' element={<BabylonJsView/>}/>
                    </Routes>
                </Router>
        </>
    )
}

export default App