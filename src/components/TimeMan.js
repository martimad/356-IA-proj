// Services.js

import React from 'react';
import Card from './card'; // Import the Card component
import '../App.css';

function TimeMan() {
        // Sample data for the cards
        const timeData = [
          {
            title: 'Habit Stacking',
            text: ' A productivity technique involving the integration of new habits into existing routines, optimizing time management and efficiency.',
            link: 'https://example.com/intramural-sports',
          },
          {
            title: 'Time Management Tips',
            text: 'Practical strategies and advice to effectively manage time, prioritize tasks, and enhance overall productivity.',
            link: 'https://example.com/triathlon-registration',
          },
          {
            title: 'Nutrition & Wellness Consultations',
            text: 'Professional guidance on nutrition and wellness, offering personalized advice to improve overall health and lifestyle.',
            link: 'https://example.com/fitness-class-schedule',
          }
          // Add more cards as needed
        ];
      
        return (
          <div className="timeman-container">
            <h1>Time Management</h1>
            <div className="card-container">
              {timeData.map((data, index) => (
                <Card key={index} title={data.title} text={data.text} link={data.link} />
              ))}
            </div>
          </div>
        );
}

export default TimeMan;
