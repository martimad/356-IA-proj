// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/navigationBar';
import Home from './components/Home';
//import About from './About';
import Nutrition from './components/Nutrition';
import Fitness from './components/Fitness';
import TimeMan from './components/TimeMan';
//import Contact from './Contact';
import './App.css';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nutrition" element={<Nutrition />} />
        <Route path="/Fitness" element={<Fitness />} />
        <Route path="/TimeManagement" element={<TimeMan />} />
      </Routes>
    </Router>
  );
}

export default App;


/* 
<Route path="/about" component={About} />
<Route path="/contact" component={Contact}/>

import "./App.css";
import React, { useState } from "react";
import Tabs from "./components/Tabs";
import Content from "./components/Content";

export default function App() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Nutrition", "Fitness", "Time Management"];
  const content = [
    {
      title: 'Nutrition',
      items: [
        {
          title: 'Category 1',
          items: [
            {
              title: 'Subcategory 1',
              items: [
                { title: 'Card 1', text: 'Description for Card 1', link: 'https://example.com/card1' },
                { title: 'Card 2', text: 'Description for Card 2', link: 'https://example.com/card2' },
              ],
            },
            // Other subcategories or cards
          ],
        },
        // Other categories
      ],
    },
    {
      title: 'Fitness',
      items: [
        // Categories, subcategories, and cards for Tab 2
      ],
    },
  ];

  return (
    <>
       <div className="App">
        <Tabs tabs={tabs} activeTab={activeTab} changeTab={setActiveTab} />
        <Content activeTab={activeTab} />
      </div>
    </>
  );
}
*/
