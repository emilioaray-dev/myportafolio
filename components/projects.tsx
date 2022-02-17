import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
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
                <Carousel
                  centerMode={false}
                  swipeable={true}
                  emulateTouch={true}
                  infiniteLoop={false}
                  showIndicators={false}
                  showStatus={true}
                >
                  <div className="Project_subCard">
                    <h3>P1</h3>
                  </div>

                  <div className="Project_subCard">
                    <h3>P2</h3>
                  </div>

                  <div className="Project_subCard">
                    <h3>Ifswitch</h3>

                    <Image
                      src="/assets/img/projects/www.ifswitch.com.webp"
                      alt="Webpage ifswitch.com"
                      width={375}
                      height={765}
                      layout="responsive"
                    />
                  </div>

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
                    </picture>
                  </div>

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
                    </picture>
                  </div>

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
                    </picture>
                  </div>
                </Carousel>
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
        }
        /* scrollbar should be hidden */
        .swipe-container::-webkit-scrollbar {
          display: none;
        }
        /* main element should always snap into view */
        .swipe-element {
          scroll-snap-align: start;
          font-family: sans-serif;
          padding: 16px;
          background-color: whitesmoke;
        }
        .carousel-root {
          display: grid;
          outline: none;
        }
        .carousel .slider-wrapper.axis-horizontal .slider .slide {
          /*
          min-width: fit-content !important;
          */
        }
        .carousel .control-arrow,
        .carousel.carousel-slider .control-arrow {
          opacity: 1;
          margin-right: -3px;
          -webkit-backdrop-filter: blur(5px);
          backdrop-filter: blur(5px);
          background: #5479ff61;
          width: 2.5rem;
        }

        button[aria-label='previous slide / item'] {
          border-radius: 0px 15px 15px 0px;
        }

        .slider-wrapper,
        button[aria-label='next slide / item'] {
          border-radius: 15px 0px 0px 15px;
        }
        .carousel .carousel-status {
          z-index: 2;
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
          /* max-width: var(--max-widthContainer); */
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
        /* 
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
          gap: 1rem;
        */
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
