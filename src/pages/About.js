import Container from "../components/Container";
import portrait from "../images/portrait.png";
import "./About.css"

function About () {
  document.title = "S Israel | About";
  return (
    <Container>
      <section>
        <h1 className="section-header">About Me</h1>
        <hr />
        <div className="row">
          <div className="col-md-6 col-lg-5 text-center">
            <img className="img-fluid portrait" src={portrait} alt="Portrait of Me" />
            <div className="text-center">
              <button className="icon-button mr-3">
                <a href="https://www.linkedin.com/in/scisrael/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <i className="fab fa-linkedin about-icon"></i> <span className="sr-only">LinkedIn</span>
                </a>
              </button>
              <button className="icon-button">
                <a href="https://github.com/malenchite" target="_blank" rel="noreferrer" aria-label="GitHub">
                  <i className="fab fa-github about-icon"></i> <span className="sr-only">GitHub</span>
                </a>
              </button>
            </div>
          </div>
          <div className="col-md-6 col-lg-7">
            <p>
              I am a back-end web developer with expertise in complex technology projects, leveraging experience in engineering
              and embedded software development. I have excellent skills in problem-solving and debugging with years of
              experience inresolving problems in code, as well as learning new technologies and languages. I have a proven track record
              working both in multi-disciplinary teams and as an individual contributor.
            </p>
            <p>
              My journey has taken me from biomedical engineering through maritime robotics research, UI and behavioral
              software for pharmacy automation, and embedded development for personal navigation devices. I am excited to
              take the next step on my path into web development, applying my unique background, creativity, and life-long
              interest in programming to creating the future of the web.
            </p>
            <p>
              Completed a certificate in full stack development from UNC Chapel Hill in May of 2021.
            </p>
            <p>
              For more information, my resume is available on request.
            </p>
            <table>
              <thead>
                <tr>
                  <th>Skills</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <ul>
                      <li>HTML/CSS</li>
                      <li>JavaScript</li>
                      <li>node.js</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>Express</li>
                      <li>MySQL</li>
                      <li>MongoDB</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>React</li>
                      <li>MERN</li>
                      <li style={{ visibility: "hidden" }}></li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </Container>
  );
}

export default About;
