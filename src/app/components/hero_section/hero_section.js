import wallpaper from "../../assets/wallpaper.png";
import Image from "next/image";

export default function HeroSection() {
  return (
    <div
      id="home"
      className="w-full h-[calc(100vh-61px)] flex items-center justify-center"
    >
      <div className="uppercase tracking-widest flex flex-col items-center justify-center gap-2">
        <h1 className="text-[46px] font-bold text-center md:text-[10vw]">
          Ansen Bey
        </h1>
        <h2 className="text-[20px] font-semibold text-center md:text-[22px]">
          Web developer
        </h2>
      </div>
    </div>
  );
}
