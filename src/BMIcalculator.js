import React, { useState } from "react";
import GaugeComponent from "react-gauge-component";
import "./BMIcalculator.css";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("Normal");
  const [error, setError] = useState("");

  const calculateBMI = () => {
    if (height === "" || weight === "") {
      setError("Please fill out both height and weight fields.");
      setBmi(null);
      setCategory("Normal");
      return;
    }

    if (height > 0 && weight > 0) {
      const heightInMeters = height * 0.0254;
      const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
      setBmi(bmiValue);
      setCategory(getBMICategory(bmiValue));
      setError("");
    }
  };

  const getBMICategory = (bmi) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi >= 18.5 && bmi < 25) return "Normal";
    if (bmi >= 25 && bmi < 30) return "Overweight";
    return "Obesity";
  };

  const clearFields = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
    setCategory("Normal");
    setError("");
  };

  return (
    <div className="bmi-container">
      <div className="bmi-sidebar">
        <label>Age (2 - 120)</label>
        <input type="number" placeholder="Age" />
        <label>Gender</label>
        <div className="bmi-gender">
          <input type="radio" name="gender" id="male" />{" "}
          <label htmlFor="male">Male</label>
          <input type="radio" name="gender" id="female" />{" "}
          <label htmlFor="female">Female</label>
        </div>
        <label>Height (in inches)</label>
        <input
          type="number"
          placeholder="Inches"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
        <label>Weight (in pounds)</label>
        <input
          type="number"
          placeholder="Pounds"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
        {error && <p className="error-message">{error}</p>}
        <button className="bmi-button" onClick={calculateBMI}>
          Calculate
        </button>
        <button className="bmi-button bmi-clear" onClick={clearFields}>
          Clear
        </button>
      </div>
      <div className="bmi-results">
        <h2>Results</h2>
        <div className="bmi-chart" style={{ width: "300px", height: "300px" }}>
          <GaugeComponent
            type="semicircle"
            arc={{
              colorArray: ['#F5CD19', '#5BE12C', '#EA4228', '#D22B2B'], // Matches BMI logic
              padding: 0.02,
              subArcs: [
                { limit: 18.1 }, // Underweight
                { limit: 25 },   // Normal
                { limit: 30 },   // Overweight
                { limit: 40 }    // Obesity
              ]
            }}
            pointer={{ type: "blob", animationDelay: 0 }}
            value={bmi || 10} // Default to 10 if BMI is not calculated
          />
          <p className="bmi-value">BMI = {bmi || "?"}</p>
          <p className={`bmi-category ${category.toLowerCase()}`}>{category}</p>
        </div>
      </div>
      <footer className="bmi-footer">BMICALCULATOR-2025</footer>
    </div>
  );
};

export default BMICalculator;