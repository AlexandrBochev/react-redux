import { Footer } from '../../components/Footer/Footer'
import { Header } from '../../components/Header/Header'
import { Outlet } from 'react-router-dom'

const RoootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="container flex flex-col flex-1 overflow-auto px-4 py-10 mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export { RoootLayout }