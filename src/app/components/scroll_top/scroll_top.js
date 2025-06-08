import { ChevronUpIcon } from "@heroicons/react/24/outline";

export default function ScrollTop({ handleClick }) {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <button
        onClick={handleClick}
        className="group p-3 bg-accent hover:bg-accentHover text-primary rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 active:scale-95"
        aria-label="Scroll to top"
      >
        <ChevronUpIcon className="w-6 h-6 transition-transform group-hover:-translate-y-0.5" />

        {/* Ripple effect */}
        <div className="absolute inset-0 rounded-full bg-accent opacity-20 scale-0 group-hover:scale-150 group-hover:opacity-0 transition-all duration-500"></div>
      </button>
    </div>
  );
}
