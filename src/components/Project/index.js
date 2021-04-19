import "./style.css"

function Project(props) {

  /* Do not render if no project info is provided */
  if (!props.info) {
    return "";
  }

  return (
    <div className="col-lg">
      <figure>
        <a href={props.info.githubLink} target="_blank" rel="noreferrer">
          <img className="figure-img img-fluid portfolio-image" src={require(`../../images/${props.info.thumbnail}`).default}
            alt={`${props.info.name} Thumbnail`} />
        </a>
        <figcaption className="figure-caption">
          {props.info.name} - {props.info.technologies}<br />
          {props.info.description}<br />
          {props.info.deployLink ? <a href={props.info.deployLink} target="_blank" rel="noreferrer"><button type="button" className="btn btn-link">Deployed</button></a> : ""}
        </figcaption>
      </figure>
    </div>
  );
}

export default Project;