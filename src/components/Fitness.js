// Fitness.js

import React, {useState} from 'react';
import Card from './card';
import '../App.css'; // Import your CSS file

function Fitness() {
const [selectedCategory, setSelectedCategory] = useState('all');
  const fitnessData = [
    {
      title: 'Intramural Sports',
      text: 'Organized sports activities within a community or institution, providing opportunities for friendly competition and physical fitness.',
      link: 'https://example.com/intramural-sports',
      category: 'sport',
    },
    {
      title: 'Triathlon Registration',
      text: 'The process of signing up for a triathlon, a multisport event that typically includes swimming, cycling, and running.',
      link: 'https://example.com/triathlon-registration',
      category: 'sport',
    },
    {
      title: 'Fitness Class Schedule',
      text: 'A timetable outlining various fitness classes, helping individuals plan their workouts and participate in different exercise routines.',
      link: 'https://example.com/fitness-class-schedule',
      category: 'gym',
    },
    {
        title: 'Equipment Rental',
        text: 'Renting fitness equipment allows individuals to try different workout tools before making a purchase commitment.',
        link: 'https://example.com/fitness-class-schedule',
        category: 'sport',
      },
      {
        title: 'Workout Facilities',
        text: 'Places equipped with fitness amenities, offering a variety of exercise options for individuals to improve their physical health.',
        link: 'https://example.com/fitness-class-schedule',
        category: 'gym',
      },
      {
        title: 'Body Composition Testing',
        text: 'Assessment methods to determine the proportion of body fat and lean muscle mass, helping tailor fitness and nutrition plans.',
        link: 'https://example.com/fitness-class-schedule',
        category: 'coaching',
      },
      {
        title: 'Health and Wellness Coaching',
        text: 'Coaching services focused on holistic health and well-being, providing support for individuals to achieve their wellness goals.',
        link: 'https://example.com/fitness-class-schedule',
        category: 'coaching',
      },
    // Add more cards as needed
  ];

  const filteredCards = fitnessData.filter((card) => {
    if (selectedCategory === 'all') {
      return true; // Display all cards if 'all' is selected
    } else {
      return card.category === selectedCategory; // Filter cards based on the selected category
    }
  });

  // Function to handle category change
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className="fitness-container">
      <h1>Fitness</h1>

      {/* Secondary Navigation Bar */}
      <div className="secondary-nav">
        <button onClick={() => handleCategoryChange('all')}>All</button>
        <button onClick={() => handleCategoryChange('sport')}>Sports</button>
        <button onClick={() => handleCategoryChange('gym')}>Gym</button>
        <button onClick={() => handleCategoryChange('coaching')}>Coaching</button>
      </div>

      {/* Display Filtered Cards */}
      <div className="card-container">
        {filteredCards.map((data, index) => (
          <Card key={index} title={data.title} text={data.text} link={data.link} />
        ))}
      </div>
    </div>
  );
}

export default Fitness;
