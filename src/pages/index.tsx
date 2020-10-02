import { fetchCharacterList } from 'lib/SwApi'
import { CharactersListPage } from 'lib/SwReactQuery'
import Main from '../components/Main'


export default function Home({ page }: { page: CharactersListPage }) {
  return  <Main initialPage={page}/>
}

export async function getStaticProps() {
  const page = await fetchCharacterList() as CharactersListPage
  return { props: { page } }
}
