import { Outlet } from 'react-router-dom'
import Header from '../Header'

const Main = () => {
  return (
    <>
      <Header />
      <main className='container mx-auto h-full'>
        <Outlet />
      </main>
    </>
  )
}

export default Main
