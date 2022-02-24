import type { NextPage } from 'next'
import Head from 'next/head'
import Hero from '../components/hero'
import Navbar from '../components/navbar'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { GetStaticProps } from 'next'
import About from '../components/about'
import Skill from '../components/skill'
import Projects from '../components/projects'
import Contact from '../components/contact'

const Home: NextPage = () => {
  const { t } = useTranslation('common')
  return (
    <>
      <Head>
        <title>Celsius E Aray Portafolio</title>
        <meta
          name="description"
          content="Soy frontend Developer, entusiasta del mundo del desarrollo, y les presento parte de mi portafolio y habilidades."
        />
        <link href="https://fonts.googleapis.com/css2?family=Grechen+Fuemen&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/svg+xml" href="/celsiusDevLogoRedondo.svg" />
        <meta
          property="og:url"
          content="http://www.nytimes.com/2015/02/19/arts/international/when-great-minds-dont-think-alike.html"
        />
        <meta property="og:title" content="Celsius E Aray Portafolio" />
        <meta
          property="og:description"
          content="Soy frontend Developer, entusiasta del mundo del desarrollo, y les presento parte de mi portafolio y habilidades."
        />
        <meta property="og:image" content="/assets/img/projects/celsius-aray-social-share.jpg" />
        <meta property="og:image:width" content="1920" />
        <meta property="og:image:height" content="1080" />
        <meta name="color-scheme" content="dark light"></meta>
      </Head>
      <main>
        <Navbar />
        <Hero />
        <About />
        <Skill />
        <Projects />
        <Contact />
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['common'])),
  },
})

export default Home
