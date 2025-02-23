import Results from "../../components/Results"
import Search from "../../components/Search"

import { usePeople } from "../../services/people/usePeople"

const MainPage = () => {
  return (
    <>
      <Search />
      <Results />
    </>
  )
}

export default MainPage
