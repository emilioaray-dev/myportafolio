export default function Skill() {
  return (
    <>
      <section id="Skill" className="container">
        <div className="max__container">Seccion de Skill</div>
      </section>
      <style jsx>{`
        .container {
          display: grid;
          width: 100%;
          overflow: hidden;
          min-height: 100vh;
        }

        .max__container {
          display: grid;
          margin: 0 auto;
          width: 100%;
          max-width: var(--max-widthContainer);
          padding: 0 1rem;
        }
      `}</style>
    </>
  )
}
