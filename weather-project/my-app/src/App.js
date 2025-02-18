import React from "react"
import './App.css';

function App() {
  return (
    <div className="App">
      <form className="form">
        <input type="text" placeholder="Enter a city"/>
        <input type="submit"  value="Search" className="submit-btn"/>
      </form>
    </div>
  );
}

export default App;
