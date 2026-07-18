import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Pokedex from './features/pokedex/Pokedex'
import Individual from './features/pokedex/components/individual'

import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import pokeballLogo from './assets/pokeball.svg'
import todoLogo from './assets/to-do-list.svg'
import cupidLogo from './assets/cupid.svg'
import calculatorLogo from './assets/calculator.svg'
import './App.css'

// 1. NUEVO SUBCOMPONENTE INDEPENDIENTE PARA CADA TARJETA GIRATORIA
function FlipCardProject({ logo, name, description, to, isInternal = false }) {
  const [isFlipped, setIsFlipped] = useState(false); // Movido adentro correctamente

  return (
    <li className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={() => setIsFlipped(!isFlipped)}>
      <div className="flip-card-inner">
        
        {/* CARA FRONTAL */}
        <div className="flip-card-front">
          <img src={logo} className="button-icon" alt={`${name} logo`} />
          <span>{name}</span>
        </div>

        {/* CARA TRASERA */}
        <div className="flip-card-back">
          <p>{description}</p>
          {isInternal ? (
            <Link to={to} onClick={(e) => e.stopPropagation()}>Ver proyecto</Link>
          ) : (
            <a href={to} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>Ver proyecto</a>
          )}
        </div>

      </div>
    </li>
  );
}

// Vista Home
function Home() {
  return (
    <>
      <section id="center">
        <div>
          <h1> Maximiliano Corbo </h1>
          <p>
            <code> Front and Backend developer</code> based in Montevideo, Uruguay.
          </p> 
        </div>

        <p> Solid bases in software development: React, Node.js, javascript and databases. </p>
        <p> Currently open to work opportunities. </p>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation and practices</h2>
          <p>Here you can find some of my projects</p>
          
          <ul>
            {/* Proyecto 1: Pokédex (Ruta Interna de React Router) */}
            <FlipCardProject 
              logo={pokeballLogo}
              name="Pokédex"
              description="Pokédex project used to learn about APIs and infinite scrolling."
              to="/pokedex"
              isInternal={true}
            />

            {/* Proyecto 2: To-Do List */}
            <FlipCardProject 
              logo={todoLogo}
              name="To-Do List"
              description="The classic To-Do List project used to learn states in React."
              to="https://react.dev/"
            />

            {/* Proyecto 3: Music Matcher */}
            <FlipCardProject 
              logo={cupidLogo}
              name="Music Matcher"
              description="Music matcher used to learn about APIs and state management at the same time."
              to="https://vite.dev/"
            />

            {/* Proyecto 4: Calculator */}
            <FlipCardProject 
              logo={calculatorLogo}
              name="Calculator"
              description="Calculator project used to speed up coding workflows using best practices."
              to="https://react.dev/"
            />

            {/* Tarjetas comodín restantes para rellenar los espacios vacíos */}
            <FlipCardProject 
              logo={viteLogo}
              name="Proyecto Pendiente"
              description="Rellenar campo y cambiar link pendiente."
              to="https://vite.dev/"
            />
            <FlipCardProject 
              logo={reactLogo}
              name="Proyecto Pendiente"
              description="Rellenar campo y cambiar link pendiente."
              to="https://react.dev/"
            />
            <FlipCardProject 
              logo={viteLogo}
              name="Proyecto Pendiente"
              description="Rellenar campo y cambiar link pendiente."
              to="https://vite.dev/"
            />
            <FlipCardProject 
              logo={reactLogo}
              name="Proyecto Pendiente"
              description="Rellenar campo y cambiar link pendiente."
              to="https://react.dev/"
            />
          </ul>
        </div>
        
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with me</h2>
          <p>(And contract me if you need a junior developer)</p>
          <ul>
            <li>
              <a href="https://github.com/MaximilianoCorbo" target="_blank" rel="noreferrer">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub edited
              </a>
            </li>
            <li>
              <a href="" target="_blank" rel="noreferrer">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord ???
              </a>
            </li>
            <li>
              <a href="" target="_blank" rel="noreferrer">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com ???
              </a>
            </li>
            <li>
              <a href="" target="_blank" rel="noreferrer">
                <svg className="button-icon" role="presentation" aria-hidden="true">
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky ???
              </a>
            </li>
          </ul>
        </div>
        
        <div id="test">
          <h1>Test div</h1>
          <p>This is a test div.</p>
          <ul>
            <li><a href="" target="_blank" rel="noreferrer">00001</a></li>
            <li><a href="" target="_blank" rel="noreferrer">00002</a></li>
            <li><a href="" target="_blank" rel="noreferrer">00003</a></li>
          </ul>
        </div>
      </section>

      <div className="ticks">b</div>
      <section id="spacer"></section>
    </>
  )
}

// Router General
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokedex/pokemons/:id" element={<Individual />} />
      </Routes>
    </Router>
  )
}