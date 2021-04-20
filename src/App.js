import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "./components/Container";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import { HashRouter, Route } from "react-router-dom"
import "./App.css"


function App() {
  return (
    <HashRouter>
      <Header />
      <Container>
        <Route exact path="/" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/portfolio" component={Portfolio} />
      </Container>
      <Footer />
    </HashRouter>
  );
}

export default App;
