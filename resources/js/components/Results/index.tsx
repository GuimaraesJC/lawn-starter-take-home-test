import ResultItem from "../ResultItem"
import { useStarWarsStore } from "../../store/store"

const Results = () => {
  const { peopleResults, filmsResults, isSearchingPeople, isSearchingFilms } = useStarWarsStore()

  return (
    <>
      <div className="flex flex-col bg-white border-gainsboro w-[36.375rem] h-[36.375rem] p-[1.875rem] shadow-warm-grey rounded">
        <span className="text-[1.125rem] font-bold pb-[0.625rem] border-b border-b-pinkish-grey">Results</span>

        <div>
          {peopleResults?.length ? peopleResults?.map((person) => {
            const personId = person.url.split('/').filter(Boolean).pop() || ''

            return (
              <ResultItem key={personId} label={person.name} id={personId} type='person' />
            )
          }) : null}

          {filmsResults?.length ? filmsResults?.map((film) => {
            const filmId = film.url.split('/').filter(Boolean).pop() || ''

            return (
              <ResultItem key={film.title} label={film.title} id={filmId} type='film' />
            )
          }) : null}
        </div>

        {(!peopleResults?.length && !filmsResults?.length && !isSearchingPeople && !isSearchingFilms) && (
          <div className="flex items-center justify-center h-full">
            <span className="text-pinkish-grey font-bold text-sm text-center">
              There are zero matches.<br />
              Use the form to search for People or Movies.
            </span>
          </div>
        )}

        {(isSearchingPeople || isSearchingFilms) && (
          <div className="flex items-center justify-center h-full">
            <span className="text-pinkish-grey font-bold text-sm text-center">
              Searching...
            </span>
          </div>
        )}
      </div>
    </>
  )
}

export default Results
