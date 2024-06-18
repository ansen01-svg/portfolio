import AcademicSection from "./academic_section";

export default function QualificationsSection() {
  return (
    <div id="qualifications" className="w-full">
      <div className="w-full px-7 py-28 flex flex-col items-start justify-center gap-12 lg:px-16">
        <h1 className="text-sectionTitleSmall font-bold lg:text-sectionTitleLarge">
          Qualifications
        </h1>
        <AcademicSection />
      </div>
    </div>
  );
}
