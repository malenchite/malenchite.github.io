import "./style.css"

function Footer() {
  return (
    <footer className="footer mt-auto py-3 fixed-bottom">
      <div className="container text-center">
        <span className="text-muted">Copyright &copy;2020-2021 Steven Israel </span><a
          href="https://github.com/malenchite/malenchite.github.io" target="_blank" rel="noreferrer"><i className="fab fa-github gh-link"></i></a>
      </div>
    </footer>
  );
}

export default Footer;