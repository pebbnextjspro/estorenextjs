"use client";

import clientaxios from "@/components/axiosinstance";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [darkmode, setdarkmode] = useState(false);
    const [dropdownactive , setdropdownactive] = useState(false);
    const [loading , setloading] = useState(false)

    

  

  return (
    <ThemeContext.Provider value={{ darkmode, setdarkmode,dropdownactive , setdropdownactive,loading , setloading  }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}