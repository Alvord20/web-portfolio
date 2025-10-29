"use client";

import { useEffect, useState } from "react";

export default function MobilePopup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setShowPopup(true);
    }
  }, []);

  const handleClose = () => {
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 backdrop-blur-md">
      <div className="relative bg-white/10 dark:bg-neutral-800/60 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl px-6 py-8 w-[90%] max-w-xs text-center animate-popupEnter">
        {/* Icon */}
        <div className="text-5xl mb-4 animate-bounce-slow">💻</div>

        {/* Title */}
        <h2 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
          Gunakan PC/Laptop untuk tampilan terbaik
        </h2>

        {/* Text */}
        <p className="text-sm text-gray-200 mb-6">
          Website ini dirancang untuk di layar besar.
        </p>

        {/* Button */}
        <button
          onClick={handleClose}
          className="px-6 py-2.5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white font-semibold rounded-xl shadow-lg hover:from-indigo-500 hover:to-blue-500 hover:scale-105 transition-all duration-300"
        >
          Oke, Mwhehehe
        </button>

        {/* Decorative Glow */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-32 h-32 bg-blue-500/30 blur-3xl rounded-full pointer-events-none" />
        <div className="absolute -bottom-10 right-1/2 translate-x-1/2 w-28 h-28 bg-purple-500/20 blur-2xl rounded-full pointer-events-none" />
      </div>

      {/* Custom Animations */}
      <style jsx>{`
        @keyframes popupEnter {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes bounceSlow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-popupEnter {
          animation: popupEnter 0.4s ease-out;
        }
        .animate-bounce-slow {
          animation: bounceSlow 1.8s infinite;
        }
      `}</style>
    </div>
  );
}
