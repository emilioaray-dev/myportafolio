import { useTheme } from 'next-themes'
import { useTranslation } from 'next-i18next'

export default function About() {
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
      <section id="About" className="container">
        <div className="max__container container_Margen">
          <div className="About_card">
            <h2 className="About_h2">{t('about')}</h2>
            <p>
              {t('hi')} <span className="bold">{t('name')}</span>, {t('aboutP1')}
            </p>
            <p>{t('aboutP2')}</p>
            <p>{t('aboutP3')}</p>
            <p>{t('aboutP4')}</p>
          </div>
        </div>
      </section>
      <style jsx>{`
        .container {
          display: grid;
          width: 100%;
          overflow: hidden;
          min-height: calc(100vh + var(--container_topMargin));
          background-color: rgba(255, 255, 255, 0);
          background: repeating-linear-gradient(
            45deg,
            #7c7c7c15 0px,
            #7c7c7c15 3px,
            rgba(255, 255, 255, 0) 3px,
            rgba(255, 255, 255, 0) 5%
          );
        }

        .max__container {
          display: grid;
          margin: 0 auto;
          width: 100%;
          max-width: var(--max-widthContainer);
          padding: 0 1rem;
        }
        .container_Margen {
          display: grid;
          align-items: center;
          /*
          margin-top: var(--container_topMargin);
          padding-bottom: calc(var(--container_topMargin) * 1.5);
          */
        }
        .bold {
          font-weight: 600;
          font-style: italic;
        }
        .About_card {
          border-radius: 1rem;
          padding: 8% 6%;
          background: var(--colorCard2Background);
          height: fit-content;
          background-image: radial-gradient(circle at 17% 53%, rgb(68 51 238 / 32%) 0%, transparent 57%),
            radial-gradient(circle at 90% 53%, rgb(255 130 51 / 32%) 0%, transparent 40%),
            radial-gradient(circle at 50% 44%, rgb(255 51 85 / 32%) 0%, transparent 74%);
        }
        .About_h2 {
          font-size: 3rem;
          font-weight: 300;
          line-height: 1.1;
          text-align: center;
          margin-block-end: 2rem;
          font-weight: 600;
          font-family: 'Grechen Fuemen', cursive;
        }
        p {
          font-size: 1.2rem;
          margin-block-end: 1em;
        }

        @media (max-width: 654px) {
          .About_card {
            background-image: radial-gradient(circle at 50% 25%, rgb(68 51 238 / 32%) 0%, transparent 57%),
              radial-gradient(circle at 50% 98%, rgb(255 130 51 / 32%) 0%, transparent 35%),
              radial-gradient(circle at 50% 53%, rgb(255 51 85 / 32%) 0%, transparent 74%);
          }
          p {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  )
}
