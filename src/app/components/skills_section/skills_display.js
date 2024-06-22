export default function SkillsDisplay(props) {
  const { icon, heading, data } = props;

  return (
    <>
      <div className="w-full flex items-center justify-start gap-5">
        {icon}
        <h1 className="text-sectionSubTitleLarge text-orange font-semibold md:text-sectionSubTitleSmall">
          {heading}
        </h1>
      </div>
      <div className="w-full">
        <div className="w-full flex items-center justify-start">
          <p className="text-secondaryDarker">{`<ul>`}</p>
        </div>
        <div className="w-full flex items-center justify-start gap-6">
          <div className="w-[1px] h-full bg-white"></div>
          <div className="py-3">
            <ul className="flex flex-col items-start justify-start gap-2">
              {data.map((skill) => {
                return <li key={skill.id}>{skill.skill}</li>;
              })}
            </ul>
          </div>
        </div>
        <div className="w-full flex items-center justify-start">
          <p className="text-secondaryDarker">{`<ul>`}</p>
        </div>
      </div>
    </>
  );
}
