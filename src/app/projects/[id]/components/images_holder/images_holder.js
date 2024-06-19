import Image from "next/image";

export default function ImagesHolder({ images }) {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-7">
      {images.map((img, index) => {
        return (
          <div className="w-full h-[300px] relative" key={index}>
            <Image
              src={img}
              fill
              alt="carko-image"
              style={{ objectFit: "cover" }}
            />
          </div>
        );
      })}
    </div>
  );
}
