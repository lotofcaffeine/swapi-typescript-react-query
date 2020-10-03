import { fetchCharacterList } from 'lib/SwApi'
import { CharactersListPage } from 'lib/SwReactQuery'
import Main from '../../components/Main'
export default function Home({ page }: { page: CharactersListPage }) {
  return (
    <div>
      <Main initialPage={page}/>
    </div>
  )
}

export async function getServerSideProps() {
  const page = await fetchCharacterList() as CharactersListPage
  return { props: { page } }
}
