import { useState, useEffect } from "react";
import "./star.css"

function Star() {
  useEffect(() => {
    createStars(150);
    injectCSS();
  }, []);

  function createStars(num) {
    const container = document.querySelector("#stars-container");
    if (!container) return;
    for (let i = 0; i < num; i++) {
      const star = document.createElement("div");
      star.classList.add("star");
      star.style.position = "absolute";
      star.style.width = "2px";
      star.style.height = "2px";
      star.style.background = "white";
      star.style.borderRadius = "50%";
      star.style.opacity = "0.6";
      star.style.top = Math.random() * window.innerHeight + "px";
      star.style.left = Math.random() * window.innerWidth + "px";
      star.style.animation = `twinkle ${
        Math.random() * 2 + 1
      }s infinite alternate`;
      container.appendChild(star);
    }
  }

  function injectCSS() {
    const style = document.createElement("style");
    style.innerHTML = `
            @keyframes twinkle {
              0% { opacity: 0.2; transform: scale(0.8); }
              100% { opacity: 1; transform: scale(1.2); }
            }
            .star {
              position: absolute;
              width: 3px;
              height: 3px;
              background: white;
              border-radius: 50%;
              opacity: 0.6;
              animation: twinkle infinite alternate;
            }
          `;
    document.head.appendChild(style);
  }

  return (
    <div id="stars-container">

    </div>
  )
}

export default Star;
