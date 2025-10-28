import { useState } from 'react';
import './App.css';

function App() {
  const [dob, setDob] = useState("");
  const [age, setAge] = useState({ years: "", months: "", days: "" });

  const calculateAge = () => {
    if (!dob) {
      alert("Please select your Date of Birth");
      return;
    }

    const birthDate = new Date(dob);
    const today = new Date();

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    
    if (days < 0) {
      months--;
      const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0);
      days += prevMonth.getDate();
    }

    
    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({ years, months, days });
  };

  return (
    <div className="app-container">
      <h1>Age Calculator</h1>
      <p>Enter your date of birth to calculate your age</p>

      <div className="input-section">
        <input
          type="date"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />
        <button onClick={calculateAge}>Calculate</button>
      </div>

      {age.years && (
        <div className="result">
          <h3>Your Age:</h3>
          <p>
            {age.years} Years, {age.months} Months, and {age.days} Days
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
