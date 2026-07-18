import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import pokeballLogo from './assets/pokeball.svg'
import todoLogo from './assets/to-do-list.svg'
import cupidLogo from './assets/cupid.svg'
import calculatorLogo from './assets/calculator.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
            <li name="pokedex">
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={pokeballLogo} alt="Pokeball logo"    />
                Pokédex project <br /> used to learn about APIs and infinite scrolling.
              </a>
            </li>
            <li name="todo-list">
              <a href="https://react.dev/" target="_blank">
                <img className="logo" src={todoLogo} alt="" />
                The classic To-Do List project <br /> used to learn states in React.
              </a>
            </li>
            <li name="music-matcher">
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={cupidLogo} alt="" />
                Music matcher <br /> used to learn about APIs and state management at the same time.
              </a>
            </li>
            <li name="calculator">
              <a href="https://react.dev/" target="_blank">
                <img className="logo" src={calculatorLogo} alt="" />
                Calculator project <br /> used to learn how much IA can help me to generate code faster. (I learned to program without IA, but now I can use it to speed up my work keeping an eye on the code quality and the best practices.) 
              </a>
            </li>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Rellenar campo y cambiar link pendiente.
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Rellenar campo y cambiar link pendiente.
              </a>
            </li>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Rellenar campo y cambiar link pendiente.
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Rellenar campo y cambiar link pendiente.
              </a>
            </li>
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
              <a href="https://github.com/MaximilianoCorbo" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub edited
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord ???
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com ???
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
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
          <ul>a
            <li>
              <a href="" target="_blank">
                00001
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                00002
              </a>
            </li>
            <li>
              <a href="" target="_blank">
                00003
              </a>
            </li>
          </ul>
        </div>

      </section>

      <div className="ticks">b</div>
      <section id="spacer"></section>
    </>
  )
}

export default App
        //<button
        //   type="button"
        //   className="counter"
        //   onClick={() => setCount((count) => count + 1)}
        // >
        //   This is a simple counter: {count} <br />
        //   click me to increase the count!
        // </button>