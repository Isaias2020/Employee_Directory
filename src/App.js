import React from 'react';
import NavBar from "./components/NavBar";
import EmployeeSearch from "./components/EmployeeSearch";
import EmployeeCardinfo from "./components/EmployeeCardinfo";

function App() {
  return (
    <div className="App">

      <NavBar />
      <EmployeeSearch />
      <EmployeeCardinfo />
      <h1> TEST APP </h1>
    </div>
  );
}

export default App;
