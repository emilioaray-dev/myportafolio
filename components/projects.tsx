import { useTranslation } from 'next-i18next'
import Image from 'next/image'
// Import Swiper React components
import { Virtual } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/virtual'

export default function Projects() {
  const { t } = useTranslation('common')

  // Create array with 1000 slides
  const slides = Array.from({ length: 1000 }).map((el, index) => `Slide ${index + 1}`)

  return (
    <>
      <section className="container">
        <div id="Projects" className="max__container ">
          <div className="container_Margen">
            <div className="cardsProject_grid">
              <div className="Project_card">
                <div className="Project_card-Divtitle">
                  <h2 className="Project_card-title">{t('projectsT')}</h2>
                </div>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={1}
                  breakpoints={{
                    320: {
                      slidesPerView: 1.2,
                    },
                    640: {
                      slidesPerView: 2.1,
                    },
                    768: {
                      slidesPerView: 2.5,
                    },
                    1024: {
                      slidesPerView: 3.5,
                    },
                    1280: {
                      slidesPerView: 3.5,
                    },
                    1440: {
                      slidesPerView: 3.5,
                    },
                  }}
                >
                  <SwiperSlide id={'uno'}>
                    <div className="Project_cardsProjects">
                      <h3 className="Project_cardsProjects-title">Ifswitch</h3>

                      <picture className="Picture_Ifswitch">
                        <Image
                          src="/assets/img/projects/ifswitchre.webp"
                          alt="Webpage ifswitch.com"
                          width={375}
                          height={667}
                          layout="responsive"
                        />
                      </picture>
                    </div>
                    <div className="picture_contentGrid">
                      <div className="picture_grid-text">
                        <strong>Ifswitch</strong>. Es un Proyecto de IOT donde he creado tanto la pagina web, asi como
                        el Hardware de IOT, programación y desarrollo.
                        <p>
                          Esta diseñado para detectar presencia de agua en la red para encender y apagar automáticamente
                          una bomba y monitorear niveles de tanque o tinaco, compatible con MQTT y HomeAssistant.
                        </p>
                      </div>
                      <div className="picture_contentGrid-bottom">
                        <a href="https://www.ifswitch.com/" target="_blank" rel="noopener noreferrer">
                          <button>Web</button>
                        </a>
                        <a
                          href="https://github.com/emilioaray-dev/ifswitch.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button>
                            <h4>Git</h4>
                          </button>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide id={'dos'}>
                    <div className="Project_cardsProjects">
                      <h3 className="Project_cardsProjects-title">VuestroMenu</h3>

                      <picture className="Picture_vuestromenu">
                        <Image
                          src="/assets/img/projects/vuestromenu_375x667.webp"
                          alt="Webpage Vuestromenu.com"
                          width={375}
                          height={667}
                          layout="responsive"
                        />
                      </picture>
                    </div>
                    <div className="picture_contentGrid">
                      <div className="picture_grid-text">
                        <strong>Vuestromenu,</strong> es el desarrollo de una PWA de menu digitales para restaurantes,
                        siendo estos autoadministrable, creado con NEXTjs con (ISR) Incremental Static Regeneration,
                        usando como cms notion.so.
                        <p>
                          Otorgándole la versatilidad al cliente de que pueda hacer CRUD en vivo de sus platos con la
                          velocidad de una pagina estática.
                        </p>
                      </div>
                      <div className="picture_contentGrid-bottom">
                        <a href="https://www.vuestromenu.com/" target="_blank" rel="noopener noreferrer">
                          <button>Web</button>
                        </a>
                        <a
                          href="https://github.com/emilioaray-dev/apivuestromenu"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button>
                            <h4>Git</h4>
                          </button>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide id={'tres'}>
                    <div className="Project_cardsProjects">
                      <h3 className="Project_cardsProjects-title">Don Remolo</h3>

                      <picture className="Picture_donRemolo">
                        <Image
                          src="/assets/img/projects/donRemolo_375x667.webp"
                          alt="Webpage Vuestromenu.com"
                          width={375}
                          height={667}
                          layout="responsive"
                        />
                      </picture>
                    </div>
                    <div className="picture_contentGrid">
                      <div className="picture_grid-text">
                        <strong>Don Remolo,</strong> es un portal para menu de restaurante, en el presente caso una
                        Pizzeria, la cual sigue en desarrollo realizada entre el equipo #87 de idforideas, donde el reto
                        personal, el cual ha sido logrado es el de crear un portal con router dinamico que se auto
                        regenera como paginas estáticas una vez realizado el fetch usando NEXTjs para dicho feature.
                        <p>
                          Como siguiente reto se desea implementar “SWR” para los fetch para lograr un mejor
                          performance.
                        </p>
                      </div>
                      <div className="picture_contentGrid-bottom">
                        <a href="https://donremolo-next.vercel.app/" target="_blank" rel="noopener noreferrer">
                          <button>Web</button>
                        </a>
                        <a
                          href="https://github.com/emilioaray-dev/donremolo-next"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button>
                            <h4>Git</h4>
                          </button>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide id={'cuatro'}>
                    <div className="Project_cardsProjects">
                      <h3 className="Project_cardsProjects-title">movil5</h3>
                      <picture className="Picture_movil5">
                        <Image
                          src="/assets/img/projects/movil5_375x667.webp"
                          alt="Webpage movil5.com"
                          width={375}
                          height={667}
                          layout="responsive"
                        />
                      </picture>
                    </div>
                    <div className="picture_contentGrid">
                      <div className="picture_grid-text">
                        <strong>movil5.</strong> Es la pagina web creada por mi persona de la empresa movil5 Panama,
                        donde he podido colaborar con ellos remotamente como front developer por mas de 5 años.
                        <p>Dicho desarrollo fue generado con Gatsby.</p>
                      </div>
                      <div className="picture_contentGrid-bottom">
                        <a href="https://www.movil5.com/es/" target="_blank" rel="noopener noreferrer">
                          <button>Web</button>
                        </a>
                        <a
                          href="https://github.com/emilioaray-dev/movil5.com"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <button>
                            <h4>Git</h4>
                          </button>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`
        /*
        div {
          border: 1px solid red;
        }
        */
        .container {
          display: grid;
          width: 100%;
          overflow: hidden;
          min-height: calc(100vh + var(--container_topMargin));
          background: repeating-linear-gradient(
            45deg,
            var(--gBackground1) 0px,
            var(--gBackground1) 3px,
            rgba(255, 255, 255, 0) 3px,
            rgba(255, 255, 255, 0) 6%
          );
        }
        .max__container {
          display: grid;
          margin: 0 auto;
          width: 100%;
          max-width: var(--max-widthContainer);
          align-items: center;
        }
        .container_Margen {
          width: 100%;
          max-width: var(--max-widthContainer);
        }

        .cardsProject_grid {
          display: block;
          width: 100vw;
          max-width: var(--max-widthContainer);
          padding: 0 1rem;
        }
        .Project_card {
          border-radius: 1rem;
          padding: 0rem 0rem 2rem 0rem;
          background: var(--colorCard2Background);
          max-height: 100vh;
          background-image: radial-gradient(circle at 17% 83%, var(--colorB3Gradient) 0%, transparent 74%),
            radial-gradient(circle at 60% 23%, var(--colorB1Gradient) 0%, transparent 120%);
        }

        .Project_card-Divtitle {
          display: grid;
          align-items: center;
          margin-bottom: 2rem;
          padding-top: 2rem;
        }
        .Project_card-title {
          font-size: 3rem;
          margin-block-start: 0em;
          margin-block-end: 0em;
          text-align: center;
          font-weight: 600;
          font-family: 'Grechen Fuemen', cursive;
        }
        /* End Card and Card Title */

        /* Start SubCard Projects */

        .Project_cardsProjects {
          display: grid;
          border-radius: 1rem;
          padding: 1rem 1rem;
          min-height: 23rem;
          max-height: 600px;
          -webkit-backdrop-filter: blur(5px);
          backdrop-filter: blur(5px);
          margin: 0 0.2rem;
          justify-items: center;
          max-width: 100%;
        }
        .Project_cardsProjects:nth-child(2n) {
          background: var(--backgroundSubCardPar);
        }
        .Project_cardsProjects:nth-child(2n + 1) {
          background: var(--backgroundSubCardInpar);
        }
        .Project_cardsProjects-title {
          font-family: Roboto, sans-serif, 'Helvetica Neue', 'Lucida Grande', Arial;
          font-stretch: condensed;
          font-weight: 600;
          text-align: center;
          min-height: 2.5rem;
          color: var(--colorWhite);
          user-select: none;
        }
        picture {
          display: block;
          width: 100%;
          height: auto;
          user-select: none;
          border-radius: 1.2rem;
          overflow: hidden;
        }

        /* Start Pictore hover Description 000000ab */
        .picture_content {
          display: grid;
        }

        button {
          color: var(--colorTextHeader);
          border-radius: var(--borderRadius_buttom);
          padding: 0.2rem 1rem;
          border: none;
          background: var(--colorButtonBlack);
          cursor: pointer;
        }
        h4 {
          background: linear-gradient(230deg, rgb(68 51 238), rgb(255 51 85));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .picture_contentGrid {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transform: translateY(-100%);
          opacity: 0;
          transition: 0.4s;
          position: absolute;
          height: inherit;
        }

        .picture_contentGrid:hover {
          visibility: visible;
          opacity: 1;
        }

        .picture_grid-text {
          padding: 1rem;
          height: 100%;
          background: #000000ab;
          -webkit-backdrop-filter: blur(3px);
          backdrop-filter: blur(3px);
          border-radius: 1.2rem 1.2rem 0rem 0rem;
        }

        .picture_grid-text + p {
          font-size: 1rem;
        }

        p {
          margin-top: 1rem;
        }

        .picture_contentGrid-bottom {
          display: flex;
          justify-content: space-around;
          background: #000000ab;
          border-radius: 0rem 0rem 1rem 1rem;
        }

        /* iphone 5se */
        /* iphone 5se 6 7 8 */
        @media (aspect-ratio: 375 / 667) {
          .container {
            background: repeating-linear-gradient(
              45deg,
              var(--gBackground1) 0px,
              var(--gBackground1) 3px,
              rgba(255, 255, 255, 0) 3px,
              rgba(255, 255, 255, 0) 59.5px
            );
          }
        }

        /* iphone 6+ 7+ 8+ */
        @media (aspect-ratio: 9 / 16) {
          .container {
            background: repeating-linear-gradient(
              45deg,
              var(--gBackground1) 0px,
              var(--gBackground1) 3px,
              rgba(255, 255, 255, 0) 3px,
              rgba(255, 255, 255, 0) 58.5px
            );
          }
        }

        /* iphone x */
        @media (aspect-ratio: 375 / 812) {
          .container {
            background: repeating-linear-gradient(
              45deg,
              var(--gBackground1) 0px,
              var(--gBackground1) 3px,
              rgba(255, 255, 255, 0) 3px,
              rgba(255, 255, 255, 0) 59.5px
            );
          }
        }

        /* iphone Xr 414/896 */
        @media (aspect-ratio: 207 / 448) {
          .container {
            background: repeating-linear-gradient(
              45deg,
              var(--gBackground1) 0px,
              var(--gBackground1) 3px,
              rgba(255, 255, 255, 0) 3px,
              rgba(255, 255, 255, 0) 63.5px
            );
          }
        }

        /* iphone 12 Pro 390*844*/
        @media (aspect-ratio: 195 / 422) {
          .container {
            background: repeating-linear-gradient(
              45deg,
              var(--gBackground1) 0px,
              var(--gBackground1) 3px,
              rgba(255, 255, 255, 0) 3px,
              rgba(255, 255, 255, 0) 63px
            );
          }
        }

        /* Pixel 5*/
        @media (aspect-ratio: 393 / 851) {
          .container {
            background: repeating-linear-gradient(
              45deg,
              var(--gBackground1) 0px,
              var(--gBackground1) 3px,
              rgba(255, 255, 255, 0) 3px,
              rgba(255, 255, 255, 0) 63.5px
            );
          }
        }

        /* Galaxy s8+*/
        @media (aspect-ratio: 18 / 37) {
          .container {
            background: repeating-linear-gradient(
              45deg,
              var(--gBackground1) 0px,
              var(--gBackground1) 3px,
              rgba(255, 255, 255, 0) 3px,
              rgba(255, 255, 255, 0) 60px
            );
          }
        }

        /* Galaxy s20*/
        @media (aspect-ratio: 412 / 915) {
          .container {
            background: repeating-linear-gradient(
              45deg,
              var(--gBackground1) 0px,
              var(--gBackground1) 3px,
              rgba(255, 255, 255, 0) 3px,
              rgba(255, 255, 255, 0) 65px
            );
          }
        }

        /* Ipad Air*/
        @media (aspect-ratio: 41 / 59) {
          .container {
            background: repeating-linear-gradient(
              45deg,
              var(--gBackground1) 0px,
              var(--gBackground1) 3px,
              rgba(255, 255, 255, 0) 3px,
              rgba(255, 255, 255, 0) 97px
            );
          }
        }

        /* Ipad Amini*/
        @media (aspect-ratio: 3 / 4) {
          .container {
            background: repeating-linear-gradient(
              45deg,
              var(--gBackground1) 0px,
              var(--gBackground1) 3px,
              rgba(255, 255, 255, 0) 3px,
              rgba(255, 255, 255, 0) 86.5px
            );
          }
        }

        /* Samsun A51*/
        @media (aspect-ratio: 206 / 457) {
          .container {
            background: repeating-linear-gradient(
              45deg,
              var(--gBackground1) 0px,
              var(--gBackground1) 3px,
              rgba(255, 255, 255, 0) 3px,
              rgba(255, 255, 255, 0) 65.5px
            );
          }
        }

        @media (max-width: 834px) {
          .Project_card {
            background-image: radial-gradient(circle at 50% 25%, var(--colorB3Gradient) 0%, transparent 74%),
              radial-gradient(circle at 50% 98%, var(--colorB1Gradient) 0%, transparent 57%);
          }
          p {
            font-size: 1rem;
          }

          .container_Margen {
          }
        }
      `}</style>
    </>
  )
}
