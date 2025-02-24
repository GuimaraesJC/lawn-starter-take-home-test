import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router'

import { useStarWarsStore } from "../../store/store"
import { usePerson } from '../../services/people/usePeople'
import { useFilm } from '../../services/films/useFilms'

const Details = () => {
  const location = useLocation()

  const { setPeopleResults, setFilmsResults, setSearchTermPeople, setSearchTermFilms } = useStarWarsStore()

  const [detailsType, setDetailsType] = useState<'person' | 'film'>()

  const { data: person } = usePerson()
  const { data: film } = useFilm()

  const handleReturn = () => {
    setPeopleResults(null)
    setFilmsResults(null)
    setSearchTermPeople('')
    setSearchTermFilms('')
  }

  useEffect(() => {
    if (location.pathname.includes('person')) {
      setDetailsType('person')
    } else {
      setDetailsType('film')
    }
  }, [location])

  return (
    <section className="flex flex-col w-[50.25rem] h-max bg-white p-[1.875rem] shadow-warm-grey rounded">
      <header className="mb-[1.875rem]">
        {!person && !film && (
          <h2 className="font-bold text-lg text-pinkish-grey">Loading...</h2>
        )}
        <h2 className="font-bold text-lg">{detailsType === 'person' ? person?.name : film?.title}</h2>
      </header>

      <div className="grid grid-cols-2 gap-[6.25rem]">
        <div>
          <span className="block text-base font-bold border-b border-b-pinkish-grey w-full pb-[0.625rem]">
            {detailsType === 'person' ? ' Details' : 'Opening Crawl'}
          </span>
        </div>

        <div>
          <span className="block text-base font-bold border-b border-b-pinkish-grey w-full pb-[0.625rem]">
            {detailsType === 'person' ? ' Movies' : 'Characters'}
          </span>
        </div>
      </div>

      <footer className="mt-[1.875rem]">
        <Link to="/">
          <button className="uppercase h-[2.125rem] p-2 bg-green-teal px-5 text-white text-sm font-bold rounded-[1.25rem]" onClick={handleReturn}>
            Back to search
          </button>
        </Link>
      </footer>
    </section>
  )
}

export default Details
