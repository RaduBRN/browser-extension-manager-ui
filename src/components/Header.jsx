import IconLogo from "../icons/IconLogo";
import IconMoon from "../icons/IconMoon";
import IconSun from "../icons/IconSun";

import { motion } from "motion/react";

function Header({ darkMode, setDarkMode }) {
  function handleStateToggle() {
    setDarkMode((prev) => !prev);
  }

  return (
    <header className="bg-[#FBFDFE] dark:bg-[#202535] w-full rounded-xl p-3 flex justify-between items-center">
      <IconLogo darkMode={darkMode} />
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="bg-[#EEEEEE] hover:bg-[#C6C6C6] dark:bg-[#2F364B] hover:dark:bg-[#535868] focus:outline-2 focus:outline-[#F25C54] outline-offset-1 p-4 rounded-xl cursor-pointer"
        onClick={handleStateToggle}
      >
        {darkMode ? <IconSun /> : <IconMoon />}
      </motion.button>
    </header>
  );
}

export default Header;
