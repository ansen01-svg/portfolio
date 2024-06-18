import Accolade from "./accolade";

export default function AcademicSection() {
  return (
    <div className="flex flex-col items-start justify-center gap-5">
      <h2 className="text-orange text-sectionSubTitleLarge font-semibold md:text-sectionSubTitleSmall">
        Academic
      </h2>
      <Accolade
        duration={"2013 - 2017"}
        college={"Jorhat Engineering College, Jorhat, India."}
        classIn={"Bachelor of Engineering"}
      />
    </div>
  );
}
