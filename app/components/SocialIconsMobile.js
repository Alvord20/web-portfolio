// /app/components/SocialIconsMobile.js

"use client";

// BARIS INI WAJIB DITAMBAHKAN KARENA KITA MENGGUNAKAN React.cloneElement
import React from "react";

// Import ikon yang Anda gunakan dari DockWrapper
import { AiFillInstagram } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { FaLinkedin, FaDiscord } from "react-icons/fa";

// Definisi item sosial media Anda (mengambil data dari DockWrapper)
const socialItems = [
  {
    // Menggunakan ikon tanpa prop color di sini
    icon: <AiFillInstagram size={24} />,
    label: "Instagram",
    onClick: () => window.open("https://www.instagram.com/vito_qq/", "_blank"),
  },
  {
    icon: <SiGmail size={24} />,
    label: "Email",
    onClick: () =>
      window.open(
        "https://mail.google.com/mail/?view=cm&fs=1&to=20.ahmadvito@gmail.com&su=Halo%20Vito&body=Halo,%20saya%20ingin%20menghubungi%20Anda!",
        "_blank"
      ),
  },
  {
    icon: <FaLinkedin size={24} />,
    label: "Linkedin",
    onClick: () => window.open("https://www.linkedin.com", "_blank"),
  },
  {
    icon: <FaDiscord size={24} />,
    label: "Discord",
    onClick: () => window.open("https://discord.gg/Zs4NaPBUTv", "_blank"),
  },
];

export default function SocialIconsMobile() {
  return (
    <div className="flex items-center justify-center gap-6 mt-2">
      {socialItems.map((item) => (
        <a
          key={item.label}
          href="#"
          onClick={(e) => {
            e.preventDefault();
            item.onClick();
          }}
          className="text-[#00ADB5] hover:text-white transition-colors"
          aria-label={item.label}
        >
          {/* cloning untuk menghapus properti color="black" yang mungkin ada, 
              agar warna ikon mengikuti warna Tailwind (text-[#00ADB5]) */}
          {React.cloneElement(item.icon, { color: undefined })}
        </a>
      ))}
    </div>
  );
}
