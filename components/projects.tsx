import { useTranslation } from 'next-i18next'
import Image from 'next/image'
export default function Projects() {
  const { t } = useTranslation('common')
  return (
    <>
      <section className="container">
        <div id="Projects" className="max__container ">
          <div className="container_Margen">
            <div className="Project_card">
              <h2 className="Project_h2">{t('projectsT')}</h2>

              <div className="Project_subCardGrid">
                <div className="swipe-container">
                  <div className="swipe-element">
                    <div className="Project_subCard">
                      <h3>P1</h3>
                    </div>
                    <picture></picture>
                    <div className="picture_content">Hola</div>
                  </div>

                  <div className="swipe-element">
                    <div className="Project_subCard">
                      <h3>P2</h3>
                      <picture></picture>
                      <div className="picture_content">Hola</div>
                    </div>
                  </div>
                  <div className="swipe-element">
                    <div className="Project_subCard">
                      <h3>Ifswitch</h3>
                      <picture>
                        <Image
                          src="/assets/img/projects/www.ifswitch.com.webp"
                          alt="Webpage ifswitch.com"
                          width={375}
                          height={765}
                          layout="responsive"
                        />
                        <div className="picture_content">
                          <div className="picture_contentGrid">
                            <div>Hola</div>
                            <div className="picture_contentGrid-bottom">
                              <a href="">
                                <button>Live</button>
                              </a>
                              <a href="">
                                <button>Git</button>
                              </a>
                            </div>
                          </div>
                        </div>
                      </picture>
                    </div>
                  </div>
                  {/* */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx global>{`
        .swipe-container {
          display: flex;
          overflow: auto;
          overflow-x: scroll;
          scroll-snap-type: x mandatory;
          touch-action: auto;
        }
        /* scrollbar should be hidden */
        .swipe-container::-webkit-scrollbar {
        }
        /* main element should always snap into view */
        .swipe-element {
          scroll-snap-align: start;
          margin-bottom: 2rem;
        }
      `}</style>
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
          max-width: var(--max-widthContainer);
        }

        .Project_card {
          border-radius: 1rem;
          padding: 4% 0%;
          background: var(--colorCard2Background);
          height: fit-content;
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
          user-select: none;
        }
        .Project_subCardGrid {
        display: grid;
        }
        .picture_content {
          background: #000000ab;
          position: absolute;
          z-index: 1;
          width: 87%;
          height: 0;
          top: 0;
          border-radius: 1rem;
          margin: 4.3rem 0rem 0rem 0rem;
          padding: 0.5rem;
          backdrop-filter: blur(3px);
          opacity: 0;
          transition: 0.4s;
          color: var(--colorWhite);
        }
        picture:hover > .picture_content {
          display: block;
          width: 87%;
          height: 82.5%;
          opacity: 1;
        }

        button {
          color: var(--colorTextHeader);
          border-radius: var(--borderRadius_buttom);
          padding: 0.2rem 1rem;
          border: none;
          min-width: 5rem;
          background: var(--colorButtonBlack);
          cursor: pointer;
        }

        .picture_contentGrid {
          display: grid;
          grid-template-columns: auto ;
          grid-template-rows: 90% min-content;
          height: 100%;
        }

        .picture_contentGrid-bottom {
          display: flex;
          justify-content: space-around;
        }

        .Project_subCard {
          border-radius: 1rem;
          padding: 8% 6%;
          height: 100%;
          -webkit-backdrop-filter: blur(5px);
          backdrop-filter: blur(5px);
          margin: 0 0.5rem; 
          width: 15rem;
          margin-left: 1.4rem;
        }

         .Project_subCard:nth-child(2n) {
          background: var(--backgroundSubCardPar);
        }

        .Project_subCard:nth-child(2n+1) {
          background: var(--backgroundSubCardInpar);
        }


       picture {
          display: block;
          width: 100%;
          user-select: none;
          border-radius: 1rem;
          overflow: hidden;
        }



        @media (max-width: 834px) {
          .Project_card {
            background-image:
              radial-gradient(circle at 50% 25%, var(--colorB3Gradient) 0%, transparent 74%),
              radial-gradient(circle at 50% 98%, var(--colorB1Gradient) 0%, transparent 57%);
          }
          p {
            font-size: 1rem;
          }

          .container_Margen {

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
