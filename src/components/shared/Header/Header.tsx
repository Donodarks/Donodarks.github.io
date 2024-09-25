

/*
export const Header = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            
          </li>
          <li>
            
          </li>
        </ul>
      </nav>
    </header>)
}
    */

"use client";

import { useLayoutEffect, useState } from "react";
import { Button } from "../../shared/Button";
import { Moon, Sun, Code, ShoppingCart, HousePlus } from "lucide-react";
import pkg from '../../../../package.json';
import Link from 'next/link';

export const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useLayoutEffect(() => {
    const el = document.documentElement;

    if (el.classList.contains("dark")) {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, []);

  const toggleDark = () => {
    const el = document.documentElement;
    el.classList.toggle("dark");
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div
      className={
        "px-4 py-2 flex items-center h-14 z-50 bg-card border-b border-border"
      }
    >
      <div className={"mr-auto flex items-center gap-1"}>
        <Button variant={"default"}
          className={"mr-auto flex items-center gap-1.5"}>
            <Link href="/" className="flex items-center gap-1.5">
        <span> <HousePlus className={"size-4"} /></span>
        <span>Home</span>
        </Link>
        </Button>
        <Button variant={"ghost"}
          className={"mr-auto flex items-center gap-1.5"}>
            <Link href="/store" className="flex items-center gap-1.5">
            <span> <ShoppingCart className={"size-4"} /></span>
            <span>Store</span>
            </Link>
        </Button>
      </div>
      <div className={"ml-auto flex items-center gap-1"}>
        <Button
          onClick={() => {
            window.open(
              pkg.homepage,
              "_blank",
              "noopener noreferrer"
            );
          }}
          variant={"link"}
          className={"ml-auto flex items-center gap-1.5"}
        >
          <span>
            <Code className={"size-4"} />
          </span>
          <span>Code</span>
        </Button>
        <Button
          onClick={toggleDark}
          variant={"ghost"}
          className={"ml-auto flex items-center gap-1.5"}
        >
          <span>
            {isDarkMode ? (
              <Sun className={"size-4"} />
            ) : (
              <Moon className={"size-4"} />
            )}
          </span>
          <span>{isDarkMode ? "Light" : "Dark"} Mode</span>
        </Button>
      </div>
    </div>
  );
};