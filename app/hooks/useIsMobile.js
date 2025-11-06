// /app/hooks/useIsMobile.js

"use client";

import { useState, useEffect } from "react";

// Default breakpoint for Tailwind's 'md' is 768px
const useIsMobile = (breakpoint = 768) => {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    // Pastikan kode berjalan di sisi klien
    if (typeof window === "undefined") return;

    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Panggil sekali saat mount dan tambahkan listener resize
    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    // Cleanup function
    return () => {
      window.removeEventListener("resize", checkIsMobile);
    };
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;
