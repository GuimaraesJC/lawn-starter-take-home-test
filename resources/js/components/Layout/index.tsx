import { Outlet } from 'react-router-dom'
import Header from '../../components/Header'

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
