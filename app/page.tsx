import Image from 'next/image'
import Navbar from './navbar'
import Footer from './footer/footer'
import Categories from './categories'
import Menu from './menu'


export default function Home() {
  return (
 
      <div>
        <Navbar/>
        {/* <br/> */}
        <Categories/>
        <Menu/>
        <Footer/>
     
      </div>

  )
}
