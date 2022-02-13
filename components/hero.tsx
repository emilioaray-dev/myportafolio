import Link from 'next/link'
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
      <section className="container">
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
          <div className="max__container">
            <div className="banner_topMargen">
              <div>{t('example')}</div>
              <div>
                {t('current')}: {t(darkTheme)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        .banner_background > svg {
          position: absolute;
          width: 100%;
          height: 100vh;
        }

        .banner_topMargen {
          position: absolute;
          margin-top: 82px;
        }
        .colorBannerCero {
          stop-color: var(--colorBanner0);
        }
        .colorBannerUno {
          stop-color: var(--colorBanner1);
        }
      `}</style>
    </>
  )
}
