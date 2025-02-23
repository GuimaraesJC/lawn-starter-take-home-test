const ResultItem = () => {
  return (
    <div className="flex items-center justify-between border-b border-b-pinkish-grey py-[0.625rem]">
      <span className="font-bold">
        Name
      </span>
      <button className="uppercase h-[2.125rem] text-sm bg-green-teal py-2 px-5 text-white font-semibold rounded-[1.063rem]">
        See details
      </button>
    </div>
  )
}

export default ResultItem
