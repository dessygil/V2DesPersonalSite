import React from "react";
import Image from 'next/image'
import headshot from "./headshot.png";
//TODO have various skills devops and frontend backend and scientific computing with the level of skill assocaited

export default function Hero() {
  const skills = [
    "Pytorch",
    "Django",
    "RDKit",
    "DeepChem",
    "Numpy/Pandas",
    "React",
  ];

  return (
    <div id="About-anchor" className="flex flex-col mt-48">
      <h2 className="numbered-heading">About Me</h2>
      <div className="flex">
        <div className="flex-4 flex flex-col">
          <div className="blurb">
            <p className="main-paragraph max-w-5/6 leading-6">
                Hello, my name is Desmond Gilmour and I'm a software engineer at
                the intersection of chemistry and computer science. My love for
                programming began when I decided to try a beginner python course
                in the summer of my chemistry degree because I noticed a trend
                that ALL biotech companies implement a platform for drug
                discovery. Immediately I knew software engineering was for me and
                as soon as next semester rolled around I enrolled a double major
                of computer science and chemistry.
            </p>
            <br></br>
            <p className="main-paragraph">
                Fast forward, I now have developed a clear passion for lab
                automation and AI for material/drug discovery as it allows
                research scientists to increase reproducibility and the pace of
                innovations.
            </p>
            <br></br>
            <p className="main-paragraph">
                Here are few technologies I have been working with recently:
            </p>
          </div>

          <ul className="skills-list grid grid-cols-2 gap-x-2 p-0 m-0 overflow-hidden list-none">
            {skills &&
              skills.map((skill, i) => (
                <li className="skills-list-item relative mb-2 pl-5 font-mono text-sm" key={skill}>
                  {skill}
                </li>
              ))}
          </ul>
        </div>
        <div className="flex-3">
          <div className="img-wrapper">
            <Image
              className="headshot"
              src={headshot}
              alt="Desmond's Professional Headshot"
              width={300}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
