import React from 'react';
import '../assets/css/projects.css'
function Projects() {
  return (
    <section id="my-work">
      <div className="subtitle">
        <h3>Work</h3>
      </div>
      <div className="content" id="work-content">
        <ul>
          <li>Horiseon-SEO</li>
          <a href="https://josiahr4321.github.io/Horiseon-SEO/">
            <img src="https://user-images.githubusercontent.com/125624166/229884398-76872652-6807-4e28-bc5a-ed71e0e906e3.png" alt="Horiseon-SEO webpage" />
          </a>
          <li>Sport-Standings-Tracker</li>
          <a href="https://juanx198522.github.io/Sport-Standings-Tracker/index.html">
            <img src="https://github.com/juanx198522/Sport-Standings-Tracker/raw/main/assets/Images/Selected%20May%2017%202023%2021%3A52%3A19.png" alt="picture of Sport-Standings-Tracker" />
          </a>
          <li>Dungeons-Character-Creator</li>
          <a href="https://nameless-oasis-56785-78698e88b34e.herokuapp.com">
            <img src="https://www.gamespot.com/a/uploads/scale_medium/1562/15626911/3939537-untitled-1-recovered-recovered.jpg" alt="Dungeons-Character-Creator" />
          </a>
          <li>Coding-Quiz-SEO</li>
          <a href="https://josiahr4321.github.io/Coding-Quiz-SEO/">
            <img src="https://user-images.githubusercontent.com/125624166/267498043-08d2eb08-0451-400d-abfe-744cb2a786c9.png" alt="Dungeons-Character-Creator" />
          </a>
          <li>Password-Generator-SEO</li>
          <a href="https://josiahr4321.github.io/Password-Generator-SEO/">
            <img src="https://user-images.githubusercontent.com/125624166/233524831-ab08a64a-e59d-4607-9687-24f975d25435.png" alt="Dungeons-Character-Creator" />
          </a>
          <li>Work-Day-Scheduler-SEO</li>
          <a href="https://josiahr4321.github.io/Work-Day-Scheduler-SEO/">
            <img src="https://user-images.githubusercontent.com/125624166/236369888-1f0e1888-52e5-460a-8eaa-d730cef6ec67.png" alt="Dungeons-Character-Creator" />
          </a>
        </ul>
      </div>
    </section>
  );
}

export default Projects;
