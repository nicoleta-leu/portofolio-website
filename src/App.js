import React from 'react';
import AboutMe from './components/AboutMe/AboutMe';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Education from './components/Education/Education';
import StoryTime from './components/StoryTime/StoryTime';
import Projects from './components/Projects/Projects';
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <AboutMe />
      <StoryTime />
      <Education />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
