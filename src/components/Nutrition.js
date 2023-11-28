// Services.js

import React, {useState} from 'react';
import Card from './card'; // Import the Card component
import '../App.css';

function Nutrition() {
    // Sample data for the cards
    const [selectedCategory, setSelectedCategory] = useState('all');
    const nutritionData = [
      {
        title:"MyPlate",
        text:"MyPlate is a visual guide to help individuals make healthy food choices, representing the five food groups—fruits, vegetables, grains, protein, and dairy.",
        link:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        category: 'gov',
      },
      {
        title:"Government Dietary Guidelines",
        text:"These guidelines provide evidence-based advice for making food choices that promote overall health, prevent chronic diseases, and maintain a healthy weight",
        link:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        category: 'gov',
      },
      {
        title:"Why college students don’t meet nutrition requirements",
        text:"College students often face challenges meeting nutrition requirements due to busy schedules, limited access to healthy foods, and unfamiliarity with balanced meal planning.",
        link:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        category: 'school',
      },
      {
        title:"Dorm-friendly microwave meals",
        text:"Quick and easy microwave meals suitable for dorm living, ensuring students have access to convenient and nutritious food options",
        link:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        category: 'diets',
      },
      {
        title:"Mood/energy Boosting diets",
        text:"Diets that focus on nutrient-rich foods to support mental well-being and sustained energy levels throughout the day.",
        link:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        category: 'diets',
      },
      {
        title:"Vegan Diet",
        text:"A vegan diet excludes all animal products, emphasizing plant-based foods like fruits, vegetables, grains, and legumes",
        link:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        category: 'diets',
      },
      {
        title:"Vegetarian Diet",
        text:"A vegetarian diet excludes meat but may include other animal products like dairy and eggs, offering various health benefits",
        link:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        category: 'diets',
      },
      {
        title:"Weight-Gain Diet",
        text:"A diet designed to help individuals gain weight healthily, often involving a combination of increased calorie intake and strength training",
        link:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        category: 'diets',
      },
      {
        title:"Weight-Loss Diet",
        text:"A diet tailored to assist individuals in achieving weight loss goals through a balanced and calorie-controlled approach",
        link:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        category: 'diets',
      },
      {
        title: 'Dietitian lead support group',
        text: 'A support group led by a registered dietitian, fostering a community for individuals who stuggle with disordered eating.',
        link: 'https://example.com/fitness-class-schedule',
        category: 'diets',
      },
      {
        title: 'Food Science academic research',
        text: 'Academic research in the field of food science, exploring topics related to nutrition, food quality, and safety.',
        link: 'https://example.com/fitness-class-schedule',
        category: 'school',
      },
      {
        title: 'Info on Nutrition, Dietetics, Food Science majors',
        text: 'Information on academic majors related to nutrition, dietetics, and food science, helping individuals pursue careers in these fields.',
        link: 'https://example.com/fitness-class-schedule',
        category: 'school',
      },

      // Add more cards as needed
    ];
  
    const filteredCards = nutritionData.filter((card) => {
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
        <div className="nutrition-container">
          <h1>Nutrition</h1>
    
          {/* Secondary Navigation Bar */}
          <div className="secondary-nav">
            <button onClick={() => handleCategoryChange('all')}>All</button>
            <button onClick={() => handleCategoryChange('diets')}>Diets</button>
            <button onClick={() => handleCategoryChange('school')}>Academia</button>
            <button onClick={() => handleCategoryChange('gov')}>Gov Resources</button>
            {/* Add more buttons for other categories */}
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
export default Nutrition;
