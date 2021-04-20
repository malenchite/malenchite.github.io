import "./style.css"

function Footer() {
  return (
    <footer className="footer mt-auto py-3 fixed-bottom">
      <div className="container text-center">
        <span className="text-muted">Copyright &copy;2020-2021 Steven Israel </span>
        <button className="gh-button">
          <a href="https://github.com/malenchite/malenchite.github.io" target="_blank" rel="noreferrer">
            <i className="fab fa-github gh-icon"></i><span className="sr-only"> GitHub Repo</span>
          </a>
        </button>
      </div>
    </footer >
  );
}

export default Footer;