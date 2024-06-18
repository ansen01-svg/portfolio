export default function Accolade(props) {
  const { duration, college, classIn } = props;

  return (
    <div className="flex flex-col items-start justify-center gap-3 md:flex-row md:gap-8">
      <h3 className="text-palePurple text-sectionSubTitleLarge font-semibold md:text-sectionSubTitleSmall">
        {duration}
      </h3>
      <div className="flex flex-col items-start justify-center gap-2">
        <p>{classIn}</p>
        <p>{college}</p>
      </div>
    </div>
  );
}
