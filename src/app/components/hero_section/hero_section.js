import Image from "next/image";
import src from "../../assets/triangles-bg.jpg";

export default function HeroSection() {
  return (
    <div
      id="home"
      className="w-full h-[calc(100vh-61px)] flex items-start justify-start relative md:items-center"
    >
      <div className="w-[58vw] h-[25vh] md:w-[50vw] md:h-[45vh] lg:h-[56vh] mt-[150px] md:mt-0 ml-6 relative">
        <Image
          src={src}
          alt="project-image"
          fill
          sizes="50vw"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="w-full h-full py-48 absolute top-0 left-0 uppercase tracking-widest flex flex-col items-center justify-start gap-2">
        <h1 className="text-[46px] font-bold text-center md:text-[10vw]">
          Ansen Bey
        </h1>
        <h2 className="text-[20px] font-semibold text-center md:text-[22px]">
          Fullstack developer
        </h2>
      </div>
    </div>
  );
}
