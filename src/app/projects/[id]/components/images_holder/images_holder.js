import Image from "next/image";

export default function ImagesHolder({ images }) {
  if (!images || images.length === 0) {
    return null;
  }

  return (
    <div className="w-full max-w-6xl mx-auto">
      <h2 className="text-2xl font-bold text-text-primary mb-8">
        Project Gallery
      </h2>

      <div className="space-y-8">
        {images.map((img, index) => (
          <div
            className="w-full relative overflow-hidden rounded-2xl shadow-card hover:shadow-card-hover transition-all duration-300 group"
            key={index}
          >
            <div className="relative w-full h-64 md:h-96 lg:h-[600px]">
              <Image
                src={img}
                alt={`Project screenshot ${index + 1}`}
                fill
                priority={index === 0}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation back to projects */}
      <div className="mt-20 mb-16 text-center">
        <div className="max-w-md mx-auto">
          <a
            href="/#projects"
            className="btn-primary w-full justify-center group"
          >
            <span>View More Projects</span>
            <span className="ml-2 transition-transform group-hover:translate-x-1">
              →
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
