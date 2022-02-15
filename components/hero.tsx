import Link from 'next/link'
import Image from 'next/image'
import { useTheme } from 'next-themes'
import { useTranslation } from 'next-i18next'

export default function Hero() {
  const { theme, setTheme } = useTheme()
  const { t } = useTranslation('common')

  let darkTheme = `${theme}`
  if (darkTheme == `dark`) {
    darkTheme = 'negro'
  }
  if (darkTheme == `light`) {
    darkTheme = 'blanco'
  }

  return (
    <>
      <section id="Hero" className="container">
        <div className="banner_background">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            width="auto"
            height="auto"
            preserveAspectRatio="none"
            viewBox="0 0 970 250"
          >
            <g mask='url("#SvgjsMask1024")' fill="none">
              <filter id="f1" x="0" y="0">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
              </filter>
              <rect width="970" height="250" x="0" y="0" fill="url(#SvgjsLinearGradient1025)"></rect>
              <path d="M970 0L663.5799999999999 0L970 124.77z" fill="rgba(255, 255, 255, .1)"></path>
              <path
                d="M663.5799999999999 0L970 124.77L970 152.05L521.5799999999999 0z"
                fill="rgba(255, 255, 255, .075)"
              ></path>
              <path
                d="M521.5799999999999 0L970 152.05L970 198.86L338.3499999999999 0z"
                fill="rgba(255, 255, 255, .05)"
              ></path>
              <path
                d="M338.35 0L970 198.86L970 231.35000000000002L152.01000000000002 0z"
                fill="rgba(255, 255, 255, .025)"
              ></path>
              <path d="M0 250L112.52 250L0 214.54z" fill="rgba(0, 0, 0, .1)"></path>
              <path d="M0 214.54L112.52 250L163.55 250L0 208.03z" fill="rgba(0, 0, 0, .075)"></path>
              <path d="M0 208.03L163.55 250L622.48 250L0 183.04z" fill="rgba(0, 0, 0, .05)"></path>
              <path
                d="M0 183.04000000000002L622.48 250L755.96 250L0 121.05000000000001z"
                fill="rgba(0, 0, 0, .025)"
              ></path>
            </g>
            <defs>
              <mask id="SvgjsMask1024">
                <rect width="970" height="250" fill="#ffffff"></rect>
              </mask>
              <linearGradient
                x1="18.56%"
                y1="-72%"
                x2="81.44%"
                y2="172%"
                gradientUnits="userSpaceOnUse"
                id="SvgjsLinearGradient1025"
              >
                <stop className="colorBannerCero" offset="0"></stop>
                <stop className="colorBannerUno" offset="1"></stop>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="max__container">
          <div className="banner_topMargen">
            <div className="hero_gred">
              <div className="hero_card">
                <h1 className="hero_h1">
                  <span className="hero_h1-hi">{t('hi')}</span>
                  <br />
                  <span className="hero_h1-name">{t('name')}</span>
                  <br />
                  <span className="hero_h1-dev">{t('dev')}</span>
                </h1>
              </div>
              <div className="hero_imgGred">
                <img className="hero_img" src="/assets/VectorsHero.svg" layout="responsive" width={643} height={584} />
              </div>
            </div>
          </div>
        </div>
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
          position: relative;
          min-height: 100vh;
        }
        .banner_background {
          position: absolute;
          width: 100%;
          height: 100vh;
        }
        .banner_topMargen {
          margin-top: 6rem;
        }
        .hero_gred {
          display: grid;
          grid-template-columns: 45% auto;
          align-items: center;
          height: calc(100% - 6rem); /** //!! Importan 82px size .banner_topMargen: */
        }

        .hero_img {
          width: 100%;
          height: auto;
        }
        .hero_card {
        }
        .hero_h1 {
          font-size: 3rem;
          font-weight: 300;
          line-height: 1.1;
          border-radius: 1rem;
          padding: 3rem 2rem;
          background: var(--colorCardBackground);
        }

        .hero_h1-hi {
          color: var(--colorMun);
        }

        .hero_h1-name {
          font-family: 'Grechen Fuemen', cursive;
          font-size: 5rem;
        }
        .hero_h1-dev {
          color: var(--colorViolet);
          font-style: italic;
        }

        .hero_imgGred {
          padding: 0rem 0rem 0rem 1rem;
          transform: rotateY(-34deg) rotateX(15deg);
          transform-origin: center;
          -webkit-box-reflect: right -202px -webkit-gradient(
              linear,
              left top,
              left bottom,
              from(transparent),
              to(rgba(255, 255, 255, 0.5))
            );
          transition: all 1s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
          animation-duration: 1s;
        }

        .hero_imgGred:hover {
          transform: rotateY(0deg) rotateX(0deg);
          -webkit-box-reflect: right -625px -webkit-gradient(
              linear,
              left top,
              left bottom,
              from(transparent),
              to(rgba(255, 255, 255, 0.5))
            );
          animation-iteration-count: 1;
        }

        .colorBannerCero {
          stop-color: var(--colorBanner0);
        }
        .colorBannerUno {
          stop-color: var(--colorBanner1);
        }
        @media (max-width: 654px) {
          .hero_gred {
            grid-template-columns: auto;
            text-align: center;
            align-items: start;
            height: 100%;
          }
          .hero_card {
            align-self: center;
          }
          .hero_h1 {
            font-size: 7vw;
          }
          .hero_h1-name {
            font-size: 13vw;
          }

          .hero_imgGred {
            padding: 0rem 0rem 0rem 0rem;
            -webkit-box-reflect: unset;
            align-self: center;
}
          }
          .hero_imgGred:hover {
            -webkit-box-reflect: unset;
          }
        }
      `}</style>
    </>
  )
}
