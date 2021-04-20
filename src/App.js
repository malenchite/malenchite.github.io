import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import { Route, Switch, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion";
import "./App.css"


function App() {
  const location = useLocation();
  return (
    <div>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route exact path="/" key="about" component={About} />
          <Route path="/contact" key="contact" component={Contact} />
          <Route path="/portfolio" key="portfolio" component={Portfolio} />
        </Switch>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
