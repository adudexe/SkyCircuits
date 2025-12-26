import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    <div className='app-layout container mx-auto'>
        <Navbar/>
            <main>
                <Outlet/>
            </main>
        <Footer/>
    </div>
  )
}

export default Layout
