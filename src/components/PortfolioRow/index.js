import Project from "../Project"

/* Constructs a row with one or two projects, depending on whether project 2 is defined */
function PortfolioRow(props) {
  return (
    <div className="row">
      <Project info={props.project1} />
      <Project info={props.project2} />
    </div>
  );
}

export default PortfolioRow;