import './App.css';
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import {Contact} from "./components/Contact";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import {Projects} from "./components/Projects";

function App() {
  return (
    <div className="App">
      <NavBar />
        <Banner />
        <Skills />
      <Projects />
        <Contact />
    </div>
  );
}

export default App;
