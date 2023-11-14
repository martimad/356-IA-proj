// Fitness.js

import React from 'react';
import Card from './card';
import '../App.css'; // Import your CSS file

function Fitness() {
  // Sample data for the cards
  const fitnessData = [
    {
      title: 'Intramural Sports',
      text: 'Organized sports activities within a community or institution, providing opportunities for friendly competition and physical fitness.',
      link: 'https://example.com/intramural-sports',
    },
    {
      title: 'Triathlon Registration',
      text: 'The process of signing up for a triathlon, a multisport event that typically includes swimming, cycling, and running.',
      link: 'https://example.com/triathlon-registration',
    },
    {
      title: 'Fitness Class Schedule',
      text: 'A timetable outlining various fitness classes, helping individuals plan their workouts and participate in different exercise routines.',
      link: 'https://example.com/fitness-class-schedule',
    },
    {
        title: 'Equipment Rental',
        text: 'Renting fitness equipment allows individuals to try different workout tools before making a purchase commitment.',
        link: 'https://example.com/fitness-class-schedule',
      },
      {
        title: 'Workout Facilities',
        text: 'Places equipped with fitness amenities, offering a variety of exercise options for individuals to improve their physical health.',
        link: 'https://example.com/fitness-class-schedule',
      },
      {
        title: 'Body Composition Testing',
        text: 'Assessment methods to determine the proportion of body fat and lean muscle mass, helping tailor fitness and nutrition plans.',
        link: 'https://example.com/fitness-class-schedule',
      },
      {
        title: 'Health and Wellness Coaching',
        text: 'Coaching services focused on holistic health and well-being, providing support for individuals to achieve their wellness goals.',
        link: 'https://example.com/fitness-class-schedule',
      },
    // Add more cards as needed
  ];

  return (
    <div className="fitness-container">
      <h1>Fitness</h1>
      <div className="card-container">
        {fitnessData.map((data, index) => (
          <Card key={index} title={data.title} text={data.text} link={data.link} />
        ))}
      </div>
    </div>
  );
}

export default Fitness;
