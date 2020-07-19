import Navbar from '../components/Nev'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'
import FistPage from '../components/FistPage'
import Head from 'next/head'

export default () => {
  return (
    <div>
      <Header />
      <Navbar/>
      <FistPage/>
      <Footer/>

    </div>
  )
}