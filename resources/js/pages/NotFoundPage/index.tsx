import { Link } from "react-router"

const NotFoundPage = () => {
  return (
    <main className="flex items-center justify-center mt-40">
      <div className="text-center">
        <h1 className="text-8xl font-extrabold text-gray-800">404</h1>
        <p className="mt-4 text-xl text-gray-600">
          Oops! The page you're looking for cannot be found.
        </p>
        <Link
          to="/"
          className="default-btn mt-8 inline-block text-white font-bold py-2 px-8 rounded-[1.25rem]"
        >
          Go Home
        </Link>
      </div>
    </main>
  )
}

export default NotFoundPage
