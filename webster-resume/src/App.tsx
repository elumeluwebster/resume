// import { useState } from 'react';

// import { styled } from './stitches.config';
import './App.css';


function App() {
  // const Hero = styled('div', {
  //   '@bp3': {
  //     pl: '$8',
  //   },
  // });

  // const [count, setCount] = useState(0)

  const techStack = [
    "html5", "css3", "js", "react", "figma",
    "python", "illustrator", "indesign"
  ];

  return (
    <>
      {/* <div className='flex flex-row'>
        <a className='size-xs' href="/" target="_blank">
          <img src={"/images/web_elu.jpg"} className="logo rounded-full overflow-hidden" alt="Web logo" />
        </a>
      </div> */}
      <div className='about-portion'>
        <h4>Hey, I'm</h4>
        <h1 className=''>WEBSTER C. ELUMELU</h1>
        <p>I'm a frontend dev en route to becoming a</p>
        <p className='text-red-700'>Network Engineer!</p>

        <div className='mt-3'>
          <h2>
            Brief
          </h2>
          <p>
            I started coding in 2020 <br />
            Graduated in 2023 <br />
            Been working as a dev last year <br />
            I am a PhD Candidate <br />
            Committed to advancing network engineering research <br />
            and enhancing efficiency of digital systems<br />
          </p>
        </div>
      </div>

      <br />
      <br />
      <br />

      {/* Tech Stack */}
      <section className='mt-4 mb-6'>
        <h2 className='section_title'>Tech Stack</h2>
        <div className="tech-stack grid grid-cols-4 gap-x-2 gap-y-2">
          {techStack.map((tech, index) => (
            <div key={index} className="tech-item">
              <img
                src={`/logos/${tech}.png`}
                alt={`${tech} logo`}
                className="tech-logo"
              />
              <p className="text-center">{tech}</p>
            </div>
          ))}
        </div>
      </section>

      <br />
      <br />
      <br />

      {/* Work History */}
      <section className='mt-4 mb-6'>
        <h2 className='section_title'>Work History</h2>

        <div className="experience-item flex">
          <h3 className="experience-heading">Research <br /> Experience</h3>
          <div>
            <h4>Content Editor, Bare Max Club</h4>
            <p>Feb 2021 - Present</p>
            <ul>
              <li>Essential collaborative research conducted due to the creative talent not being <br />able to function in an industry prone to using and reusing incumbent linchpins</li>
              <li>It keeps tabs on the emerging creatives and provides consumers with a wider <br /> view of the many occurrences happening in tandem in and around the industry.</li>
              <li>The research seeks to ensure that all voices have a platform to express their<br />perceptions on the state of the industry.</li>
              <li>Creative titles explored: Photography, Music production, UX Research,<br /> Videography, Makeup, Experience Design & Journalism.</li>
            </ul>
            <p>Elumelu, W. C. (2023). A Comparative Performance Analysis...</p>
          </div>
        </div>

        <div className="experience-item flex mt-4">
          <h3 className="experience-heading">Teaching <br /> Experience</h3>
          <div>
            <h4>Teaching Assistant, MAC Academy, New York (Remote)</h4>
            <p>Nov 2022 - Present</p>
            <ul>
              <li>Inspired by the growing demand for engineers, responsible for creating lesson plans, <br /> delivering lectures, and grading assignments for future engineers and developers.</li>
              <li>Improved student performance & response and created innovative teaching materials while<br />assisting in web development classes.</li>
              <li>Developed a model to better serve the students as they forged ahead with their learning.</li>
            </ul>
          </div>
        </div>

        <div className="experience-item flex mt-4">
          <h3 className="experience-heading">Industry <br /> Experience</h3>
          <div className='ml-4'>
            <h4>Software Engineer/Front End Developer, KNG Technologies</h4>
            <p>Nov 2022 - Present</p>
            <ul>
              <li>Identified, selected, and recorded necessary points for the improved documentation process of the in-house <br /> projects by implementing a standardized forma for all technical documents and pulling from a centralized repository for easy access.</li>
              <li>Developed ustom solutions for the music project which were used as patch updates <br /> for previous br projects that predate my joining the company.</li>
              <li>Implemented components using best practices for React Typescript to ensure the speed of <br /> loading pages and other tasks would not fall.</li>
            </ul>
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />

      {/* Extra */}
      <section className='mt-4 mb-6'>
        <h2 className='section_title'>Extra</h2>

        {/* Awards/Certifications */}
        <div className="experience-item flex">
          <h3 className="experience-heading">Awards/<br />Certifications</h3>
          <div>
            <ul>
              <li>2019 Dean’s List</li>
              <li>2021 Dean’s List</li>
              <li>2022 Departmental Honors</li>
            </ul>
          </div>
        </div>

        {/* Community Involvement */}
        <div className="experience-item flex mt-4">
          <h3 className="experience-heading">Community<br />Involvement</h3>
          <div>
            <ul>
              <li>Cover Design for A Global Village Review<br />May 2022</li>
              <li>CS Mentoring Program, Mentor<br />August 2021 - Present</li>
              <li>Student Government Association, Vice President<br />May 2020 - May 2021</li>
              <li>Webster CS Club, IT Executive<br />May 2022 - November 2022</li>
            </ul>
          </div>
        </div>

        {/* Interests/Activities */}
        <div className="experience-item flex mt-4">
          <h3 className="experience-heading">Interests/<br />Activities</h3>
          <div>
            <ul>
              <li>Dance, Football, International Law, Foreign Policy, Formula1,<br />EA Sports FIFA, Skateboarding, Design, Photography, Creative Direction</li>
            </ul>
          </div>
        </div>

      </section>

      <br />
      <br />
      <br />

      {/* Contact */}
      <section className='section_title mt-4 mb-6'>
        <h2>Contact</h2>
        <p>Open to freelance.<br />
          Feel free to reach me at:
          <br />
          <br />
          <a href="mailto:">elumeluwebster@outlook.com</a><br />
          <a href="mailto:">elumeluwebster@gmail.com</a>
        </p>

      </section>
    </>
  )
}

export default App;