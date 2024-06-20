export default function ContactSection() {
  return (
    <div id="contact" className="w-full">
      <div className="w-full h-full px-7 py-20 flex flex-col items-start justify-start gap-12 lg:px-16">
        <h1 className="text-sectionTitleSmall font-bold lg:text-sectionTitleLarge">
          Contact me
        </h1>
        <div className="flex flex-col items-start justify-start gap-5">
          <p>{`Have an exciting project you need help with? Send me an email!`}</p>
          <p className="text-palePurple">ansenbeyc73@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
