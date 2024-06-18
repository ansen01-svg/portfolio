export default function AboutSection() {
  return (
    <div id="about" className="w-full min-h-screen">
      <div className="w-full h-full px-7 py-20 flex flex-col items-start justify-start gap-12 lg:px-16">
        <h1 className="text-sectionTitleSmall font-bold lg:text-sectionTitleLarge">
          About
        </h1>
        <p>
          {`I’m a passionate and pragmatic software engineer with 15 years of
          professional experience, specializing in full-stack development using
          Microsoft technologies on the backend.`}
        </p>
        <p>
          {`Strong in object-oriented analysis and design and experienced with a
          wide range of front-end and back-end frameworks (see below). Also,
          being an artist in nature, I have a good sense of design, colors,
          usability and can build beautiful and modern interfaces that people
          love.`}
        </p>
        <p>
          {`I can assist in all stages of software development lifecycle and
          deliver working software with clean architecture, clean code, and
          automated tests, as I've demonstrated in my Pluralsight course Become
          a Full-stack .NET Developer (ranking #1).`}
        </p>
      </div>
    </div>
  );
}
