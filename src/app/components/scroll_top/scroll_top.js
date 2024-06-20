import ArrowUpwardRoundedIcon from "@mui/icons-material/ArrowUpwardRounded";

export default function ScrollTop({ handleClick }) {
  return (
    <div className="fixed bottom-5 right-5 z-50 md:right-10 md:px-[14px] md:py-[14px]">
      <button
        className="px-3 py-3 bg-white text-secondaryDarker font-bold"
        onClick={handleClick}
      >
        <ArrowUpwardRoundedIcon />
      </button>
    </div>
  );
}
