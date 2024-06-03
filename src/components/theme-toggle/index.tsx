"use client";

import { useTheme } from "next-themes";
import { BsMoonStars } from "react-icons/bs";
import { TbSunElectricity } from "react-icons/tb";

const ThemeToggle = () => {
  const { setTheme, theme } = useTheme();
  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="flex justify-center items-center h-full pointer-events-auto w-full"
    >
      {theme === "light" ? (
        <TbSunElectricity className="text-[24px]" />
      ) : (
        <BsMoonStars className="text-[24px]" />
      )}
    </button>
  );
};

export default ThemeToggle;
