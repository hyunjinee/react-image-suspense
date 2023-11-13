import { Outlet } from 'react-router-dom'
import { Header } from './Header'

export const Layout = () => {
  return (
    <>
      <Header />

      <div className="max-w-7xl mx-auto">
        <Outlet />
      </div>
    </>
  )
}
