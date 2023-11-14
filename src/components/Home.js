// Home.js

import React from 'react';

function Home() {
  return (
    <div className="home-container">
      <header>
        <h1>BYU Resources for Physcial Health and Wellness</h1>
        {/*<p>Your go-to destination for all things amazing!</p> */}
      </header>
      <main>
        <section className="features">
          <div className="feature">
            <h2>Nutrition</h2>
            <p>Nutrition is the study of food and how it works in your body. Nutrition includes all the stuff that's in your food, such as vitamins, protein, fat, and more. It's important to eat a variety of foods, including fruits, vegetables, dairy products, and grains, so you have what you need to grow and be healthy.</p>
          </div>
          <div className="feature">
            <h2>Fitness</h2>
            <p>Physical fitness can be defined as a general state of health and well-being or more specifically as the ability to perform physical activities associated with daily life with vigor and alertness and without getting overly tired</p>
          </div>
          <div className="feature">
            <h2>Time Management</h2>
            <p>Time management is the process of organizing and planning how to divide your time between different activities. Get it right, and you'll end up working smarter, not harder, to get more done in less time – even when time is tight and pressures are high. The highest achievers manage their time exceptionally well.</p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
