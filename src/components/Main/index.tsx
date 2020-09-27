import Heading from '../Heading'
import DataContainer from '../DataContainer'
import Button from '../Button'
import { useCharactersInfiniteQuery, CharactersListPage } from 'lib/SwReactQuery'
import ViewContainer from 'components/ViewContainer'

export interface MainProps {
  initialPage?: CharactersListPage
}

const Main = ({ initialPage }: MainProps) => {
  const { isLoading, isFetchingMore, data, fetchMore, canFetchMore } = useCharactersInfiniteQuery({
    initialPage
  })
  const loadMore = () => {
    fetchMore()
  }
  return (
    <ViewContainer>
        {isLoading?(<Heading as="h1" >Loading...</Heading>):(
          <>
          <Heading as="h1" size="medium" lineBottom>Characters</Heading>
          <DataContainer items={data!} />
          <Button onClick={loadMore} disabled={!canFetchMore || !!isFetchingMore}>
            { isFetchingMore ?
             'Loading more...':
             canFetchMore? 'Gimme More!'
              : 'My job is done here'}
              </Button>
          </>
        )}
   </ViewContainer>
  )
}

export default Main

