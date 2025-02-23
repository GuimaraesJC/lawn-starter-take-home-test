const Details = () => {
  return (
    <section className="flex flex-col w-[50.25rem] h-max bg-white p-[1.875rem] shadow-warm-grey rounded">
      <header className="mb-[1.875rem]">
        <h2 className="font-bold text-lg">Pessoa ou Filme</h2>
      </header>

      <div className="grid grid-cols-2 gap-[6.25rem]">
        <div>
          <span className="block text-base font-bold border-b border-b-pinkish-grey w-full pb-[0.625rem]">
            Details / Opening Crawl
          </span>
        </div>

        <div>
          <span className="block text-base font-bold border-b border-b-pinkish-grey w-full pb-[0.625rem]">
            Movies / Characters
          </span>
        </div>
      </div>

      <footer className="mt-[1.875rem]">
        <button className="uppercase h-[2.125rem] p-2 bg-green-teal text-white text-sm font-bold rounded-[1.25rem]">
          Back to search
        </button>
      </footer>
    </section>
  )
}

export default Details
