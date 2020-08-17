import React from 'react';
import Heading from "./components/Heading/index";
import EmployeeSearch from "./components/EmployeeSearch/index";
import EmployeeRow from "./components/EmployeeRow/index";

function App() {
  return (
    <div className="App">

      <Heading />
      <EmployeeSearch />
      <EmployeeRow />
      <h1> TEST APP </h1>
    </div>
  );
}

export default App;
