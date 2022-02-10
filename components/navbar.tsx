import Link from 'next/link'

export default function Navbar() {
  return (
    <>
      <section className="container" id="Navbar">
        <nav className="navbar">
          <div className="max__container navbar__grid">
            <Link href={''}>
              <a>
                <picture className="navbar__logo">
                  <img src="/navbar/mayor.svg" alt="" height="40px" />
                  <h2>Celsius Aray</h2>
                  <img src="/navbar/menor.svg" alt="" height="40px" />
                </picture>
              </a>
            </Link>
            <ul>
              <Link href={''}>
                <a>
                  <li>Hola</li>
                </a>
              </Link>
              <Link href={''}>
                <a>
                  <li>Hola</li>
                </a>
              </Link>
              <Link href={''}>
                <a>
                  <li>Hola</li>
                </a>
              </Link>
            </ul>
          </div>
        </nav>
      </section>

      <style jsx>{`
        #Navbar {
          position: fixed;
          box-shadow: 1px 5px 20px 0px rgb(243 0 0 / 55%);
          background: transparent;
          height: min-content;
          padding: 1rem 0rem;
          -webkit-backdrop-filter: blur(2px);
          backdrop-filter: blur(2px);
        }

        .navbar__grid {
          display: grid;
          grid-template-columns: max-content auto;
        }
        h2 {
          color: #fff;
          font-family: 'Grechen Fuemen', cursive;
        }

        ul {
          display: flex;
          color: #fff;
          list-style-type: none;
          align-items: center;
          justify-content: flex-end;
          gap: 1rem;
        }

        .navbar__logo {
          display: flex;
          align-items: center;
        }
      `}</style>
    </>
  )
}
