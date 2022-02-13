import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { IconContext } from 'react-icons'
import { HiSun, HiMoon } from 'react-icons/hi'
import { useTranslation, i18n } from 'next-i18next'
import { useRouter } from 'next/router'

export default function Navbar() {
  // Set Default Language
  const router = useRouter()
  const [language, setLanguage] = useState('es')

  // Button Change Language
  const handleClick = () => {
    language == 'es' ? setLanguage('en') : setLanguage('es')
    i18n.changeLanguage(language)
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

  /*
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  if (!mounted) return null
*/

  // Set State tue and false for buttom Theme Mode

  const [state, setState] = useState(strintheme)

  const { resolvedTheme } = useTheme()
  // console.log(hoTheme)
  // console.log(`${theme} mode`)
  //console.log(language)
  // console.log(hoTheme)

  return (
    <>
      <section className="container" id="Navbar">
        <nav className="navbar">
          <div className="max__container navbar__grid">
            <Link href="/">
              <a href="/">
                <picture className="navbar__logo">
                  <img className="navbar__img" src="/navbar/mayor.svg" alt="" height="30px" />
                  <h2>Celsius Aray</h2>
                  <img className="navbar__img" src="/navbar/menor.svg" alt="" height="30px" />
                </picture>
              </a>
            </Link>
            <ul className="flex__grid">
              <Link href="/">
                <a href="/">
                  <li>{t('saludo')}</li>
                </a>
              </Link>
              <Link href="/">
                <a href="/">
                  <li>{t('saludo')}</li>
                </a>
              </Link>
              <Link href="/">
                <a href="/">
                  <li>{t('saludo')}</li>
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
                  <a onClick={() => [setLanguage('en'), router.push('/en')]} className="btn_translate-span">
                    ES
                  </a>
                ) : (
                  <a onClick={() => [setLanguage('es'), router.push('/es')]} className="btn_translate-span">
                    EN
                  </a>
                )}
              </button>
            </ul>
          </div>
        </nav>
      </section>

      <style jsx>{`
        #Navbar {
          position: fixed;
          z-index: 1;
          box-shadow: 0rem -1.7rem 2rem 1rem var(--colorShadow);
          background: transparent;
          height: auto;
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
          color: var(--colorTextLogo);
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
          box-shadow: 2px 4px 3px 0px rgb(153 145 145 / 20%);
        }

        .btn_translate-span {
          width: 100%;
          color: var(--colorWhite);
        }
        .btn_themeMode {
          min-width: 8.32rem;
        }

        .btn_themeMode,
        .btn_themeMode-moon,
        .btn_themeMode-sun {
          display: flex;
          align-items: center;
          background: transparent;
          border: none;
          color: var(--colorTextHeader);
          border-radius: 0.7rem;
          padding: 0.1rem;
          background: var(--colorButtonTheme);
          box-shadow: 2px 4px 3px 0px rgb(153 145 145 / 20%);
        }

        .navbar__logo {
          display: flex;
          align-items: center;
        }

        @media (max-width: 620px) {
          h2 {
            font-size: 1.5rem;
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
            justify-content: center;
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
