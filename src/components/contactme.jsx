import "./contactme.css";
import { useState } from "react";

function Loginpage() {
  const [activeBox, setActiveBox] = useState(null);

  const handleFocus = (index) => {
    setActiveBox(index);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setActiveBox(null);
    }, 200);
  };

  return (
    <div className="box">
      <div className="form">
        <h2>Contact Me</h2>
        {["Email", "Number", "Password"].map((label, index) => (
          <div
            className={`inputbox ${activeBox === index ? "active" : ""}`}
            key={index}
          >
            <input
              type={label === "Password" ? "password" : label.toLowerCase()}
              required
              onFocus={() => handleFocus(index)}
              onBlur={handleBlur}
            />
            <span>{label}</span>
            <i></i>
          </div>
        ))}
        <div className="link">
          <input type="submit" value="Sign up" />
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
