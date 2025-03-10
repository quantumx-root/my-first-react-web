import "./wellmassage.css";
import { useState, useEffect } from "react";
import { Astro, Ayushi, changepro } from "./data";

function Wellmassage({ change }) {
  const [displayText, setDisplayText] = useState("");
  const [displayText2, setDisplayText2] = useState("");
  const [fadeEffect, setFadeEffect] = useState(false);
  const [fadeEffect2, setFadeEffect2] = useState(false);

  useEffect(() => {
    const text = "WELLCOME TO QUANTUMX";
    const speed = 50;
    let i = 0;
    setDisplayText("");
    setFadeEffect(false);

    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayText((prev) => prev + text.charAt(i));
        i++;
      } else {
        clearInterval(interval);
        setFadeEffect(true);
        setTimeout(startSecondText, 500);
      }
    }, speed);

    return () => clearInterval(interval);
  }, []);

  const startSecondText = () => {
    const text2 = "EXPLORE THE FUTURE";
    const speed2 = 50;
    let j = 0;
    setDisplayText2("");
    setFadeEffect2(false);

    const interval2 = setInterval(() => {
      if (j < text2.length) {
        setDisplayText2((prev) => prev + text2.charAt(j));
        j++;
      } else {
        clearInterval(interval2);
        setFadeEffect2(true);
      }
    }, speed2);
  };
  const [numsplit, setnumsplit] = useState("-100%");

  const split = () => {
    if (numsplit === "-100%") {
      setnumsplit("0%");
    } else {
      setnumsplit("-100%");
    }
  };
  return (
    <>
      <div
        className="changeProfile"
        style={{
          transform: `translateX(${numsplit})`,
          transition: "transform 1s",
        }}
      >
        <button className="splid-button" onClick={split}>
          splid
        </button>
        <ul className="name-list">
          <li className="changeName" onClick={() => change("astro")}>
            <img src="./st.png" alt="" />
            Astro
          </li>
          <li className="changeName" onClick={() => change("ayushi")}>
            <img src="./yt.png" alt="" />
            Ayushi
          </li>
          <li className="changeName" onClick={() => change("mahi")}>
            <img src="./mt.png" alt="" />
            Maharash
          </li>
        </ul>
      </div>
      <div className="wellmess">
        <h1 className={fadeEffect ? "fade-in" : ""}>{displayText}</h1>
        <h3 className={fadeEffect2 ? "fade-in-smooth" : ""}>{displayText2}</h3>
      </div>
    </>
  );
}

export default Wellmassage;
