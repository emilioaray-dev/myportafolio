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
                <h2 className="Project_card-title">{t('projectsT')}</h2>

                <Swiper
                  slidesPerView={1}
                  spaceBetween={1}
                  breakpoints={{
                    320: {
                      slidesPerView: 1.3,
                    },
                    640: {
                      slidesPerView: 2.5,
                    },
                    768: {
                      slidesPerView: 3.5,
                    },
                    1024: {
                      slidesPerView: 4.5,
                    },
                    1280: {
                      slidesPerView: 5.5,
                    },
                    1440: {
                      slidesPerView: 3.5,
                    },
                  }}
                >
                  <SwiperSlide>
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
                        <div className="picture_content">
                          <div className="picture_contentGrid">
                            <div className="picture_grid-text">
                              <strong>Ifswitch</strong>. Es un Proyecto de IOT donde he creado tanto la pagina web, asi
                              como el Hardware de IOT, programación y desarrollo.
                              <p>
                                Esta diseñado para detectar presencia de agua en la red para encender y apagar
                                automáticamente una bomba y monitorear niveles de tanque o tinaco, compatible con MQTT y
                                HomeAssistant.
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
                        </div>
                      </picture>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="Project_cardsProjects">
                      <h3 className="Project_cardsProjects-title">VuestroMenu</h3>
                      <picture className="Picture_vuestromenu">
                        <Image
                          src="/assets/img/projects/vuestromenu_375x667.webp"
                          alt="Webpage vuestromenu.com"
                          width={375}
                          height={667}
                          layout="responsive"
                        />
                        <div className="picture_content">
                          <div className="picture_contentGrid">
                            <div className="picture_grid-text">
                              <strong>Vuestromenu,</strong> es el desarrollo de una PWA de menu digitales para
                              restaurantes, siendo estos autoadministrable, creado con NEXTjs con (ISR) Incremental
                              Static Regeneration, usando como cms notion.so.
                              <p>
                                Otorgándole la versatilidad al cliente de que pueda hacer CRUD en vivo de sus platos con
                                la velocidad de una pagina estática.
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
                        </div>
                      </picture>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
                    <div className="Project_cardsProjects">
                      <h3 className="Project_cardsProjects-title">Don Remolo</h3>
                      <picture className="Picture_donRemolo">
                        <Image
                          src="/assets/img/projects/donRemolo_375x667.webp"
                          alt="Webpage DonRemolo"
                          width={375}
                          height={667}
                          layout="responsive"
                        />
                        <div className="picture_content">
                          <div className="picture_contentGrid">
                            <div className="picture_grid-text">
                              <strong>Don Remolo,</strong> es un portal para menu de restaurante, en el presente caso
                              una Pizzeria, la cual sigue en desarrollo realizada entre el equipo #87 de idforideas,
                              donde el reto personal, el cual ha sido logrado es el de crear un portal con router
                              dinamico que se auto regenera como paginas estáticas una vez realizado el fetch usando
                              NEXTjs para dicho feature.
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
                        </div>
                      </picture>
                    </div>
                  </SwiperSlide>

                  <SwiperSlide>
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
                        <div className="picture_content">
                          <div className="picture_contentGrid">
                            <div className="picture_grid-text">
                              <strong>movil5.</strong> Es la pagina web creada por mi persona de la empresa movil5
                              Panama, donde he podido colaborar con ellos remotamente como front developer por mas de 5
                              años.
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
                        </div>
                      </picture>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
              {/* */}
            </div>
          </div>
        </div>
      </section>
      <style jsx global>{``}</style>
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
          align-items: center;
        }
        .container_Margen {

          width: 100%;
          max-width: var(--max-widthContainer);
        }
        .Project_card {
          border-radius: 1rem;
          padding: 2rem 0rem;
          background: var(--colorCard2Background);
          max-height: 100vh;
          background-image:
            radial-gradient(circle at 17% 83%, var(--colorB3Gradient) 0%, transparent 74%) ,
            radial-gradient(circle at 60% 23%, var(--colorB1Gradient) 0%, transparent 120%);
        }
        .Project_card-title {
          font-size: 3rem;
          font-weight: 300;
          line-height: 1.1;
          text-align: center;
          margin-block-end: 2rem;
          font-weight: 600;
          font-family: 'Grechen Fuemen', cursive;
        }
        /* End Card and Card Title */

        /* Start SubCard Projects */

        .cardsProject_grid {
          display: block;
          width: 100vw;
          max-width: var(--max-widthContainer);
          padding: 0 1rem;
        }
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
        .Project_cardsProjects:nth-child(2n+1) {
          background: var(--backgroundSubCardInpar);
        }
        .Project_cardsProjects-title {
          font-family: Roboto, sans-serif, "Helvetica Neue", "Lucida Grande", Arial;
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
          height: 95%;
          user-select: none;
          border-radius: 1.2rem;
          overflow: hidden;
          margin-bottom: -4rem;
        }

        .Picture_Ifswitch {
          height: 67.5%;
        }
        p {
          margin-top: 1rem;
        }

        .Picture_vuestromenu {
          height: 65%;
        }

        .Picture_donRemolo {
          height: 59.99%;
        }

        .Picture_movil5  {
           height: 74.4%;
        }

        /* Start Pictore hover Description 000000ab */
        .picture_content {
          display: grid;
          transform: translateY(-100%);
          background: #000000ab;
          width: 100%;
          height: 0%;
          border-radius: 1rem;
          -webkit-backdrop-filter: blur(3px);
          backdrop-filter: blur(3px);
          opacity: 0;
          transition: 0.4s;
          color: var(--colorWhite);
          /*
          position: absolute;
          z-index: 1;
          top: 0;
          margin: 3.5rem 0rem 0rem 0rem;
          padding: 0.5rem;
          max-width: 13rem;*/
        }
        picture:hover > .picture_content {
          display: block;
          width: 100%;
          height: 100%;
          opacity: 1;
        }
        button {
          color: var(--colorTextHeader);
          border-radius: var(--borderRadius_buttom);
          padding: 0.2rem 1rem;
          border: none;
          /* min-width: 5rem; */
          background: var(--colorButtonBlack);
          cursor: pointer;
          
        }
        h4 {
           background: linear-gradient(230deg, rgb(68 51 238), rgb(255 51 85));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .picture_contentGrid {
          display: grid;
          grid-template-columns: auto ;
          grid-template-rows: 90% min-content;
          height: 100%;
        }

        .picture_grid-text {
          padding: 1rem;
          height: 100%;
        }
        .picture_contentGrid-bottom {
          display: flex;
          justify-content: space-around;
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
