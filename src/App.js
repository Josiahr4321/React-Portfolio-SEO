import React from 'react';
import './App.css'; // Import your global CSS styles here
import Header from './components/Header';
import AboutMe from './components/About'; // Make sure the import path is correct
import Projects from './components/Projects'; // Import your Projects component
import ContactMe from './components/ContactMe'; // Import your ContactMe component

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <AboutMe />
        <Projects /> {/* Use Projects component here */}
        <ContactMe /> {/* Use ContactMe component here */}
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
