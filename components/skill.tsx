import { useTranslation } from 'next-i18next'

export default function Skill() {
  const { t } = useTranslation('common')

  return (
    <>
      <section className="container">
        <div id="Skill" className="max__container container_Margen">
          <div className="Skill_card">
            <h2 className="Skill_h2">{t('skillsT')}</h2>

            <div className="Skill_subCardGrid">
              <div className="Skill_subCard">
                <h3>{t('skillCore')}</h3>
                <div className="pictureGrid">
                  <picture>
                    <img
                      src="/assets/img/logos/01html5Logo.svg"
                      width="45px"
                      height="auto"
                      alt={`${t('html5')}`}
                      title={`${t('html5')}`}
                    />
                  </picture>
                  <picture>
                    <img
                      src="/assets/img/logos/02css3Logo.svg"
                      width="45px"
                      height="auto"
                      alt={`${t('css3')}`}
                      title={`${t('css3')}`}
                    />
                  </picture>
                  <picture>
                    <img
                      src="/assets/img/logos/03jsLogo.svg"
                      width="45px"
                      height="auto"
                      alt="JavaScript"
                      title="JavaScript"
                    />
                  </picture>
                  <picture className="pictureCenter">
                    <img
                      src="/assets/img/logos/04typescriptLogo.svg"
                      width="65px"
                      height="auto"
                      alt="TypeScript"
                      title="TypeScript"
                    />
                  </picture>
                </div>
              </div>

              <div className="Skill_subCard">
                <h3>Libraries & Framework</h3>
                <div className="pictureGrid">
                  <picture>
                    <img src="/assets/img/logos/05reactLogo.svg" width="45px" height="auto" alt="React" title="React" />
                  </picture>
                  <picture>
                    <img
                      src="/assets/img/logos/06nextjsLogo.svg"
                      width="75px"
                      height="auto"
                      alt="NextJs"
                      title="NextJs"
                    />
                  </picture>
                  <picture>
                    <img
                      src="/assets/img/logos/07reactNativeLogo.svg"
                      width="75px"
                      height="auto"
                      alt="React Native"
                      title="React Native"
                    />
                  </picture>
                  <picture>
                    <img
                      src="/assets/img/logos/08tailwinLogo.svg"
                      width="55px"
                      height="auto"
                      alt="tailwind CSS"
                      title="tailwind CSS"
                    />
                  </picture>
                  <picture>
                    <img
                      src="/assets/img/logos/09styledComponentLogo.svg"
                      width="95px"
                      height="auto"
                      alt="Styled Components"
                      title="Styled Components"
                    />
                  </picture>
                  <picture>
                    <img
                      src="/assets/img/logos/10boostrapLogo.svg"
                      width="50px"
                      height="auto"
                      alt="Bootstrap svh"
                      title="Bootstrap"
                    />
                  </picture>
                </div>
              </div>

              <div className="Skill_subCard">
                <h3>{t('devTools')}</h3>
                <div className="pictureGrid">
                  <picture>
                    <img src="/assets/img/logos/11gitLogo.svg" width="45px" height="auto" alt="Git" title="Git" />
                  </picture>
                  <picture>
                    <img
                      src="/assets/img/logos/12prettierLogo.svg"
                      width="45px"
                      height="auto"
                      alt="Prettier"
                      title="Prettier"
                    />
                  </picture>
                  <picture>
                    <img
                      src="/assets/img/logos/13eslintLogo.svg"
                      width="45px"
                      height="auto"
                      alt="ESLint"
                      title="ESLint"
                    />
                  </picture>
                  <picture>
                    <img
                      src="/assets/img/logos/14nodejsLogo.svg"
                      width="65px"
                      height="auto"
                      alt="nodeJS"
                      title="nodeJS"
                      style={{ marginTop: '1rem' }}
                    />
                  </picture>
                  <picture>
                    <img
                      src="/assets/img/logos/15mongodbLogo.svg"
                      width="75px"
                      height="auto"
                      alt="mongoDB"
                      title="mongoDB"
                      style={{ marginTop: '1rem' }}
                    />
                  </picture>
                  <picture>
                    <img
                      src="/assets/img/logos/16vercelLogo.svg"
                      width="70px"
                      height="auto"
                      alt="Vercel"
                      title="Vercel"
                      style={{ marginTop: '1rem' }}
                    />
                  </picture>
                </div>
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
          min-height: calc(100vh + var(--container_topMargin));
          background: repeating-linear-gradient(
            120deg,
            #7c7c7c15 0px,
            #7c7c7c15 3px,
            rgba(255, 255, 255, 0) 3px,
            rgba(255, 255, 255, 0) 5.9%
          );
        }

        .max__container {
          display: grid;
          margin: 0 auto;
          width: 100%;
          max-width: var(--max-widthContainer);
          padding: 1rem;
        }
        .container_Margen {
          display: grid;
          align-items: center;
          margin-top: var(--container_topMargin);
          /*
          margin-top: var(--container_topMargin);
          padding-bottom: calc(var(--container_topMargin) * 1.5);
          */
        }

        .Skill_card {
          border-radius: 1rem;
          padding: 4% 6%;
          background: var(--colorCard2Background);
          height: fit-content;
          /* 
          margin-top: var(--container_topMargin);
          */
          background-image:
            radial-gradient(circle at 17% 83%, var(--colorB3Gradient) 0%, transparent 74%) ,
            radial-gradient(circle at 60% 23%, var(--colorB1Gradient) 0%, transparent 120%);
        }
        .Skill_h2 {
          font-size: 3rem;
          font-weight: 300;
          line-height: 1.1;
          text-align: center;
          margin-block-end: 2rem;
          font-weight: 600;
          font-family: 'Grechen Fuemen', cursive;
        }

        h3 {
          font-family: Roboto, sans-serif, "Helvetica Neue", "Lucida Grande", Arial;
          font-stretch: condensed;
          font-weight: 600;
          text-align: center;
          min-height: 3rem;
          color: var(--colorWhite);
        }
        .Skill_subCardGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
          gap: 1rem;
        }

        .Skill_subCard {
          border-radius: 1rem;
          padding: 8% 6%;
          min-height: 17rem;
          background: var(--backgroundSubCard);
          -webkit-backdrop-filter: blur(5px);
          backdrop-filter: blur(5px);
        }

        .pictureGrid {
          display: grid;
          gap: 1rem;
          grid-template-columns: repeat(auto-fit, minmax(4rem, 1fr));
          align-items: center;
          justify-items: center;
          margin-top: 1rem;
        }

        .pictureCenter {
          grid-column-start: 1;
          grid-column-end: 4;
        }

        picture {
          display: grid;
          height: 100%;
          align-items: center;
        }
        p {
          font-size: 1.2rem;
          margin-block-end: 1em;
        }

        @media (max-width: 834px) {
          .container {
            background: repeating-linear-gradient(
              120deg,
              #7c7c7c15 0px,
              #7c7c7c15 3px,
              rgba(255, 255, 255, 0) 3px,
              rgba(255, 255, 255, 0) 7.04%
            );
          }
          .Skill_card {
            background-image:
              radial-gradient(circle at 50% 25%, var(--colorB3Gradient) 0%, transparent 74%),
              radial-gradient(circle at 50% 98%, var(--colorB1Gradient) 0%, transparent 57%);
          }
          p {
            font-size: 1rem;
          }

          .container_Margen {
            margin-top: calc(var(--container_topMargin) + 2rem);
          }
        }
        @media (min-width: 834px) and (max-width: 1280px) {
          .container {
            background: repeating-linear-gradient(
              120deg,
              #7c7c7c15 0px,
              #7c7c7c15 3px,
              rgba(255, 255, 255, 0) 3px,
              rgba(255, 255, 255, 0) 7vw
            );
          }
 
          
        
      `}</style>
    </>
  )
}
