import React, { useState } from "react";
import Visitors from "./Visitors.jsx";

function RegistrationForm() {

  const [selectedProgram, setSelectedProgram] = useState("");

  const handleProgramChange = (event) => {
    setSelectedProgram(event.target.value);
  };

  return (
    <>
      <form action="">
        <input type="text" placeholder="Firstname..." />
        <input type="text" placeholder="Lastname..." />
        <h3>Program</h3>
        <label>
          <input
            type="radio"
            name="program"
            value="WU"
            onChange={handleProgramChange}
          />
          Webbutvecklare
        </label>
        <label>
          <input
            type="radio"
            name="program"
            value="DD"
            onChange={handleProgramChange}
          />
          Digital Designer
        </label>
        <div className={selectedProgram === "WU" ? "WU" : "hidden"}>
          React - <input type="checkbox" name="myCheckbox" />
          PHP - <input type="checkbox" name="myCheckbox" />
          Laravel - <input type="checkbox" name="myCheckbox" />
          Wordpress - <input type="checkbox" name="myCheckbox" />
          C# - <input type="checkbox" name="myCheckbox" />
          SQL/DB - <input type="checkbox" name="myCheckbox" />
          Styling - <input type="checkbox" name="myCheckbox" />
        </div>
        <div className={selectedProgram === "DD" ? "DD" : "hidden"}>
          Figma - <input type="checkbox" name="myCheckbox" />
          Motiongraphics - <input type="checkbox" name="myCheckbox" />
          After effects - <input type="checkbox" name="myCheckbox" />
        </div>
        <button action="submit">Send</button>
      </form>
    </>
  );
}

export default RegistrationForm;
