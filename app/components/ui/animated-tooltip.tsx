"use client";

import React, { useState, useRef } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "motion/react";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const springConfig = { stiffness: 100, damping: 15 };
  const x = useMotionValue(0);
  const animationFrameRef = useRef<number | null>(null);

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  // 🧠 ini hanya event handler, tidak boleh ada return JSX
  const handleMouseMove = (event: any) => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    const target = event.currentTarget;
    animationFrameRef.current = requestAnimationFrame(() => {
      const halfWidth = target.offsetWidth / 2;
      x.set(event.nativeEvent.offsetX - halfWidth);
    });
  };

  // 🧩 ini return utama komponen
  return (
    <div className="flex items-center justify-center gap-4">
      {items.map((item) => (
        <div
          className="group relative"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: "spring", stiffness: 260, damping: 12 },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute top-10 z-50 flex -translate-x-[56%] flex-col items-center justify-center shadow-xl backdrop-blur-md"
              >
                <div className="rounded-md bg-black/70 px-4 py-2 text-xs text-white shadow-xl">
                  <div className="text-base font-bold">{item.name}</div>
                  <div className="text-xs text-gray-300">
                    {item.designation}
                  </div>
                </div>

                {/* Garis kecil penghubung */}
                <div className="h-3 w-[2px] bg-gradient-to-b from-black to-transparent mt-[1px]" />
              </motion.div>
            )}
          </AnimatePresence>

          <img
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={item.image}
            alt={item.name}
            className="relative !m-0 h-14 w-14 rounded-full border-2 border-white object-cover object-top !p-0 transition duration-500 group-hover:z-30 group-hover:scale-105"
          />
        </div>
      ))}
    </div>
  );
};
