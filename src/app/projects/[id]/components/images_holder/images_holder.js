import Image from "next/image";

export default function ImagesHolder({ images }) {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-7">
      {images.map((img, index) => {
        return (
          <div
            className="w-full max-h-[530px] min-h-[180px] relative md:h-[400px] lg:h-[530px]"
            key={index}
          >
            <Image
              src={img}
              alt="project-image"
              fill
              priority
              sizes="(max-width: 640px) 429px, (min-width: 1024px) 1219px"
              style={{ objectFit: "cover" }}
            />
          </div>
        );
      })}
    </div>
  );
}
