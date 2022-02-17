import { useTranslation } from 'next-i18next'

export default function Contact() {
  const { t } = useTranslation('common')

  return (
    <>
      <section className="container">
        <div id="Contact" className="max__container container_Margen">
          <div className="Contact_card">
            <h2 className="Contact_h2">{t('contactT')}</h2>
          </div>
        </div>
      </section>
      <style jsx>{`
        .container {
          display: grid;
          width: 100%;
          overflow: hidden;
          background: repeating-linear-gradient(
            135deg,
            #7c7c7c15 0px,
            #7c7c7c15 3px,
            rgba(255, 255, 255, 0) 3px,
            rgba(255, 255, 255, 0) 8.555%
          );
        }

        .max__container {
          display: grid;
          margin: 0 auto;
          width: 100%;
          max-width: var(--max-widthContainer);
        }

        .container_Margen {
          display: grid;
          align-items: center;
        }

        .Contact_card {
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

        .Contact_h2 {
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

        .Contact_subCardGrid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(13rem, 1fr));
          gap: 1rem;
        }

        .Contact_subCard {
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
              rgba(255, 255, 255, 0) 20%
            );
          }

          .Contact_card {
            background-image:
              radial-gradient(circle at 50% 25%, var(--colorB3Gradient) 0%, transparent 74%),
              radial-gradient(circle at 50% 98%, var(--colorB1Gradient) 0%, transparent 57%);
          }
          p {
            font-size: 1rem;
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
