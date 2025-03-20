import React from 'react';
import './index.css';

function Navbar() {
  return (
    <header>
      
    </header>
  );
}

function Main() {
  return (
    <main>
      <div className="content-main">
            <h1 className="content-main-title">Seja Bem-vindo ao Borabico</h1>
            <p className="content-main-subtitle">Um lugar onde você encontra a sua oportunidade de emprego</p>
            <a href="#" className="content-main-btn">Conheça sobre nós</a>
        </div>
    </main>
  );
}

function About() {
    return (
        <section>
        
        </section>
    );
    }

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <About />
      
    </div>
  );
}

export default App;