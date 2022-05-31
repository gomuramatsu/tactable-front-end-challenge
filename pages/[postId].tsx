import type { NextPage } from 'next'
import Head from 'next/head'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import FullPostMain from '../components/FullPost/FullPostMain'

const FullPost: NextPage = () => {
  return (
    <>
      <Navbar />
      <Head>
        <title>Tactablog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/tLogo.jpeg" />
      </Head>
      <FullPostMain />
      <Footer />
    </>
  )
}

export default FullPost
