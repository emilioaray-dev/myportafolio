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
        <div className="hero2"></div>
        <div className="max__container">
          <div>{t('example')}</div>
          <div>
            {t('current')}: {t(darkTheme)}
          </div>
        </div>
      </section>

      <style jsx>{`
        .hero {
          background: #000;
          height: min-content;
          padding: 1rem 0rem;
        }

        .hero2 {
          /* Background color 
          background-color: rgba(0, 0, 0, 0.3);

          background: linear-gradient(rgba(17, 10, 73, 1) 0%, rgba(0, 0, 0, 1) 100%);
*/
          /* Curved corners 
          border-bottom-left-radius: 50% 30%;
          border-bottom-right-radius: 50% 30%;
*/
          height: 20rem;
        }
      `}</style>
    </>
  )
}
