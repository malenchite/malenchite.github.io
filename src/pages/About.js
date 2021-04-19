import portrait from "../images/portrait.png";
import "./About.css"

function About() {
  return (
    <section>
      <h1 className="section-header">About Me</h1>
      <hr />
      <div className="row">
        <div className="col-md-6 col-lg-5">
          <img className="img-fluid portrait" src={portrait} alt="Portrait of Me" />
          <div className="text-center">
            <a href="https://www.linkedin.com/in/scisrael/" className="link-icon mr-3" target="_blank" aria-label="LinkedIn" rel="noreferrer"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/malenchite" className="link-icon" target="_blank" aria-label="GitHub" rel="noreferrer"><i className="fab fa-github"></i></a>
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
            Currently pursuing a certificate in full stack development from UNC Chapel Hill, with expected completion
            in May of 2021.
        </p>
          <p>
            For more information, you can view <a href="https://drive.google.com/file/d/1-5sTT6lQAskb-MuUUho-Gm9-Osd94B5p/view" target="_blank" rel="noreferrer">my resume</a>.
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
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default About;