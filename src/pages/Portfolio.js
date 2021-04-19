import projectInfo from "../data/projectInfo"
import PortfolioRow from "../components/PortfolioRow"

function Portfolio() {

  /* Construct list of rows with 1-2 projects each */
  const createRows = () => {
    let rows = []

    for (let i = 0; i < projectInfo.length; i += 2) {
      rows.push(<PortfolioRow key={projectInfo[i].id} project1={projectInfo[i]} project2={projectInfo[i + 1]} />);
    }

    return rows;
  };

  return (
    <section className="pb-2">
      <h1 className="section-header">Portfolio</h1>
      <hr />
      {createRows()}
    </section>
  );
}

export default Portfolio;