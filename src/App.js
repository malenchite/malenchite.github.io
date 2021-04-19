import Header from "./components/Header";
import Footer from "./components/Footer"
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import { HashRouter, Route } from 'react-router-dom'
import "./App.css"

function App() {
  return (
    <HashRouter>
      <div>
        <Header />
        <main className="container pt-4 pl-5 pr-5 clearfix">
          <Route exact path="/" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/portfolio" component={Portfolio} />
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
