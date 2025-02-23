const Search = () => {
  return (
    <div className="flex flex-col bg-white border-gainsboro w-[25.625rem] h-max p-[1.875rem] shadow-warm-grey rounded">
      <span className="font-semibold mb-5">What are you searching for?</span>

      <div className="flex gap-7 mb-5">
        <label htmlFor="people">
          <input type="radio" name="category" id="people" className="mr-[0.625rem]" />
          People
        </label>
        <label htmlFor="films">
          <input type="radio" name="category" id="films" className="mr-[0.625rem]" />
          Movies
        </label>
      </div>

      <input type="text" name="query" id="query" className="w-full h-10 border border-[#383838] shadow-inset-warm-grey mb-5 rounded" />

      <button type="button" className="w-full h-[2.125rem] p-2 bg-green-teal text-white font-bold rounded-[1.25rem] flex items-center justify-center">
        Search
      </button>
    </div>
  )
}

export default Search
