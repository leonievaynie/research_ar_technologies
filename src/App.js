import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import HomeView from "./components/pages/HomeView/HomeView";
import ThreeJsView from "./components/pages/three-js/ThreeJsView";


function App (){
    return (
        <>
            <div className={'app'}>
                <h1>WebAR Research </h1>
                <Router>
                    <Routes>
                        <Route path="/" element={<HomeView/>} exact/>
                        <Route path='three-js' element={<ThreeJsView/>}/>
                    </Routes>
                </Router>
            </div>
        </>
    )
}

export default App