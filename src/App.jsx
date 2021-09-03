import './App.scss';

import Navbar from "./components/navbar/Navbar"
import Intro from "./components/intro/Intro"
import Skill from "./components/skill/Skill"
import Project from "./components/project/Project"
import Contact from "./components/contact/Contact"


function App() {
  return (
        <div className="app">
            <Navbar/>
            <div className="sections">
              <Intro/>
              <Skill/>
              <Project/>
              <Contact/>
            </div>
        </div>
    );
}

export default App;
