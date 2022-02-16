export default function Skill() {
  return (
    <>
      <section id="Skill" className="container">
        <div className="max__container container_Margen">Seccion de Skill</div>
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
            rgba(255, 255, 255, 0) 6.5%
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
      `}</style>
    </>
  )
}
