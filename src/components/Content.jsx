import { useState } from "react";
import buttonData from "../data/buttonData";
import BrowserExtensions from "./BrowserExtensions";
import { motion } from "motion/react";

function Content() {
  const [displayOption, setDisplayOption] = useState("All");

  const renderedButton = buttonData.map((button) => {
    return (
      <motion.button
        key={button.id}
        whileHover={{ scale: 1.05 }}
        className={`${
          displayOption === button.text
            ? "bg-[#C7231A] hover:bg-[#DE4840] dark:bg-[#F25C54] text-[#FBFDFE] dark:text-[#091540]"
            : "bg-[#FBFDFE] dark:bg-[#2F364B] hover:dark:bg-[#535868] text-[#091540] dark:text-[#FBFDFE] border border-[#D6E2F5] dark:border-[#535868] hover:opacity-70 dark:hover:opacity-100"
        } rounded-4xl py-2 px-4 cursor-pointer focus:outline-2 focus:outline-[#F25C54] outline-offset-1`}
        onClick={() => setDisplayOption(button.text)}
      >
        {button.text}
      </motion.button>
    );
  });

  return (
    <main className="flex flex-col gap-10 md:gap-8 w-full ">
      <div className="flex flex-col md:flex-row items-center md:justify-between gap-4">
        <h2 className="text-[#091540] dark:text-[#FBFDFE] text-[34px] font-bold">
          Extensions List
        </h2>
        <div className="flex justify-around gap-6 text-xl leading-[140%] tracking-[-0.3px]">
          {renderedButton}
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(324px,1fr))] gap-4">
        <BrowserExtensions displayOption={displayOption} />
      </div>
    </main>
  );
}

export default Content;
