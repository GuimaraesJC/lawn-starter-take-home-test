import { PersonProps } from "../../services/people/types"

interface IPersonDetailsProps {
  person: PersonProps
}

const PersonDetails = ({ person }: IPersonDetailsProps) => {
  return (
    <div className="text-sm mt-1 min-h-48">
      <p>Birth Year: <span>{person.birth_year}</span></p>
      <p>Gender: <span>{person.gender}</span></p>
      <p>Eye Color: <span>{person.eye_color}</span></p>
      <p>Hair Color: <span>{person.hair_color}</span></p>
      <p>Height: <span>{person.height}</span></p>
      <p>Mass: <span>{person.mass}</span></p>
    </div>
  )
}

export default PersonDetails
