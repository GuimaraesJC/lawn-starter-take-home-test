import { Link } from "react-router"

const Header = () => {
  return (
    <header className="h-[3.125rem] bg-white flex items-center justify-center shadow-header mb-[1.875rem]">
      <Link to="/">
      <h1 className="font-bold text-green-teal">SWStarter</h1>
      </Link>
    </header>
  )
}

export default Header
