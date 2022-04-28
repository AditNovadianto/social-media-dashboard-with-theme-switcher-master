import Section from "./components/Section";
import { useEffect, useState } from "react";
import Section2 from "./components/Section2";

const App = () => {
  const [dark, setDark] = useState(localStorage.theme == "dark" ? true : false);
  const [theme, setTheme] = useState("");

  const darkMode = () => {
    setDark(!dark);
  };

  useEffect(() => {
    if (dark) {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <div className="dark:bg-Very-Dark-Blue-(BG) bg-white transition-all min-h-screen py-10">
      <div className="dark:bg-Very-Dark-Blue-(Top-BG-Pattern) bg-Very-Pale-Blue-(Top-BG-Pattern) transition-all lg:flex lg:justify-between items-center justify-center px-8 py-10 rounded-b-3xl">
        <div className="w-[100%] lg:border-b-[0px] border-b-[1px] border-Desatured-Blue-(Text)">
          <p className="dark:text-white text-black text-3xl transition-all font-bold font-Inter">
            Social Media Dashboard
          </p>
          <p className="text-[14px] font-bold font-Inter mb-10 text-Desatured-Blue-(Text)">
            Total Folowers: 23,004
          </p>
        </div>
        <div className="flex mt-7 group mb-10 items-center lg:justify-end lg:w-full justify-between">
          <p className="dark:group-hover:text-white group-hover:text-black text-[14px] cursor-pointer transition-all font-Inter text-Desatured-Blue-(Text) font-bold">
            Dark Mode
          </p>

          <button className="lg:ml-5" onClick={darkMode}>
            <div className="dark:bg-Linear-Gradient-Toggle bg-Toggle hover:bg-Linear-Gradient-Toggle flex items-center w-[50px] h-[25px] transition-all rounded-full">
              <div className="dark:bg-Very-Dark-Blue-(BG) dark:translate-x-[0px] translate-x-[22px] bg-white w-[20px] ml-1 h-[20px] transition-all rounded-full"></div>
            </div>
          </button>
        </div>
      </div>

      <Section />

      <p className="dark:text-white text-black px-6 lg:px-8 font-Inter mt-12 mb-7 font-bold transition-all text-2xl">
        Overview - Today
      </p>

      <Section2 />
    </div>
  );
};

export default App;
