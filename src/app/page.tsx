"use client";
import Image from "next/image";
import { useEffect } from "react";

// Check the user's preference, and load the user's preference
// If the user changes the theme, add the theme to local storage
//

export default function Home() {
  useEffect(() => {
    const preference = window.matchMedia(
      "(prefers-color-scheme: light)"
    ).matches;
    console.log(preference);
  }, []);
  return <main className=""></main>;
}
