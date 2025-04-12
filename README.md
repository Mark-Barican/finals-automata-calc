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

---

## Automata Theory Implementation

### Automata Design

The BMI categorization process is modeled as a **Deterministic Finite Automaton (DFA)** with the following components:

- **Categories**:
  
| Category           | BMI Range         |
|--------------------|-------------------|
| Underweight        | BMI < 18.5        |
| Normal             | 18.5 ≤ BMI < 25   |
| Overweight         | 25 ≤ BMI < 30     |
| Obesity            | BMI ≥ 30          |

- **States**:
  - `q0`: Initial state (no input yet).
  - `q1`: Underweight state.
  - `q2`: Normal state.
  - `q3`: Overweight state.
  - `q4`: Obesity state.

- **Alphabet**:
  - BMI values (real numbers).

- **Transitions**:
  - Based on the BMI value, the automaton transitions to the appropriate state.

- **Start State**:
  - `q0` (initial state).

- **Accept States**:
  - `q1`, `q2`, `q3`, `q4` (depending on the BMI category).

### State Transition Table

| Current State | Input (BMI Range)        | Next State        |
|---------------|--------------------------|-------------------|
| `q0`          | BMI < 18.5               | `q1` (Underweight)|
| `q0`          | 18.5 ≤ BMI < 25          | `q2` (Normal)     |
| `q0`          | 25 ≤ BMI < 30            | `q3` (Overweight) |
| `q0`          | BMI ≥ 30                 | `q4` (Obesity)    |

### Code Implementation

The automaton is implemented in the `StateMachine.js` file. Below is an example of how the DFA is modeled:
<p align="left">
  <img src="/public/assets/code_imp_1.png" alt="Carbon_imp" width="400" />
</p>

### Integration with BMI Calculation

The `categorizeBMI` function is called after the BMI is calculated. The returned state determines the category displayed to the user.
<p align="left">
  <img src="/public/assets/code_imp_2.png" alt="Carbon_imp_2" width="400" />
</p>

---

## How Automata Theory Enhances the Application

1. **State Modeling**:  
   - Automata theory provides a structured way to model the BMI categorization process as a series of states and transitions.

2. **Deterministic Behavior**:  
   - The DFA ensures that for any given BMI value, the application transitions to exactly one state, making the categorization process predictable and reliable.

3. **Scalability**:  
   - Additional BMI categories can be added by defining new states and transitions without disrupting the existing logic.

---

## How to Run the Project

1. Clone the repository:

     ```
     git clone <repository-url>
     ```
     
2. Navigate to the project directory:

     ```
     cd finals-automata-calc
     ```
     
3. Install dependencies:

     ```
     npm install
     ```
     
4. Start the development server:

     ```
     npm start
     ```

5. Open the application in your browser at `http://localhost:3000`.

---

## Future Enhancements

1. Add more detailed health recommendations based on BMI categories.
2. Extend the automaton to include additional states for subcategories *(e.g., Severe Obesity)*.
3. Implement localization for different languages.
4. Add age and sex into account to calculate the BMI accurately and for different ranges of people.
