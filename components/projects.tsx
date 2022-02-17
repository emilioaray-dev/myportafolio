import { useTranslation } from 'next-i18next'

export default function Projects() {
  const { t } = useTranslation('common')

  return (
    <>
      <section className="container">
        <div id="Projects" className="max__container container_Margen">
          <div className="Project_card">
            <h2 className="Project_h2">{t('projectsT')}</h2>

            <div className="Project_subCardGrid">
              <div className="Project_subCard">
                <h3>P1</h3>
                <div className="pictureGrid"></div>
              </div>

              <div className="Project_subCard">
                <h3>P2</h3>
                <div className="pictureGrid"></div>
              </div>

              <div className="Project_subCard">
                <h3>P3</h3>
                <div className="pictureGrid"></div>
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
            45deg,
            #7c7c7c15 0px,
            #7c7c7c15 3px,
            rgba(255, 255, 255, 0) 3px,
            rgba(255, 255, 255, 0) 6%
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

        .Project_card {
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
        .Project_h2 {
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
        .Project_subCardGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
          gap: 1rem;
        }

        .Project_subCard {
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
/*
          .container {
            background: repeating-linear-gradient(
              45deg,
              #7c7c7c15 0px,
              #7c7c7c15 3px,
              rgba(255, 255, 255, 0) 3px,
              rgba(255, 255, 255, 0) 7.04%
            );
          }
*/
          .Project_card {
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
