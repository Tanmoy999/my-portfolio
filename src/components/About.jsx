import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          Welcome to my portfolio website! I am a computer science and
          engineering graduate from Techno India University, West Bengal, with a
          strong passion for academia. Throughout my academic journey, I have
          honed my skills in programming languages such as C, C++, Java, and web
          development. Additionally, I have developed a keen interest in
          blockchain technology.
        </p>

        <br />

        <p className="text-xl">
          During my B.Tech project, I delved into the fascinating field of
          machine learning and focused on detecting phishing websites. I
          utilized various ML techniques to create a robust system capable of
          identifying fraudulent online platforms. This project not only
          enhanced my technical expertise but also showcased my ability to
          tackle real-world problems using innovative solutions. As an academic
          person at heart, I continually strive for growth and stay up-to-date
          with the latest advancements in my field. With a solid foundation in
          programming and a passion for emerging technologies, I am excited to
          embark on new projects and contribute to the ever-evolving world of
          computer science
        </p>
      </div>
    </div>
  );
};

export default About;
