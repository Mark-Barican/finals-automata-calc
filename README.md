# Project Documentation: BMI Calculator Automata (HEALTHY DFA)

<p align="center">
  <img src="/public/assets/Healthy_DFA.png" alt="Project_logo" width="300" />
  <br>
  <img src="/public/assets/poster_DFA.png" alt="Poster" width="300" />
</p>

This project is a **BMI Calculator** built using **React.js**. It allows users to input their height, weight, age, and gender to calculate their **Body Mass Index (BMI)**. 

The application categorizes the BMI into different health ranges (e.g., **Normal**, **Underweight**, **Overweight**, **Obesity**) and visualizes the result using a **gauge chart**. Additionally, the project incorporates concepts from **Automata Theory** to model the state transitions of the BMI categorization process.

---

## Project Structure

The project follows the standard structure of a React application created using **Create React App**. Below is the directory structure:

<p align="center">
  <img src="/public/assets/carbon (2).png" alt="Carbon" width="300" />
</p>

---

## Key Files

- `BMIForm.js`: Handles user input for height, weight, age, and gender.
- `BMIGauge.js`: Displays the BMI result using a gauge chart.
- `StateMachine.js`: Implements the automata-based state transitions for BMI categorization.
- `App.js`: Main application component that integrates all features.

---

## Features

1. **BMI Calculation**:
   - Users input their height (in cm) and weight (in kg).
   - The BMI is calculated using the formula:

     ```
     BMI = weight (kg) / (height (m) * height (m))
     ```

2. **BMI Categorization**:
   - The BMI is categorized into the following ranges:
     - **Underweight**: BMI < 18.5  
     - **Normal**: 18.5 ≤ BMI < 24.9  
     - **Overweight**: 25 ≤ BMI < 29.9  
     - **Obesity**: BMI ≥ 30

3. **Gauge Chart Visualization**:
   - A gauge chart dynamically visualizes the BMI result and its category.

4. **Automata Theory Integration**:
   - The BMI categorization process is modeled as a **Deterministic Finite Automaton (DFA)**.

