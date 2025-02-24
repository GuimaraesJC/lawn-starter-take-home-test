import { Link } from 'react-router'

import { useStarWarsStore } from "../../store/store"

interface IResultItemProps {
  label: string
  id: string
  type: 'person' | 'film'
}

const ResultItem = ({ label, id, type }: IResultItemProps) => {
  const { setSelectedPersonId, setSelectedFilmId } = useStarWarsStore()

  const handleNavigate = () => {
    setSelectedPersonId(null)
    setSelectedFilmId(null)

    if (type === 'person') {
      setSelectedPersonId(id)
    } else {
      setSelectedFilmId(id)
    }
  }

  return (
    <div className="flex items-center justify-between border-b border-b-pinkish-grey py-sw-10">
      <span className="font-bold">
        {label}
      </span>
      <Link to={`/${type === 'person' ? 'person' : 'film'}/${id}`}>
        <button
          className="default-btn h-[2.125rem] text-sm py-2 px-5 rounded-[1.063rem]"
          onClick={handleNavigate}
        >
          See details
        </button>
      </Link>
    </div>
  )
}

export default ResultItem
