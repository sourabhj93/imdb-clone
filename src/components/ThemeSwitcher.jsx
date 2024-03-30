"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md"

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted) return null

  return (
    <div className="hover:text-amber-500 cursor-pointer">
      {theme === 'dark' ? <button onClick={() => setTheme('light')}><MdLightMode/></button>:
      <button onClick={() => setTheme('dark')}><MdDarkMode/></button>}
    </div>
  )
};