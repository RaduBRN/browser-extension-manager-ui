import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import data from "../data/data.json";

function getImageUrl(name) {
  return new URL(`../assets/images/${name}`, import.meta.url).href;
}

function BrowserExtensions({ displayOption }) {
  const [cards, setCards] = useState(data);

  const filteredCards = cards.filter((card) => {
    if (displayOption === "All") {
      return true;
    } else if (displayOption === "Active") {
      return card.isActive;
    } else if (displayOption === "Inactive") {
      return !card.isActive;
    }
  });

  function toggleActive(id, active) {
    setCards((prevCards) =>
      prevCards.map((card) =>
        card.id === id ? { ...card, isActive: !active } : card
      )
    );
  }

  function handleRemove(id) {
    setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  }

  return (
    <AnimatePresence>
      {filteredCards.map((item) => (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
          }}
          transition={{
            type: "spring",
            damping: 30,
            stiffness: 120,
          }}
          layout
          className="flex flex-col justify-between h-52 p-5 bg-[#FBFDFE] dark:bg-[#202535] border border-[#D6E2F5] dark:border-[#535868] rounded-xl "
          key={item.id}
        >
          <div className="flex gap-2">
            <div className="max-w-[60px] max-h-[60px]">
              <img
                src={getImageUrl(item.logo)}
                alt={item.name}
                className="max-w-fit max-h-fit"
              />
            </div>
            <div className="flex flex-col gap-3 px-2">
              <h4 className="text-[#091540] dark:text-[#FBFDFE] text-xl font-bold leading-[120%] tracking-[-0.2px]">
                {item.name}
              </h4>
              <p className="text-[#535868] dark:text-[#C6C6C6] leading-[140%] tracking-[-0.5px]">
                {item.description}
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <button
              className="border border-[#c6c6c6] dark:border-[#535868] focus:outline-2 focus:outline-[#F25C54] outline-offset-1 text-[#091540] dark:hover:text-[#091540] hover:text-[#FBFDFE] dark:text-[#FBFDFE] hover:bg-[#C7231A] dark:hover:bg-[#F25C54] rounded-4xl py-2 px-4 cursor-pointer"
              onClick={() => handleRemove(item.id)}
            >
              Remove
            </button>
            <div>
              <button
                onClick={() => toggleActive(item.id, item.isActive)}
                className={`${
                  item.isActive
                    ? "bg-[#C7231A] hover:bg-[#DE4840] dark:bg-[#F25C54] hover:dark:bg-[#DE4840]"
                    : "bg-[#C6C6C6] dark:bg-[#535868] "
                } rounded-4xl py-3 px-6 relative hover:cursor-pointer focus:outline-2 focus:outline-[#F25C54] outline-offset-1`}
              >
                <motion.div
                  layout
                  transition={{
                    type: "spring",
                    visualDuration: 0.3,
                    bounce: 0.4,
                  }}
                  className={`${
                    item.isActive ? "right-1" : "left-1"
                  } bg-[#FBFDFE] rounded-full p-2 absolute  top-1/2 transform -translate-y-1/2`}
                />
              </button>
            </div>
          </div>
        </motion.div>
      ))}
    </AnimatePresence>
  );
}

export default BrowserExtensions;
