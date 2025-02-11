import React from 'react';
import { Link } from 'react-router-dom';

const Transformations = () => {
  return (
    <div>
      <header>
        <h1>Client Transformations</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/transformations">Transformations</Link>
          <Link to="/sales">Plans</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>
      
      <section id="gallery">
        <h2>Before &amp; After</h2>
        <div className="gallery-item">
          <img src="/images/transformation1.jpg" alt="Transformation 1" />
          <p>"I achieved my dream body!"</p>
        </div>
        <div className="gallery-item">
          <img src="/images/transformation2.jpg" alt="Transformation 2" />
          <p>"GT Coaching changed my life!"</p>
        </div>
      </section>
      
      <footer>
        <p>&copy; 2025 GT Coaching</p>
      </footer>
    </div>
  );
};

export default Transformations;