import React from 'react';

import Navbar from './components/navbar/Navbar';
import Header from './containers/header/Header';
import './App.css';
import Footer from './containers/Footer/Footer';

function App() {
    return (
        <div className="App">
            <div className="App__bg">   
                <Navbar />
                <Header/>
                <Footer />
            </div>
        </div>
    )
}

export default App
