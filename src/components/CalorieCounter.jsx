import React, { useState, useEffect } from "react";

const CalorieCounter = () => {
  // Form state values
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [activity, setActivity] = useState("1.2");

  // Calculated results
  const [bmr, setBmr] = useState(null);
  const [tdee, setTdee] = useState(null);

  // Calculate BMR and TDEE every time any input changes
  useEffect(() => {
    if (weight && height && age && gender && activity) {
      const w = parseFloat(weight);
      const h = parseFloat(height);
      const a = parseFloat(age);
      const act = parseFloat(activity);

      if (!isNaN(w) && !isNaN(h) && !isNaN(a) && !isNaN(act)) {
        // Calculate BMR using the Mifflin-St Jeor Equation
        let calculatedBmr;
        if (gender === "male") {
          calculatedBmr = 10 * w + 6.25 * h - 5 * a + 5;
        } else {
          calculatedBmr = 10 * w + 6.25 * h - 5 * a - 161;
        }
        const calculatedTdee = calculatedBmr * act;
        setBmr(calculatedBmr);
        setTdee(calculatedTdee);
      } else {
        setBmr(null);
        setTdee(null);
      }
    } else {
      setBmr(null);
      setTdee(null);
    }
  }, [weight, height, age, gender, activity]);

  return (
    <div className="max-w-xl mx-auto p-6 bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Calorie Counter</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-gray-700">Weight (kg):</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. 70"
          />
        </div>
        <div>
          <label className="block text-gray-700">Height (cm):</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. 175"
          />
        </div>
        <div>
          <label className="block text-gray-700">Age (years):</label>
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="e.g. 30"
          />
        </div>
        <div>
          <label className="block text-gray-700">Gender:</label>
          <select
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700">Activity Level:</label>
          <select
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            className="mt-1 w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="1.2">Sedentary (little or no exercise)</option>
            <option value="1.375">Lightly active (light exercise 1-3 days/week)</option>
            <option value="1.55">Moderately active (moderate exercise 3-5 days/week)</option>
            <option value="1.725">Very active (hard exercise 6-7 days/week)</option>
            <option value="1.9">Extra active (very hard exercise &amp; physical job)</option>
          </select>
        </div>
      </form>

      {bmr && tdee && (
        <div className="mt-6 p-4 bg-gray-50 rounded">
          <h3 className="text-xl font-semibold mb-2">Results</h3>
          <p>
            <span className="font-bold">BMR:</span> {bmr.toFixed(2)} calories/day
          </p>
          <p>
            <span className="font-bold">TDEE:</span> {tdee.toFixed(2)} calories/day
          </p>
          <p className="mt-2 text-gray-600">
            For weight loss: {(tdee - 500).toFixed(2)} calories/day
          </p>
          <p className="text-gray-600">
            For weight gain: {(tdee + 500).toFixed(2)} calories/day
          </p>
        </div>
      )}
    </div>
  );
};

export default CalorieCounter;