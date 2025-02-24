import { Outlet } from 'react-router-dom'
import Header from '../Header'

const Main = () => {
  return (
    <>
      <Header />
      <main className="mx-auto h-full grid grid-cols-1 lg:grid-flow-col auto-cols-max auto-rows-max justify-items-center gap-[1.875rem] w-full lg:w-auto px-4 lg:px-8">
        <Outlet />
      </main>
    </>
  )
}

export default Main
