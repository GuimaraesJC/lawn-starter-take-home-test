import { useState } from "react"
import { useStarWarsStore } from "../../store/store"
import { usePeople } from "../../services/people/usePeople"
import { useFilms } from "../../services/films/useFilms"

const Search = () => {
  const [searchType, setSearchType] = useState<'people' | 'films'>('people')

  const { searchTermPeople, searchTermFilms, setSearchTermPeople, setSearchTermFilms, setPeopleResults, setFilmsResults } = useStarWarsStore()

  const { data: peopleResults, isLoading: isSearchingPeople, refetch: refetchPeople } = usePeople()
  const { data: filmsResults, isLoading: isSearchingFilms, refetch: refetchFilms } = useFilms()

  const handleSearchTerm = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (searchType === 'people') {
      setSearchTermPeople(e.target.value)
    } else {
      setSearchTermFilms(e.target.value)
    }
  }

  const handleOnSearch = async () => {
    if (searchType === 'people') {
      await refetchPeople()
      setPeopleResults(peopleResults || null)
    } else {
      await refetchFilms()
      setFilmsResults(filmsResults || null)
    }
  }

  const handleDisableSearchButton = () => {
    if (searchType === 'people' && !searchTermPeople) {
      return true
    }

    if (searchType === 'films' && !searchTermFilms) {
      return true
    }

    return isSearchingPeople || isSearchingFilms
  }

  return (
    <div className="flex flex-col bg-white border-gainsboro w-[25.625rem] h-max p-[1.875rem] shadow-warm-grey rounded">
      <span className="font-semibold mb-5">What are you searching for?</span>

      <div className="flex gap-7 mb-5">
        <label htmlFor="people">
          <input
            id="people"
            type="radio"
            name="category"
            className="mr-[0.625rem]"
            onChange={() => {
              setSearchType('people')
              setSearchTermFilms('')
            }}
            defaultChecked
          />
          People
        </label>
        <label htmlFor="films">
          <input
            type="radio"
            name="category"
            id="films"
            className="mr-[0.625rem]"
            onChange={() => {
              setSearchType('films')
              setSearchTermPeople('')
            }}
          />
          Movies
        </label>
      </div>

      <input
        type="text"
        name="query"
        id="query"
        value={searchType === 'people' ? searchTermPeople : searchTermFilms}
        className="w-full h-10 border border-[#383838] shadow-inset-warm-grey mb-5 rounded p-2"
        placeholder={searchType === 'people' ? 'e.g. Chewbacca, Yoda, Boba Fett' : 'e.g. A New Hope, The Empire Strikes Back'}
        onChange={handleSearchTerm}
      />

      <button
        type="button"
        className="w-full h-[2.125rem] p-2 bg-green-teal text-white font-bold rounded-[1.25rem] flex items-center justify-center disabled:bg-pinkish-grey disabled:cursor-not-allowed uppercase"
        disabled={handleDisableSearchButton()}
        onClick={handleOnSearch}
      >
        {isSearchingPeople || isSearchingFilms ? 'Searching...' : 'Search'}
      </button>
    </div>
  )
}

export default Search
