// /app/HomeMobile.js

"use client";

import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import ScrollFloat from "./components/ScrollFloat/ScrollFloat";
import { HoverBorderGradient } from "./components/ui/hover-border-gradient";
import { BackgroundGradient } from "./components/ui/background-gradient";
import { CardContainer, CardBody, CardItem } from "./components/ui/3d-card";
import TiltedCard from "./components/TiltedCard/TiltedCard";
import CurvedLoop from "./components/CurvedLoop/CurvedLoop";
import LogoLoop from "./components/LogoLoop/LogoLoop";
import Lanyard from "./components/Lanyard/Lanyard";
import MobilePopup from "./components/MobilePopup"; // Pertahankan jika Anda ingin popup untuk mobile, tapi biasanya dihilangkan.
import SocialIconsMobile from "./components/SocialIconsMobile";

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

export default function HomeMobile() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#222831]">
      <div className="container mx-auto min-h-screen px-3">
        <div className="grid grid-cols-12">
          <div className="col-span-12 **h-32 w-full relative mb-0">
            <Lanyard position={[-5, -3, 15]} gravity={[0, -40, 0]} />
          </div>

          <div className="col-span-12">
            <div className="flex items-center justify-center **pt-0** pb-0">
              <div className="flex flex-col gap-4 text-center">
                <AnimatedContent
                  distance={100}
                  direction="vertical"
                  duration={1.2}
                  ease="bounce.out"
                  initialOpacity={0.2}
                  animateOpacity
                  scale={1.1}
                  threshold={0.2}
                  delay={0.3}
                >
                  <div>
                    <div className="flex items-center justify-center gap-2">
                      <h1 className="text-xl text-white font-bold">
                        {" "}
                        {/* Teks lebih kecil */}
                        Starting
                      </h1>
                      <RotatingText
                        texts={[
                          "a New Journey",
                          "a New Chapter",
                          "a New Dreams",
                          "ヴィト",
                        ]}
                        mainClassName="px-1 bg-[#00ADB5] text-black overflow-hidden py-0.5 justify-center rounded-lg text-xl font-bold inline-flex transition-all" // Teks lebih kecil
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5"
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
                <div className="flex flex-col items-center">
                  <SplitText
                    text="I'm Ahmad Vito"
                    className="text-4xl font-semibold text-center text-white" // Ukuran Teks Lebih Kecil
                    delay={75}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 30 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-50px"
                    textAlign="center"
                  />
                  <SplitText
                    text="Civil Engineering"
                    className="text-2xl font-semibold text-center text-[#00ADB5]" // Ukuran Teks Lebih Kecil
                    delay={100}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 30 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.1}
                    rootMargin="-50px"
                    textAlign="center"
                  />
                </div>
                <BlurText
                  text="Saya Ahmad Vito, lulusan Politeknik Negeri Samarinda Jurusan Teknik Sipil, dengan ketertarikan dalam bidang konstruksi bangunan, khususnya pada perencanaan, pengawasan proyek, pembuatan gambar teknik, serta analisis struktur bangunan. Memiliki pemahaman dasar dan kemampuan menggunakan perangkat lunak teknik sipil seperti AutoCAD, Tekla Structures, ETABS, SAP2000, dan SketchUp sebagai penunjang dalam proses perancangan dan analisis struktur bangunan."
                  delay={100}
                  animateBy="words"
                  direction="top"
                  className="text-sm px-2 mb-3 text-white w-full" // Teks dan padding lebih kecil
                />
                <div className=" flex flex-col items-center justify-center gap-4">
                  <a
                    href="https://drive.google.com/file/d/1JfoqLdlVcYsmRoi9SuXy44lVuUbwweVL/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <HoverBorderGradient className="text-xs font-bold tracking-wide">
                      {" "}
                      {/* Ukuran Font Lebih Kecil */}
                      DOWNLOAD CV
                    </HoverBorderGradient>
                  </a>
                  <SocialIconsMobile />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-10 bg-gradient-to-b from-[#222831] to-[black]"></div>

      {/* section 2 - Experience & Project */}
      <section className="min-h-screen bg-[black] py-10 px-3">
        {" "}
        {/* Padding lebih kecil */}
        <div className="font-bold text-[white] text-center mb-6">
          <ScrollFloat
            animationDuration={1.5}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.1}
          >
            Experience & Project
          </ScrollFloat>
        </div>
        {/* Card Layout (Mobile: 1 Card per baris) */}
        <div className="flex justify-center gap-6 flex-wrap">
          {/* Kartu 1 (Full Width) */}
          <BackgroundGradient className="rounded-[22px] w-full max-w-sm p-4 bg-[#222831] dark:bg-zinc-900 h-full">
            <img
              src={`/images/experience/3D KLINIK.jpg`}
              alt="3D Klinik"
              height="800"
              width="400"
              className="object-contain w-full"
            />
            <ul className="text-base text-white mt-4 mb-2 dark:text-neutral-200">
              Tugas Besar Perencanaan Bangunan Klinik
            </ul>
            <ul className="list-disc text-xs text-white dark:text-neutral-400">
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

          {/* Kartu 2 (Full Width) */}
          <BackgroundGradient className="rounded-[22px] w-full max-w-sm p-4 bg-[#31363F] dark:bg-zinc-900 h-full">
            <img
              src={`/images/experience/Kosan.jpg`}
              alt="kosan"
              height="400"
              width="400"
              className="object-contain w-full"
            />
            <ul className="text-base text-white mt-4 mb-2 dark:text-neutral-200">
              Project Based Learning (PBL) - Perancangan Bangunan Kos-Kosan
            </ul>
            <ul className="list-disc text-xs text-white dark:text-neutral-400">
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

          {/* Kartu 3 (Full Width) */}
          <BackgroundGradient className="rounded-[22px] w-full max-w-sm p-4 bg-[#31363F] dark:bg-zinc-900 h-full">
            <img
              src={`/images/experience/PKL.jpg`}
              alt="PKL"
              height="400"
              width="400"
              className="object-contain w-full"
            />
            <ul className="text-base text-white mt-4 mb-2 dark:text-neutral-200">
              Praktik Kerja Lapangan (PKL) - Pembangunan Gedung Sekolah
            </ul>
            <ul className="list-disc text-xs text-white dark:text-neutral-400">
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
        <div className="flex flex-col items-center gap-4 mt-6">
          {" "}
          {/* flex-col untuk 1 kolom di HP */}
          {/* Card 1 (Full Width) */}
          <CardContainer className="inter-var w-full max-w-sm">
            {" "}
            {/* Tambahkan max-w-sm untuk membatasi lebar di layar besar (jika ada) */}
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full h-auto rounded-xl p-4 border">
              {" "}
              {/* Menggunakan p-4, w-full */}
              <CardItem
                translateZ="50"
                className="text-lg font-bold text-neutral-600 dark:text-white"
              >
                {" "}
                {/* Teks lebih kecil: text-lg */}
                Project Blender
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-xs max-w-sm mt-2 dark:text-neutral-300"
              >
                {" "}
                {/* Teks lebih kecil: text-xs */}
                Membuat 3D menggunakan blender pada tahun 2023
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src="/images/experience/P1.png"
                  height="400" // Mengurangi height/width untuk mobile
                  width="400"
                  className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl" // Mengurangi tinggi gambar
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-10">
                {" "}
                {/* Mengurangi margin-top */}
                <CardItem
                  translateZ={20}
                  as="a"
                  href="https://www.instagram.com/vito_qq/"
                  target="__blank"
                  className="px-3 py-1 rounded-xl text-xs font-normal dark:text-white"
                >
                  {" "}
                  {/* Teks/Padding lebih kecil */}
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
                  className="px-3 py-1 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Video
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
          {/* Card 2 (Full Width) */}
          <CardContainer className="inter-var w-full">
            <CardBody
              className="bg-gray-50 relative group/card dark:hover:shadow-2xl 
              dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] 
              border-black/[0.1] w-full h-auto rounded-xl p-4 border" // Menggunakan p-4, w-full
            >
              <CardItem
                translateZ="50"
                className="text-lg font-bold text-neutral-600 dark:text-white"
              >
                {" "}
                {/* Teks lebih kecil: text-lg */}
                Project Web
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-xs max-w-sm mt-2 dark:text-neutral-300"
              >
                {" "}
                {/* Teks lebih kecil: text-xs */}
                Membuat website untuk teman-teman kelas.
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <img
                  src="/images/experience/P2.png"
                  height="400" // Mengurangi height/width untuk mobile
                  width="400"
                  className="h-48 w-full object-cover rounded-xl group-hover/card:shadow-xl" // Mengurangi tinggi gambar
                  alt="thumbnail"
                />
              </CardItem>
              <div className="flex justify-between items-center mt-10">
                {" "}
                {/* Mengurangi margin-top */}
                <CardItem
                  translateZ={20}
                  as="a"
                  href="https://www.instagram.com/vito_qq/"
                  target="_blank"
                  className="px-3 py-1 rounded-xl text-xs font-normal dark:text-white"
                >
                  @Vito_qq
                </CardItem>
                <CardItem
                  translateZ={20}
                  as="button"
                  onClick={() =>
                    window.open("https://parkul.netlify.app/", "_blank")
                  }
                  className="px-3 py-1 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Web
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </div>
        {/* Certificate */}
        <div className="font-bold text-[white] text-center mt-10 mb-6">
          <ScrollFloat
            animationDuration={1.5}
            ease="back.inOut(2)"
            scrollStart="center bottom+=50%"
            scrollEnd="bottom bottom-=40%"
            stagger={0.05}
          >
            Certificate
          </ScrollFloat>
        </div>
        {/* Certificate Cards (Flex-col untuk 1 kolom di HP) */}
        <div className="flex flex-col items-center justify-center gap-6">
          <a
            href="https://drive.google.com/file/d/1LJyuDNOGXQrBceNzbN3k-r1M6VBC304n/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TiltedCard
              imageSrc="/images/experience/skk j6.png"
              altText="SK Jenjang 6"
              captionText="SK Jenjang 6"
              containerHeight="250px" // Ukuran lebih kecil di mobile
              containerWidth="250px"
              imageHeight="250px"
              imageWidth="250px"
              rotateAmplitude={8} // Rotasi lebih kecil
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
              overlayContent={
                <p className="text-white translate-y-1/2 tilted-card-demo-text rounded-full bg-[rgba(80,80,80,0.6)] backdrop-blur-md text-xs shadow-sm">
                  SK Manajer Lapangan
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
              containerHeight="250px" // Ukuran lebih kecil di mobile
              containerWidth="250px"
              imageHeight="250px"
              imageWidth="250px"
              rotateAmplitude={8} // Rotasi lebih kecil
              scaleOnHover={1.1}
              showMobileWarning={false}
              showTooltip={false}
              displayOverlayContent={true}
              overlayContent={
                <p className="text-white translate-y-1/2 tilted-card-demo-text rounded-full bg-[rgba(80,80,80,0.6)] backdrop-blur-md text-xs shadow-sm">
                  Praktik Kerja Lapangan
                </p>
              }
            />
          </a>
        </div>
        {/* Skill Loop */}
        <div className="mt-10">
          <CurvedLoop
            marqueeText="Skill"
            speed={0.8} // Kecepatan lebih lambat di mobile
            curveAmount={150} // Kurva lebih landai
            interactive={false}
          />
        </div>
        {/* Logo Loop */}
        <div
          style={{ height: "150px", position: "relative", overflow: "hidden" }}
        >
          <LogoLoop
            logos={imageLogos}
            speed={80} // Kecepatan lebih lambat di mobile
            direction="left"
            logoHeight={32} // Logo lebih kecil
            gap={20} // Jarak lebih rapat
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#000"
            ariaLabel="Technology partners"
            className="child-img:h-8 child-img:w-auto child-img:object-contain" // Ukuran gambar logo
          />
        </div>
      </section>
    </div>
  );
}
