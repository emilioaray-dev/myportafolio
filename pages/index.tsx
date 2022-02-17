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
        <title>{t('title')}</title>
        <meta name="description" content="Generated by create next app" />
        <link href="https://fonts.googleapis.com/css2?family=Grechen+Fuemen&display=swap" rel="stylesheet" />
        <link rel="icon" type="image/svg+xml" href="/celsiusDevLogoRedondo.svg" />
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
