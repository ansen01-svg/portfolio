export default function HeroSection() {
  return (
    <div
      id="home"
      className="w-full h-[calc(100vh-61px)] py-48 flex items-start justify-center md:py-0 md:items-center"
      style={{
        background: "rgb(67, 65, 94)",
        background:
          "radial-gradient(circle, rgba(54,53,75,1) 0%, rgba(26,25,29,1) 35%)",
      }}
    >
      <div className="uppercase tracking-widest flex flex-col items-center justify-center gap-2">
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
