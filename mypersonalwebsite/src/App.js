import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import './styles.css';

const App = () => {
    return (
        <div>
            <Header title="My Website" subtitle="Welcome to my website!" />
            <Home />
            <About />
            <Contact />
        </div>
    );
};

export default App;
