import Container from "../components/Container";
import projectInfo from "../data/projectInfo"
import PortfolioRow from "../components/PortfolioRow"

function Portfolio() {
  document.title = "Steven Israel | Portfolio";

  /* Construct list of rows with 1-2 projects each */
  const createRows = () => {
    let rows = []

    for (let i = 0; i < projectInfo.length; i += 2) {
      rows.push(<PortfolioRow key={projectInfo[i].id} project1={projectInfo[i]} project2={projectInfo[i + 1]} />);
    }

    return rows;
  };

  return (
    <Container>
      <section className="pb-2">
        <h1 className="section-header">Portfolio</h1>
        <hr />
        {createRows()}
      </section>
    </Container>
  );
}

export default Portfolio;