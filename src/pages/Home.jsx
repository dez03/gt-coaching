import React from 'react';
import { Link } from 'react-router-dom';
import CalorieCounter from '../components/CalorieCounter';

function Home() {
  return (
    <div className="bg-gray-900 text-white">
      
      {/* Hero Section */}
      <section id="hero" className="flex flex-col items-center justify-center text-center py-20 bg-gradient-to-r from-red-600 to-orange-500">
        <h2 className="text-4xl font-bold mb-4">Unlock Your Strength Potential with GT Coaching</h2>
        <p className="text-lg max-w-2xl">Personalized Bodybuilding and Powerlifting Coaching for Athletes at All Levels</p>
        <Link to="/sales" className="mt-6 px-6 py-3 bg-black text-white rounded-lg text-lg hover:bg-gray-800 transition">
          Start Your Transformation Today
        </Link>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 text-center bg-gray-800">
        <h2 className="text-3xl font-semibold mb-6">About GT Coaching</h2>
        <p className="text-lg max-w-3xl mx-auto">
          At GT Coaching, we specialize in delivering personalized bodybuilding and powerlifting programs designed to help you achieve your fitness goals. 
          Our approach combines evidence-based training methodologies with customized nutrition plans to ensure optimal results.
        </p>
        <p className="mt-4 text-lg max-w-3xl mx-auto">
          Our head coach, currently a junior in college, has dedicated over three years to mastering the art and science of strength training. 
          With a lifelong passion for sports, they bring a unique perspective to coaching, understanding the demands of balancing academics, athletics, and personal growth.
        </p>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-6 bg-gray-900">
        <h2 className="text-3xl font-semibold text-center mb-8">Services</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Personalized Training Programs</h3>
            <p>Receive individualized programming tailored to your goals, whether it's strength, muscle growth, or competition preparation.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Nutrition Coaching</h3>
            <p>Custom meal plans designed to align with your training and dietary preferences for optimal results.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Online Coaching</h3>
            <p>Train under expert guidance from anywhere with technique analysis, check-ins, and continuous support.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Contest Preparation</h3>
            <p>Comprehensive coaching for competition prep, including posing, nutrition, and peak week strategies.</p>
          </div>
        </div>
      </section>

      {/* Calorie Calculator Section */}
      <section id="calorie-calculator" className="py-16 px-6 bg-gray-800 text-center">
        <h2 className="text-3xl font-semibold mb-6">Calorie Calculator</h2>
        <p className="text-lg mb-4">Calculate your daily caloric needs!</p>
        <CalorieCounter />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-6 bg-gray-900 text-center">
        <h2 className="text-3xl font-semibold mb-8">Client Success Stories</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="bg-gray-800 p-6 rounded-lg">
            <p className="text-lg italic">"After three months with GT Coaching, I achieved full range of motion in my bench press for the first time in a decade, and my squat depth improved significantly, all without pain."</p>
            <p className="mt-2 font-semibold">- Mark M.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <p className="text-lg italic">"GT Coaching embraced my individuality and focused on enhancing my strengths. Recently, I secured the first-ever gold medal for Zimbabwe in powerlifting at the African Championships."</p>
            <p className="mt-2 font-semibold">- Audrey S.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-gray-800 text-center">
        <h2 className="text-3xl font-semibold mb-6">Get in Touch</h2>
        <p className="text-lg mb-4">Ready to take the next step? Contact us today to schedule a consultation!</p>
        <form className="max-w-md mx-auto">
          <input type="text" placeholder="Name" className="w-full p-3 mb-4 bg-gray-900 text-white rounded-lg" />
          <input type="email" placeholder="Email" className="w-full p-3 mb-4 bg-gray-900 text-white rounded-lg" />
          <textarea placeholder="Message" className="w-full p-3 mb-4 bg-gray-900 text-white rounded-lg"></textarea>
          <button type="submit" className="w-full py-3 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg">
            Send Message
          </button>
        </form>
      </section>

    </div>
  );
}

export default Home;