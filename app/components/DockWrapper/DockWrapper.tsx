"use client";

import Dock from "@/app/components/Dock/Dock";
import { AiFillInstagram } from "react-icons/ai";
import { SiGmail } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import {
  VscHome,
  VscArchive,
  VscAccount,
  VscSettingsGear,
} from "react-icons/vsc";

export default function DockWrapper() {
  const items = [
    {
      icon: <AiFillInstagram size={18} color="#black" />,
      label: "Instagram",
      onClick: () =>
        window.open("https://www.instagram.com/vito_qq/", "_blank"),
    },
    {
      icon: <SiGmail size={18} color="black" />,
      label: "Email",
      onClick: () =>
        window.open(
          "https://mail.google.com/mail/?view=cm&fs=1&to=20.ahmadvito@gmail.com&su=Halo%20Vito&body=Halo,%20saya%20ingin%20menghubungi%20Anda!",
          "_blank"
        ),
    },
    {
      icon: <FaLinkedin size={18} color="black" />,
      label: "Linkedin",
      onClick: () => window.open("https://www.linkedin.com", "_blank"),
    },
    {
      icon: <FaDiscord size={18} color="black" />,
      label: "Discord",
      onClick: () => window.open("https://discord.gg/Zs4NaPBUTv", "_blank"),
    },
  ];

  return (
    <Dock items={items} panelHeight={68} baseItemSize={50} magnification={70} />
  );
}
