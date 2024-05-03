"use client";

import React from 'react';
import { useTheme } from "next-themes";
import { Button } from "@nextui-org/button";
import { Sun , Moon } from "lucide-react";

function FloatingThemeToggler() {

  const { theme, setTheme } = useTheme();

  return (
    <Button 
      isIconOnly 
      color="primary"
      size="lg"
      radius="full"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="fixed bottom-5 right-5 z-10 bg-zinc-900 dark:bg-zinc-950 "
      aria-label="switch-theme"
    >
      <Sun className='rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0' />
      <Moon className='absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100' />
    </Button>
  );
}

export default FloatingThemeToggler