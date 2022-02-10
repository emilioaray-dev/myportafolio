import Link from 'next/link'
import React, { useState } from 'react'
import { useTheme } from 'next-themes'
import { IconContext } from 'react-icons'
import { HiSun, HiMoon } from 'react-icons/hi'

export default function Navbar(props: any) {
  const { theme, setTheme } = useTheme()

  const initialState = `${theme}`
  const [buttonText, setButtonText] = useState(initialState) //same as creating your state variable where "Next" is the default value for buttonText and setButtonText is the setter function for your state variable instead of setState

  const [state, setState] = useState(false)
  return (
    <>
      <section className="container" id="Navbar">
        <nav className="navbar">
          <div className="max__container navbar__grid">
            <Link href={''}>
              <a>
                <picture className="navbar__logo">
                  <img src="/navbar/mayor.svg" alt="" height="30px" />
                  <h2>Celsius Aray</h2>
                  <img src="/navbar/menor.svg" alt="" height="30px" />
                </picture>
              </a>
            </Link>
            <ul>
              <Link href={''}>
                <a>
                  <li>Hola</li>
                </a>
              </Link>
              <Link href={''}>
                <a>
                  <li>Hola</li>
                </a>
              </Link>
              <Link href={''}>
                <a>
                  <li>Hola</li>
                </a>
              </Link>
              {/* 
              <IconContext.Provider value={{ color: 'var(--colorSun)', size: '2em', title: '{theme} Mode' }}>
                <button onClick={() => (setTheme('light'), setButtonText(`${theme}`))}>
                  <HiSun />
                  {buttonText}
                </button>
              </IconContext.Provider>
              <IconContext.Provider value={{ color: 'var(--colorMun)', size: '2em', title: '{theme} Mode' }}>
                <button onClick={() => (setTheme('dark'), setButtonText(`${theme}`))}>
                  <HiMoon />
                  {buttonText}
                </button>
              </IconContext.Provider>
              */}
              <button
                onClick={() => {
                  setState((previousState) => !previousState)
                }}
                data-testid="toggle"
              >
                {state === true ? (
                  <IconContext.Provider value={{ color: 'var(--colorSun)', size: '2em' }}>
                    <button onClick={() => setTheme('dark')}>
                      <HiSun />
                      <span>Light mode</span>
                    </button>
                  </IconContext.Provider>
                ) : (
                  <IconContext.Provider value={{ color: 'var(--colorMun)', size: '2em' }}>
                    <button onClick={() => setTheme('light')}>
                      <HiMoon />
                      <span>Dark mode</span>
                    </button>
                  </IconContext.Provider>
                )}
              </button>
            </ul>
          </div>
        </nav>
      </section>

      <style jsx>{`
        #Navbar {
          position: fixed;
          box-shadow: 1px 5px 20px 0px var(--colorShadow);
          background: transparent;
          height: min-content;
          padding: 1rem 0rem;
          -webkit-backdrop-filter: blur(2px);
          backdrop-filter: blur(2px);
        }

        .navbar__grid {
          display: grid;
          grid-template-columns: max-content auto;
        }
        h2 {
          font-family: 'Grechen Fuemen', cursive;
        }

        ul {
          display: flex;
          list-style-type: none;
          align-items: center;
          justify-content: flex-end;
          gap: 1rem;
        }

        li,
        h2 {
          color: var(--colorWhite);
        }

        button {
          background: transparent;
          border: none;
          display: flex;
          align-items: center;
          color: var(--colorWhite);
        }

        button > span {
          margin-left: 0.2rem;
        }

        .navbar__logo {
          display: flex;
          align-items: center;
        }

        @media (max-width: 480px) {
          a > li {
            /* Hide all li */
            display: none;
          }

          button > span {
            /* Hide all Span */
            display: none;
          }
        }
      `}</style>
    </>
  )
}
