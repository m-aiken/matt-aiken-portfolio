import React from 'react';

import './AboutPage.css';

const AboutPage = () => {
  return (
    <section id="about">
      <h1>About Me</h1>
      <p>
        I'm a self taught web developer with a passion for figuring things out,
        whether it's a new project idea, framework, library, styling technique
        etc. I just like to dissect things to see how they work, and ideally how
        they can be made to work better.
      </p>
      <p>
        My aim is to build useful applications that can aid in making people
        more effective in whatever they are trying to do. Whether it's managing
        personal or business finances, improving physical or mental health,
        developing new skills, making better use of our time and so on, I
        believe technology can provide a powerful supplement to maximize our
        results.
      </p>
      {/* <!-- <p>
          My journey into web development started in Autumn of 2018. Frustrated
          with a lack of personal growth in previous jobs, I needed something
          that would provide a constant challenge. Programming has met that
          need, giving me a daily opportunity for progress.
        </p> --> */}
    </section>
  );
};

export default AboutPage;
