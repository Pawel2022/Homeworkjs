import React from 'react';
import './App.css';
// import './main.css';

function App() {
  return (
    <div className="App">
        <header className="header">
          <h1> &ensp;</h1>
        </header>
        <div className="container">
          <aside className="sidebar">
            <div className="sidebar-content"></div>
            <div className="overlay">
              <div className="overlay-content"></div>
            </div>
          </aside>
          <main className="main">
            <div className="main-content"></div>
            <div className="white-rectangle"></div>
          </main>
        
        </div>
        <footer className="footer">
          <h1> &ensp;</h1>
        </footer>
        </div>
  );
};

export default App;