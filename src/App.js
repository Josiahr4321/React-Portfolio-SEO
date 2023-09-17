import React from 'react';
import './App.css'; // Import your CSS file here
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Work from './components/Work';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <div className="container">
      <Header />
      <main>
        <AboutMe />
        <Work />
        <ContactMe />
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
