import Star from "./star";
import Wellmassage from "./components/wellmassage";
import Contenebox from "./components/contenerbx";
import { changepro, Astro , Ayushi} from "./components/data";
import { useState } from "react";
import AboutSection from "./components/aboutsec";
import Project from "./components/PROJET";

function App() {
  const [devdata, setdevdata] = useState(Astro);

  const changeinfo = (click) => {
    if (click === "ayushi") {
      changepro(setdevdata, Ayushi);
    } else if (click === "astro") {
      changepro(setdevdata, Astro);
    } else if (click === "mahi") {
    } else {
      changepro(setdevdata, Astro);
    }
  };

  return (
    <>
      <Star></Star>
      <Wellmassage change={changeinfo}></Wellmassage>
      <Contenebox devdata={devdata} ></Contenebox>
      <AboutSection></AboutSection>
      <Project></Project>
    </>
  );
}

export default App;
