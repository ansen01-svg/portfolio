export default function AboutSection() {
  return (
    <div id="about" className="w-full min-h-screen">
      <div className="w-full h-full px-7  flex flex-col items-start justify-start gap-12 md:py-20 lg:px-16">
        <h1 className="text-sectionTitleSmall font-bold lg:text-sectionTitleLarge">
          About
        </h1>
        <div className="w-full flex flex-col items-start justify-start gap-5">
          <p>
            {`I’m a a passionate and dedicated web developer specializing in front-end development. My expertise lies in crafting visually stunning and user-friendly interfaces that enhance the overall user experience. With a deep understanding of modern web technologies such as HTML, CSS, JavaScript, and frameworks like React, I am committed to building responsive and interactive web applications. My attention to detail and dedication to writing clean, maintainable code ensure that the projects I work on are not only aesthetically pleasing but also robust and scalable.`}
          </p>
          <p>
            {`In addition to my front-end prowess, I have a solid foundation in back-end development using Node.js and Express. This knowledge allows me to create seamless integrations between the client and server sides, ensuring that the web applications I develop are both efficient and secure. While I may not have formal working experience in the industry, I have honed my skills through numerous personal projects and continuous learning. I am confident in my ability to deliver high-quality software solutions that meet and exceed client expectations.`}
          </p>
          <p>
            {`As a web developer, I am always eager to learn and adapt to new technologies and industry trends. My goal is to leverage my skills to create innovative web solutions that solve real-world problems and provide exceptional user experiences. I am excited about the opportunity to collaborate with like-minded professionals and contribute to projects that make a meaningful impact. Whether you're looking for a front-end specialist or a versatile developer who can handle both front and back-end tasks, I am ready to bring your vision to life.`}
          </p>
        </div>
      </div>
    </div>
  );
}
