"use client";

import ReportProblemOutlinedIcon from "@mui/icons-material/ReportProblemOutlined";

export default function Error() {
  return (
    <div className="max-w-[100vw] h-[calc(100vh-61px-208px)]">
      <div className="w-full h-full px-7  flex flex-col items-center justify-center gap-7 lg:px-16">
        <span className="px-6 py-6 rounded-full bg-secondary">
          <ReportProblemOutlinedIcon fontSize="large" />
        </span>
        <h1 className="text-sectionSubTitleLarge text-center font-semibold md:text-sectionSubTitleSmall">
          An error occured. Refresh the page and try again.
        </h1>
      </div>
    </div>
  );
}
