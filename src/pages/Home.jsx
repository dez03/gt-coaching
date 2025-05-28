import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, ShoppingCart, ChevronRight, Mail, MessageSquare } from 'lucide-react';
import CalorieCounter from '../components/CalorieCounter';
import CoachImg from "../assets/Coach.png";

function Home() {
  return (
    <div className="bg-gray-900 text-white flex min-h-screen flex-col items-center">
      <main className="flex-1 w-full">

        {/* Hero Section */}
        <section className="relative h-[600px] w-full flex items-center justify-center">
          {/* Background Image (absolutely positioned) */}
          <img
            src="https://images.pexels.com/photos/1547248/pexels-photo-1547248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Bodybuilding Coach"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60 z-10" />

          {/* Hero Content */}
          <div className="relative z-20 text-center max-w-screen mx-auto px-4">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              TRANSFORM YOUR <span className="text-red-600">PHYSIQUE</span>
            </h1>
            <p className="mt-4 text-lg text-gray-200 sm:text-xl">
              Professional coaching and custom workout plans to help you achieve your dream body
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2">
                Get Started
              </button>
              <button
                className="border border-white text-white hover:bg-white hover:text-black px-4 py-2"
              >
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="bg-white py-16 text-black w-full">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Premium <span className="text-red-600">Services</span>
              </h2>
              <p className="mt-4 max-w-[700px] text-gray-600 mx-auto">
                Choose from our range of professional coaching services designed to help you reach your fitness goals
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="border-2 border-gray-200 hover:border-red-600 transition-colors rounded-lg overflow-hidden">
                <div className="bg-black text-white p-4">
                  <h3 className="text-xl">Workout PDF Plans</h3>
                  <p className="text-gray-300">Detailed workout routines for any goal</p>
                </div>
                <div className="pt-6 p-4">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-red-600" />
                      <span>Beginner to advanced levels</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-red-600" />
                      <span>Hypertrophy focused programs</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-red-600" />
                      <span>Strength building routines</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-red-600" />
                      <span>Exercise video demonstrations</span>
                    </li>
                  </ul>
                </div>
                <div className="p-4">
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2">
                    From $29.99
                  </button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="border-2 border-red-600 shadow-lg rounded-lg overflow-hidden">
                <div className="bg-red-600 text-white p-4">
                  <h3 className="text-xl">1-on-1 Coaching</h3>
                  <p className="text-white">Personalized training and support</p>
                </div>
                <div className="pt-6 p-4">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-red-600" />
                      <span>Weekly check-ins and adjustments</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-red-600" />
                      <span>Form correction and technique</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-red-600" />
                      <span>24/7 messaging support</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-red-600" />
                      <span>Custom workout programming</span>
                    </li>
                  </ul>
                </div>
                <div className="p-4">
                  <button className="w-full bg-black hover:bg-gray-800 text-white px-4 py-2">
                    From $199/month
                  </button>
                </div>
              </div>

              {/* Card 3 */}
              <div className="border-2 border-gray-200 hover:border-red-600 transition-colors rounded-lg overflow-hidden">
                <div className="bg-black text-white p-4">
                  <h3 className="text-xl">Nutrition Plans</h3>
                  <p className="text-gray-300">Fuel your body for optimal results</p>
                </div>
                <div className="pt-6 p-4">
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-red-600" />
                      <span>Calorie and macro calculations</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-red-600" />
                      <span>Meal planning and recipes</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-red-600" />
                      <span>Supplement recommendations</span>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="mr-2 h-4 w-4 text-red-600" />
                      <span>Bulking and cutting guides</span>
                    </li>
                  </ul>
                </div>
                <div className="p-4">
                  <button className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2">
                    From $49.99
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-black py-16 text-white w-full text-left">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="relative h-[400px] rounded-lg overflow-hidden mx-auto">
              <img src="https://barbend.com/wp-content/uploads/2024/11/jay-cutler-triceps.jpg" alt="Coach" fill className="object-cover" />

              </div>
              <div>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  About Your <span className="text-red-600">Coach</span>
                </h2>
                <p className="mt-4 text-gray-300">
                  With over 10 years of experience in bodybuilding and fitness coaching, I've helped hundreds of clients
                  transform their physiques and achieve their dream bodies.
                </p>
                <ul className="mt-6 space-y-4">
                  <li className="flex items-start">
                    <span>Certified Personal Trainer (NASM, ACE)</span>
                  </li>
                  <li className="flex items-start">
                    <ChevronRight className="mr-2 h-5 w-5 text-red-600 shrink-0 mt-0.5" />
                    <span>Nutrition Specialist with focus on body composition</span>
                  </li>
                  <li className="flex items-start">
                  <ChevronRight className="mr-2 h-5 w-5 text-red-600 shrink-0 mt-0.5" />

                    <span>Competitive bodybuilder with multiple top 5 placements</span>
                  </li>
                  <li className="flex items-start">
                  <ChevronRight className="mr-2 h-5 w-5 text-red-600 shrink-0 mt-0.5" />

                    <span>Featured in Muscle & Fitness and Men's Health</span>
                  </li>
                </ul>
                <button className="mt-8 bg-red-600 hover:bg-red-700 text-white px-4 py-2">Learn More About Me</button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="bg-white py-16 w-full text-center">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-black">
                Client <span className="text-red-600">Transformations</span>
              </h2>
              <p className="mt-4 max-w-[700px] text-gray-600 mx-auto">
                Real results from real clients who followed my programs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                  <div className="flex flex-col items-center">
                    <div className="relative w-full h-[300px] mb-4">
                      <img
                        src="https://cdn.shopify.com/s/files/1/0150/4588/6016/files/Photo_May_20_5_28_52_PM.jpg?733"
                        alt={`Transformation ${i}`}
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <h3 className="text-xl font-bold">John D.</h3>
                    <p className="text-sm text-gray-500">12 Week Transformation</p>
                    <div className="mt-4 text-center">
                      <p className="text-gray-700">
                        "I've tried many programs before, but none delivered results like this. The personalized
                        approach made all the difference."
                      </p>
                    </div>
                    <div className="mt-4 flex items-center">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg key={star} className="w-5 h-5 text-red-600 fill-current" viewBox="0 0 24 24">
                          <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-red-600 py-16 text-white w-full text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to Start Your Transformation?
            </h2>
            <p className="mt-4 max-w-[700px] mx-auto">
              Join hundreds of satisfied clients who have achieved their dream physique with my coaching programs
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-black hover:bg-gray-800 text-white px-4 py-2">
                View All Programs
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-red-600 px-4 py-2">
                Contact Me
              </button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="bg-black py-16 text-white w-full text-center">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="text-left">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Get In <span className="text-red-600">Touch</span>
                </h2>
                <p className="mt-4 text-gray-300">
                  Have questions about my programs or want to discuss your fitness goals? Reach out and I'll get back to
                  you as soon as possible.
                </p>

                <div className="mt-8 space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-red-600 mr-3" />
                    <span>coach@gtcoaching.com</span>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="h-5 w-5 text-red-600 mr-3" />
                    <span>Follow me on social media @GTcoaching</span>
                  </div>
                </div>
              </div>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white"
                    placeholder="Subject"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-800 text-white"
                    placeholder="Your message"
                  />
                </div>
                <button className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Calorie Calculator Section */}
        {/* <section id="calorie-calculator" className="py-16 px-6 bg-gray-800 text-center w-full">
          <h2 className="text-3xl font-semibold mb-6">Calorie Calculator</h2>
          <p className="text-lg mb-4">Calculate your daily caloric needs!</p>
          <CalorieCounter />
        </section> */}
      </main>
    </div>
  );
}

export default Home;