import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <header>
        <h1>GT Coaching</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/transformations">Transformations</Link>
          <Link to="/sales">Plans</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero">
        <h2>Transform Your Body and Mind</h2>
        <p>Achieve your fitness goals with expert coaching and personalized plans.</p>
        <Link to="/sales" className="cta">View Plans</Link>
      </section>

      {/* About Section */}
      <section id="about">
        <h2>About GT Coaching</h2>
        <p>Our coach has years of experience helping college students and adults improve their physiques and gym progress.</p>
      </section>

      {/* Calorie Calculator Section (Placeholder) */}
      <section id="calorie-calculator">
        <h2>Calorie Calculator</h2>
        <p>Calculate your daily caloric needs!</p>
        {/* Insert your calculator component or code here */}
      </section>

      {/* Testimonials Section */}
      <section id="testimonials">
        <h2>Testimonials</h2>
        <p>"GT Coaching helped me achieve my dream body!" - A Happy Client</p>
      </section>

      <footer>
        <p>&copy; 2025 GT Coaching</p>
      </footer>
    </div>
  );
}

export default Home;