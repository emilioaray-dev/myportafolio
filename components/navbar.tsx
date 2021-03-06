import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { IconContext } from 'react-icons'
import { HiSun, HiMoon } from 'react-icons/hi'
import { useTranslation, i18n } from 'next-i18next'
import { useRouter } from 'next/router'
import useScrollListener from './scroll'

export default function Navbar() {
  // Set Default Language
  const router = useRouter()
  const [language, setLanguage] = useState('es')

  // Button Change Language
  const handleClick = () => {
    language == 'es' ? setLanguage('en') : setLanguage('es')
    i18n.changeLanguage(language)
    console.log(router)
  }

  // Set UseTranslation
  const { t } = useTranslation('common')

  // Set Theme
  const { theme, setTheme } = useTheme()

  // Determitades Theme and set String true and false

  /* 
  var hoTheme = `${theme}`
  if (hoTheme === `dark`) {
    hoTheme = 'true'
  }
  if (hoTheme === `light`) {
    hoTheme = 'false'
  }
*/

  // Determitades Theme and set Boolean true and false

  var strintheme = `${theme}`
  if (strintheme === `dark`) {
    strintheme = JSON.parse('true')
  }
  if (strintheme === `light`) {
    strintheme = JSON.parse('false')
  }
  if (`${theme}` === `undefined`) {
    strintheme = `dark`
    strintheme = JSON.parse('true')
  }

  // Set State tue and false for buttom Theme Mode
  const [state, setState] = useState(strintheme)

  const { resolvedTheme } = useTheme()
  // console.log(hoTheme)
  // console.log(`${theme} mode`)
  //console.log(language)
  // console.log(hoTheme)

  // Funcion Hide Navabar
  const [navClassList, setNavClassList] = useState([])
  const scroll = useScrollListener()
  // update classList of nav on scroll
  useEffect(() => {
    const _classList = []

    if (scroll.y > 20 && scroll.y - scroll.lastY > 0) _classList.push('--hidden')

    setNavClassList(_classList)
  }, [scroll.y, scroll.lastY])

  return (
    <>
      <section id="Navbar" className={`container ${navClassList.join('')}`}>
        <nav className="navbar">
          <div className="max__container navbar__grid">
            <Link href="/">
              <a href="/">
                <picture className="navbar__logo">
                  <img className="navbar__img" src="/assets/img/navbar/mayor.svg" alt="" height="30px" />
                  <h2>Celsius Aray</h2>
                  <img className="navbar__img" src="/assets/img/navbar/menor.svg" alt="" height="30px" />
                </picture>
              </a>
            </Link>
            <ul className="flex__grid">
              <Link href="#Home">
                <a href="#Home">
                  <li>{t('home')}</li>
                </a>
              </Link>
              <Link href="#About">
                <a href="#About">
                  <li>{t('about')}</li>
                </a>
              </Link>
              <Link href="#Skill">
                <a href="#Skill">
                  <li>{t('skillsT')}</li>
                </a>
              </Link>
              <Link href="#Projects">
                <a href="#Projects">
                  <li>{t('projectsT')}</li>
                </a>
              </Link>
              <Link href="#Contact">
                <a href="#Contact">
                  <li>{t('contactT')}</li>
                </a>
              </Link>

              <button
                className="btn_themeMode"
                onClick={() => {
                  setState((previousState: any) => !previousState)
                }}
              >
                {state === true ? (
                  <div onClick={() => setTheme('light')} className="btn_themeMode-moon">
                    <IconContext.Provider value={{ color: 'var(--colorMun)', size: '2em' }}>
                      <HiMoon />
                      <span className="btn_themeMode-span">{t('themeDarkMode')}</span>
                    </IconContext.Provider>
                  </div>
                ) : (
                  <div onClick={() => setTheme('dark')} className="btn_themeMode-sun">
                    <IconContext.Provider value={{ color: 'var(--colorSun)', size: '2em' }}>
                      <HiSun />
                      <span className="btn_themeMode-span">{t('themeLightMode')}</span>
                    </IconContext.Provider>
                  </div>
                )}
              </button>
              <button className="btn_translate" onClick={handleClick}>
                {i18n.language == 'es' ? (
                  <a onClick={() => [setLanguage('en'), router.push('/en', '/en')]} className="btn_translate-span">
                    ES
                  </a>
                ) : (
                  <a onClick={() => [setLanguage('es'), router.push('/es', '/es')]} className="btn_translate-span">
                    EN
                  </a>
                )}
              </button>
            </ul>
          </div>
        </nav>
      </section>

      <style jsx>{`
        .container {
          display: grid;
          width: 100%;
          overflow: hidden;
        }

        .max__container {
          display: grid;
          margin: 0 auto;
          width: 100%;
          max-width: var(--max-widthContainer);
          padding: 0 1rem;
        }
        #Navbar {
          position: fixed;
          z-index: 2;
          box-shadow: 0rem -1.7rem 2rem 1rem var(--colorShadow);
          background: var(--gradientNav);
          padding: 1rem 0rem;
          -webkit-backdrop-filter: blur(5px);
          backdrop-filter: blur(5px);
          transition: top 0.3s;
          top: 0;
        }

        #Navbar.--hidden {
          transform: translateY(-100%);
        }

        .navbar__grid {
          display: grid;
          grid-template-columns: max-content auto;
        }
        h2 {
          font-family: 'Grechen Fuemen', cursive;
          color: var(--colorTextLogo);
          inline-size: 9rem;
          text-align: center;
        }

        .flex__grid {
          display: flex;
          list-style-type: none;
          align-items: center;
          justify-content: flex-end;
          gap: 1rem;
        }

        li {
          color: var(--colorTextLogo);
          background: var(--colorCardBackground);
          padding: 0.5rem;
          border-radius: var(--borderRadius_buttom);
          backdrop-filter: blur(2px);
          -webkit-backdrop-filter: blur(2px);
        }

        .btn_translate {
          display: grid;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          min-width: 1rem;
          border-radius: 0.7rem;
          background: var(--colorButtonTranslate);
          margin-left: -0.5rem;
          border: none;
          user-select: none;
          box-shadow: var(--shadowButton);
          cursor: pointer;
        }

        .btn_translate-span {
          width: 100%;
          color: var(--colorWhite);
        }
        .btn_themeMode {
          min-width: 8.32rem;
          box-shadow: var(--shadowButton);
          backdrop-filter: blur(2px);
          -webkit-backdrop-filter: blur(2px);
          background: var(--colorButtonTheme);
        }

        .btn_themeMode,
        .btn_themeMode-moon,
        .btn_themeMode-sun {
          display: flex;
          align-items: center;
          border: none;
          color: var(--colorTextHeader);
          border-radius: var(--borderRadius_buttom);
          padding: 0.1rem;
          cursor: pointer;
        }

        .navbar__logo {
          display: flex;
          align-items: center;
          flex-direction: row;
        }

        @media (max-width: 984px) {
          h2 {
            font-size: max(1.5rem, 10%);
          }

          .navbar__img {
            width: 30px;
          }
          .navbar__grid {
            display: grid;
            grid-template-columns: 60% auto;
          }
          .flex__grid > a,
          a > li {
            /* Hide all li */
            display: none;
          }

          .flex__grid {
            justify-content: end;
            width: 100%;
          }

          .btn_themeMode {
            min-width: auto;
            margin-left: 0.5rem;
          }

          .btn_themeMode-span {
            /* Hide all Span */
            display: none;
          }
        }
      `}</style>
    </>
  )
}
