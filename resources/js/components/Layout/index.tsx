import { Outlet } from 'react-router-dom'
import Header from '../Header'

const Main = () => {
  return (
    <>
      <Header />
      <main className="mx-auto h-full grid grid-flow-col auto-cols-max gap-[1.875rem]">
        <Outlet />
      </main>
    </>
  )
}

export default Main
