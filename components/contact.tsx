import { useTranslation } from 'next-i18next'
import Link from 'next/link'

export default function Contact() {
  const { t } = useTranslation('common')

  return (
    <>
      <section className="container">
        <div id="Contact" className="max__container container_Margen">
          <div className="Contact_card">
            <h2 className="Contact_h2">{t('contactT')}</h2>

            <div className="Contact_gridPicture">
              <a target="_blank" href="https://www.linkedin.com/in/celsiusaray/" rel="noopener noreferrer">
                <picture title="Celsius Aray LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 479 119.75">
                    <g id="Capa_2" data-name="Capa 2">
                      <g id="katman_1" data-name="katman 1">
                        <path
                          className="cls-1"
                          d="M470.33,0H368.28a8.9,8.9,0,0,0-9,8.62V111.13c0,4.76,2.72,8.62,7.6,8.62h102c4.89,0,10.1-3.86,10.1-8.62V8.62A8.59,8.59,0,0,0,470.33,0ZM404.87,45.62H421v8.22h.18c2.46-4.43,9.72-8.93,18.69-8.93,17.23,0,22,9.15,22,26.09v31.65H444.78V74.12c0-7.58-3-14.24-10.11-14.24-8.6,0-12.7,5.82-12.7,15.38v27.39H404.86v-57Zm-28.51,57h17.11v-57H376.36Zm19.24-77A10.69,10.69,0,1,1,384.91,15,10.68,10.68,0,0,1,395.6,25.67Z"
                        />
                        <path
                          className="cls-2"
                          d="M342.14,102.65h-16V95.86H326c-3.55,4.12-9.72,7.5-20.18,7.5-14.26,0-26.53-10.73-26.53-29.16,0-17.56,12.1-29.29,27.07-29.29,9.27,0,15,3.3,18.5,7.5H325V17.11h17.11ZM310.66,57.74c-9.78,0-15.28,7-15.28,16.25s5.5,16.54,15.28,16.54S326.18,83.45,326.18,74c0-9.73-5.73-16.25-15.52-16.25Z"
                        />
                        <path
                          className="cls-2"
                          d="M271.78,93.46c-4,5.23-12.35,9.9-25.77,9.9-17.91,0-29.32-11.86-29.32-30.49,0-16.55,10.33-28,29.82-28,16.83,0,27.21,11.05,27.21,30.49a28,28,0,0,1-.31,3.87H232.84l.1,1.76C234.06,86,237.78,92,246.29,92a18.51,18.51,0,0,0,14.84-7.13Zm-14.53-25c.11-6-4.3-12.12-11.26-12.12a13,13,0,0,0-13.16,12.12Z"
                        />
                        <polygon
                          className="cls-2"
                          points="216.69 45.62 196.73 45.62 176.77 68.43 176.77 17.11 159.67 17.11 159.67 102.65 176.77 102.65 176.77 74.14 197.87 102.65 218.06 102.65 193.88 71.47 216.69 45.62"
                        />
                        <path
                          className="cls-2"
                          d="M91.24,45.62h16.12v8.22h.18c2.46-4.43,9.72-8.93,18.69-8.93,17.23,0,22,10.93,22,26.09v31.65H131.15V74.12c0-8.39-3-14.24-10.11-14.24-8.6,0-12.7,6.81-12.7,15.38v27.39H91.23v-57Z"
                        />
                        <path
                          className="cls-2"
                          d="M62.73,102.65H79.84v-57H62.73Zm8.56-66.72A10.26,10.26,0,1,0,61,25.67,10.26,10.26,0,0,0,71.29,35.93Z"
                        />
                        <polygon
                          className="cls-2"
                          points="17.11 17.11 0 17.11 0 102.65 51.32 102.65 51.32 85.54 17.11 85.54 17.11 17.11"
                        />
                      </g>
                    </g>
                  </svg>
                </picture>
              </a>

              <a target="_blank" href="https://github.com/emilioaray-dev" rel="noopener noreferrer">
                <picture title="Celsius Aray GitHub">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 507.86 120">
                    <g id="Capa_2" data-name="Capa 2">
                      <g id="svg2">
                        <g id="layer1">
                          <g id="g3012">
                            <g id="g3014">
                              <g id="g3016">
                                <g id="g3018">
                                  <path
                                    id="path3024"
                                    className="cls-1GitHub"
                                    d="M209.31,54.44H178.24a1.45,1.45,0,0,0-1.45,1.45V71.08a1.46,1.46,0,0,0,1.45,1.46h12.12V91.41s-2.72.93-10.25.93c-8.88,0-21.28-3.25-21.28-30.52S171.75,31,183.87,31c10.49,0,15,1.85,17.89,2.74a1.47,1.47,0,0,0,1.74-1.43L207,17.59a1.36,1.36,0,0,0-.56-1.13c-1.16-.84-8.29-4.82-26.3-4.82-20.74,0-42,8.82-42,51.25s24.36,48.75,44.89,48.75c17,0,27.31-7.27,27.31-7.27.43-.23.47-.83.47-1.1V55.89a1.45,1.45,0,0,0-1.45-1.45"
                                  />
                                  <path
                                    id="path3026"
                                    className="cls-1GitHub"
                                    d="M369.45,16.72A1.44,1.44,0,0,0,368,15.26h-17.5a1.45,1.45,0,0,0-1.45,1.46V50.53H321.79V16.72a1.44,1.44,0,0,0-1.44-1.46h-17.5a1.45,1.45,0,0,0-1.44,1.46v91.55a1.46,1.46,0,0,0,1.44,1.47h17.5a1.45,1.45,0,0,0,1.44-1.47V69.11h27.27l0,39.16a1.46,1.46,0,0,0,1.45,1.47H368a1.46,1.46,0,0,0,1.45-1.47V16.72"
                                  />
                                  <path
                                    id="path3028"
                                    className="cls-1GitHub"
                                    d="M242.33,28.73A11.29,11.29,0,1,0,231,40.13a11.34,11.34,0,0,0,11.29-11.4"
                                  />
                                  <path
                                    id="path3030"
                                    className="cls-1GitHub"
                                    d="M241.07,89V46.7a1.45,1.45,0,0,0-1.44-1.46H222.19a1.68,1.68,0,0,0-1.52,1.63v60.54c0,1.78,1.11,2.31,2.54,2.31h15.72c1.72,0,2.14-.84,2.14-2.33V89"
                                  />
                                  <path
                                    id="path3032"
                                    className="cls-1GitHub"
                                    d="M435.94,45.38H418.58a1.45,1.45,0,0,0-1.45,1.46V91.73A19.6,19.6,0,0,1,406.46,95c-6.26,0-7.92-2.84-7.92-9V46.84a1.45,1.45,0,0,0-1.44-1.46H379.48A1.45,1.45,0,0,0,378,46.84V89c0,18.21,10.15,22.66,24.11,22.66,11.45,0,20.68-6.32,20.68-6.32a36.63,36.63,0,0,0,.64,3.73,1.54,1.54,0,0,0,1.28.79l11.21,0a1.46,1.46,0,0,0,1.44-1.46V46.84a1.45,1.45,0,0,0-1.45-1.46"
                                  />
                                  <path
                                    id="path3034"
                                    className="cls-1GitHub"
                                    d="M476.54,94.9A20.78,20.78,0,0,1,466.44,92V63a23.23,23.23,0,0,1,9-2.92c6.25-.56,12.28,1.33,12.28,16.25C487.69,92.05,485,95.16,476.54,94.9Zm6.85-51.58a32.66,32.66,0,0,0-16.57,4.4v-31a1.44,1.44,0,0,0-1.44-1.46H447.83a1.45,1.45,0,0,0-1.44,1.46v91.55a1.46,1.46,0,0,0,1.45,1.47H460a1.46,1.46,0,0,0,1.27-.78,28.8,28.8,0,0,0,.74-4.22s7.17,6.8,20.76,6.8c15.94,0,25.08-8.09,25.08-36.31s-14.6-31.91-24.47-31.91"
                                  />
                                  <path
                                    id="path3036"
                                    className="cls-1GitHub"
                                    d="M291.36,45.23H278.23l0-17.34c0-.65-.33-1-1.09-1H259.23c-.69,0-1.07.31-1.07,1V45.8s-9,2.16-9.56,2.34a1.44,1.44,0,0,0-1,1.39V60.79A1.46,1.46,0,0,0,249,62.26h9.16V89.34c0,20.12,14.12,22.1,23.64,22.1a39.8,39.8,0,0,0,10.42-1.72,1.35,1.35,0,0,0,.82-1.31V96a1.48,1.48,0,0,0-1.45-1.46c-.76,0-2.72.31-4.73.31-6.45,0-8.64-3-8.64-6.87V62.26h13.13a1.46,1.46,0,0,0,1.45-1.47V46.69a1.45,1.45,0,0,0-1.45-1.46"
                                  />
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                        <path
                          className="cls-2GitHub"
                          d="M61.52,0A61.52,61.52,0,0,0,42.06,119.88c3.08.54,4.23-1.3,4.23-2.92,0-1.46-.07-6.31-.07-11.46-15.46,2.85-19.46-3.77-20.69-7.23-.69-1.76-3.69-7.22-6.31-8.68-2.15-1.16-5.22-4-.07-4.08,4.84-.08,8.3,4.46,9.46,6.31,5.53,9.3,14.38,6.69,17.91,5.07a13,13,0,0,1,3.92-8.23c-13.68-1.54-28-6.84-28-30.37a23.93,23.93,0,0,1,6.31-16.53c-.62-1.54-2.77-7.85.61-16.31,0,0,5.16-1.61,16.92,6.31a57.9,57.9,0,0,1,30.76,0C88.82,23.76,94,25.45,94,25.45c3.38,8.46,1.23,14.77.61,16.31a23.74,23.74,0,0,1,6.31,16.53c0,23.61-14.38,28.83-28.07,30.37C75.05,90.58,77,94.28,77,100c0,8.23-.07,14.84-.07,16.92,0,1.62,1.15,3.54,4.23,2.92A61.55,61.55,0,0,0,61.52,0Z"
                        />
                      </g>
                    </g>
                  </svg>
                </picture>
              </a>
            </div>
          </div>
        </div>
      </section>
      <style jsx>{`

      .cls-1 {
          fill-rule:evenodd;
          clip-rule:evenodd;
          fill:#2D6EAE;
          }

      .cls-2 {
          fill:#2B67B0;
          }

      .cls-1GitHub, .cls-2GitHub {
          fill: var(--colorGithub);
          }

      .cls-2GitHub {
          fill - rule:evenodd;
          }
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
          border-radius: 1rem 1rem 0rem 0rem;
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

        .Contact_gridPicture {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 0fr));
          gap: 1rem;
          align-items: center;
          justify-content: space-evenly;
          }

        picture {
          margin-top: 1rem;
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
