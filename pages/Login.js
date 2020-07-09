import Navbar from '../components/Nev'
import Header from '../components/Header'
import Content from '../components/Content'
import Footer from '../components/Footer'
import Login from '../components/Login'
import Head from 'next/head'

export default () => {
  return (
    <div>
      <Header />
      <Navbar/>
      <Login/><br></br>
      <Footer/>

    </div>
  )
}