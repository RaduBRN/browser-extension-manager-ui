import { useState } from "react";
import Content from "./components/Content";
import Header from "./components/Header";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div data-theme={darkMode && "dark"}>
      <div className="font-display bg-light-gradient bg-dark-gradient flex flex-col items-center md:max-w-[768px] lg:max-w-full min-h-screen px-5 md:px-6 lg:px-32 py-6 lg:py-10 gap-8 md:gap-10 lg:gap-12">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} />
        <Content />
      </div>
    </div>
  );
}

export default App;
