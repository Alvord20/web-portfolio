// /app/HomeDesktop.js

"use client";

import Image from "next/image";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import Particles from "./components/Particles/Particles";
// import SplashCursor from "./components/SplashCursor/SplashCursor";
import GradientText from "./components/GradientText/GradientText";
import ScrollVelocity from "./components/ScrollVelocity/ScrollVelocity";
// import Timeline from "./components/Timeline/timeline";
// import Dock from "./components/Dock/Dock";
import {
  VscHome,
  VscArchive,
  VscAccount,
  VscSettingsGear,
} from "react-icons/vsc";
import DockWrapper from "./components/DockWrapper/DockWrapper";
import ScrollFloat from "./components/ScrollFloat/ScrollFloat";
import { HoverBorderGradient } from "./components/ui/hover-border-gradient";
import { BackgroundGradient } from "./components/ui/background-gradient";
import { CardContainer, CardBody, CardItem } from "./components/ui/3d-card";
// import { CometCard } from "./components/ui/comet-card";
import TiltedCard from "./components/TiltedCard/TiltedCard";
import CurvedLoop from "./components/CurvedLoop/CurvedLoop";
// import Folder from "./components/Folder/Folder";
import { AnimatedTooltip } from "./components/ui/animated-tooltip";
import MobilePopup from "./components/MobilePopup";
import LogoLoop from "./components/LogoLoop/LogoLoop";
import {
  SiAutocad,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

const imageLogos = [
  {
    src: "/images/experience/AutoCad_new_logo.svg",
    alt: "AutoCAD",
  },
  {
    src: "/images/experience/SAP_logo-removebg-preview.png",
    alt: "SAP2000",
  },
  {
    src: "https://tecnologia.uniandes.edu.co/wp-content/uploads/etabs-logo.png",
    alt: "ETABS",
  },
  {
    src: "https://static.cdnlogo.com/logos/m/39/microsoft-office-2013.svg",
    alt: "Office",
  },
  {
    src: "https://static.cdnlogo.com/logos/s/89/sketchup-2020.svg",
    alt: "SketchUp",
  },
];

export default function HomeDesktop() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#222831]">
      {/* Di Desktop, MobilePopup dihilangkan atau tidak perlu di-render */}
      {/* <MobilePopup /> */}

      {/* Particles (Desktop Only) */}
      <div className="absolute top-0 right-0 left-0 bottom-0 w-full h-full pointer-events-none">
        <Particles
          particleColors={["#black", "#00ADB5"]}
          particleCount={100}
          particleSpread={10}
          speed={0.5}
          particleBaseSize={50}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>
      <div className="container mx-auto min-h-screen px-3">
        {/* Layout 2 Kolom untuk Desktop */}
        <div className="grid grid-cols-12">
          {/* Kolom Kiri: Lanyard (Desktop Only) */}
          <div className="col-span-6">
            <Lanyard position={[-5, -3, 12]} gravity={[0, -40, 0]} />
          </div>

          {/* Kolom Kanan: Teks */}
          <div className="col-span-6 ">
            <div className="flex items-center h-full">
              <div className="flex flex-col gap-6">
                <AnimatedContent
                  distance={150}
                  direction="horizontal"
                  reverse={false}
                  duration={1.2}
                  ease="bounce.out"
                  initialOpacity={0.2}
                  animateOpacity
                  scale={1.1}
                  threshold={0.2}
                  delay={0.3}
                >
                  <div>
                    <div className="flex items-center gap-2">
                      <h1 className="text-2xl text-white font-bold">
                        Starting
                      </h1>
                      <RotatingText
                        texts={[
                          "a New Journey",
                          "a New Chapter",
                          "a New Dreams",
                          "ヴィト",
                        ]}
                        mainClassName="px-2 sm:px-2 md:px-3 bg-[#00ADB5] text-black overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg text-2xl font-bold inline-flex transition-all"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                        transition={{
                          type: "spring",
                          damping: 30,
                          stiffness: 400,
                        }}
                        rotationInterval={2000}
                      />
                    </div>
                  </div>
                </AnimatedContent>
                <div className="flex flex-col ">
                  <SplitText
                    text="I'm Ahmad Vito"
                    className="text-6xl font-semibold text-start text-white"
                    delay={75}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-50px"
                    textAlign="start"
                  />
                  <SplitText
                    text="Civil Engineering"
                    className="text-3xl font-semibold text-start text-[#00ADB5]"
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-50px"
                    textAlign="start"
                  />
                </div>
                <BlurText
                  text="Saya Ahmad Vito, lulusan Politeknik Negeri Samarinda Jurusan Teknik Sipil, dengan ketertarikan dalam bidang konstruksi bangunan, khususnya pada perencanaan, pengawasan proyek, pembuatan gambar teknik, serta analisis struktur bangunan. Memiliki pemahaman dasar dan kemampuan menggunakan perangkat lunak teknik sipil seperti AutoCAD, Tekla Structures, ETABS, SAP2000, dan SketchUp sebagai penunjang dalam proses perancangan dan analisis struktur bangunan."
                  delay={100}
                  animateBy="words"
                  direction="top"
                  className="text-l mb-3 text-white"
                />
                <div className="flex items-center">
                  <a
                    href="https://drive.google.com/file/d/1JfoqLdlVcYsmRoi9SuXy44lVuUbwweVL/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <HoverBorderGradient className="text-sm font-bold tracking-wide">
                      DOWNLOAD CV
                    </HoverBorderGradient>

                    <div className="">
                      <DockWrapper />
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-20 bg-gradient-to-b from-[#222831] to-[black]"></div>

      {/* section 2 - Experience & Project */}
      <section className="min-h-screen bg-[black] py-20 px-5">
        <div className="font-bold text-[white] text-center">
          <ScrollFloat
            animationDuration={2}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.1}
          >
            Experience & Project
          </ScrollFloat>
        </div>

        {/* Card Layout (Desktop: 3 Card per baris jika cukup) */}
        <div className="flex justify-center gap-6 flex-wrap">
          {/* Kartu 1 */}
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-[#222831] dark:bg-zinc-900 h-full">
            {/* ... konten kartu 1 ... */}
            <img
              src={`/images/experience/3D KLINIK.jpg`}
              alt="3D Klinik"
              height="800"
              width="400"
              className="object-contain"
            />
            <ul className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
              Tugas Besar Perencanaan Bangunan Klinik
            </ul>
            <ul className="list-disc text-sm text-white dark:text-neutral-400">
              <li>
                Berperan sebagai drafter dan pembuat model 3D dalam proyek
                perencanaan bangunan klinik.
              </li>
              <li>
                Membuat gambar kerja 2D menggunakan AutoCAD dan visualisasi 3D
                dengan SketchUp.
              </li>
            </ul>
          </BackgroundGradient>

          {/* Kartu 2 */}
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-[#31363F] dark:bg-zinc-900 h-full">
            {/* ... konten kartu 2 ... */}
            <img
              src={`/images/experience/Kosan.jpg`}
              alt="kosan"
              height="400"
              width="400"
              className="object-contain"
            />
            <ul className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
              Project Based Learning (PBL) - Perancangan Bangunan Kos-Kosan
            </ul>
            <ul className="list-disc text-sm text-white dark:text-neutral-400">
              <li>
                Bertanggung jawab sebagai drafter dan pembuat model 3D dalam
                proyek perencanaan bangunan Kos-Kosan.
              </li>
              <li>
                Menggambar denah, tampak, dan potongan menggunakan AutoCAD, dan
                membuat model 3D menggunakan SketchUp.
              </li>
            </ul>
            <button
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1hee5NeOd2A_KRUzDASlCmE6DNSURy74g/view?usp=sharing",
                  "_blank"
                )
              }
              className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800"
            >
              <span>Render</span>
              <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
                Open
              </span>
            </button>
          </BackgroundGradient>

          {/* Kartu 3 */}
          <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-[#31363F] dark:bg-zinc-900 h-full">
            {/* ... konten kartu 3 ... */}
            <img
              src={`/images/experience/PKL.jpg`}
              alt="PKL"
              height="400"
              width="400"
              className="object-contain"
            />
            <ul className="text-base sm:text-xl text-white mt-4 mb-2 dark:text-neutral-200">
              Praktik Kerja Lapangan (PKL) - Pembangunan Gedung Sekolah
            </ul>
            <ul className="list-disc text-sm text-white dark:text-neutral-400">
              <li>
                Membantu mengawasi pekerjaan konstruksi dilapangan agar sesuai
                dengan gambar dan rencana proyek.
              </li>
              <li>
                Mencatat dan membantu menghitung kebutuhan material di lapangan.
              </li>
              <li>Membantu memperbaiki dan menyesuaikan gambar kerja.</li>
            </ul>
          </BackgroundGradient>
        </div>

        {/* Card 3D Project */}
        <div className="flex wrap justify-center gap-10">
          {/* Card 1 */}
          <CardContainer className="inter-var">
            {/* ... konten Card 1 ... */}
            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Project Blender
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Membuat 3D menggunakan blender pada tahun 2023
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src="/images/experience/P1.png"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="https://www.instagram.com/vito_qq/"
                  target="__blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  @Vito_qq
                </CardItem>
                <CardItem
                  translateZ={20}
                  target="__blank"
                  as="button"
                  onClick={() =>
                    window.open(
                      "https://drive.google.com/file/d/1gJNp_e4c9RHgp9H3j6ktWpgNQ8OrVk6v/view?usp=sharing",
                      "_blank"
                    )
                  }
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Video
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>

          {/* Card 2 */}
          <CardContainer className="inter-var">
            {/* ... konten Card 2 ... */}
            <CardBody
              className="bg-gray-50 relative group/card dark:hover:shadow-2xl 
              dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] 
              border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border"
            >
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Project Web
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
              >
                Membuat website untuk teman-teman kelas.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src="/images/experience/P2.png"
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-20">
                <CardItem
                  translateZ={20}
                  as="a"
                  href="https://www.instagram.com/vito_qq/"
                  target="_blank"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  @Vito_qq
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  onClick={() =>
                    window.open("https://parkul.netlify.app/", "_blank")
                  }
                  className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Web
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>

        {/* Certificate */}
        <div className="font-bold text-[white] text-center">
          <ScrollFloat
            animationDuration={2}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.05}
          >
            Certificate
          </ScrollFloat>
        </div>

        {/* Certificate Cards */}
        <div className="flex items-center justify-center gap-8">
          <a
            href="https://drive.google.com/file/d/1LJyuDNOGXQrBceNzbN3k-r1M6VBC304n/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiltedCard
              imageSrc="/images/experience/skk j6.png"
              altText="SK Jenjang 6"
              captionText="SK Jenjang 6"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="text-white translate-y-1/2 tilted-card-demo-text rounded-full bg-[rgba(80,80,80,0.6)] backdrop-blur-md text-sm shadow-sm">
                  SK Manajer Lapangan Pelaksanaan Pekerjaan Gedung
                </p>
              }
            />
          </a>
          <a
            href="/images/experience/1.jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiltedCard
              imageSrc="/images/experience/1.jpg"
              altText="PKL PT.RAKA UTAMA"
              captionText="PKL PT.RAKA UTAMA"
              containerHeight="300px"
              containerWidth="300px"
              imageHeight="300px"
              imageWidth="300px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
              overlayContent={
                <p className="text-white translate-y-1/2 tilted-card-demo-text rounded-full bg-[rgba(80,80,80,0.6)] backdrop-blur-md text-sm shadow-sm">
                  Praktik Kerja Lapangan (PKL)
                </p>
              }
            />
          </a>
        </div>

        {/* Skill Loop */}
        <div>
          <CurvedLoop
            marqueeText="Skill"
            speed={1}
            curveAmount={300}
            interactive={false}
          />
        </div>

        {/* Logo Loop */}
        <div
          style={{ height: "200px", position: "relative", overflow: "hidden" }}
        >
          <LogoLoop
            logos={imageLogos}
            speed={120}
            direction="left"
            logoHeight={48}
            gap={40}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#000"
            ariaLabel="Technology partners"
            className="child-img:h-12 child-img:w-auto child-img:object-contain"
          />
        </div>
      </section>
    </div>
  );
}
