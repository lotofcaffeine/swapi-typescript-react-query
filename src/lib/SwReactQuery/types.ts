import { Character, Resource } from 'models'
import { InfiniteQueryResult, QueryResult } from 'react-query'

export interface CharactersListPage {
  results: Character[]
  count: number
  next: string
}

export interface CharactersQueryHookConfig {
  initialPage?: CharactersListPage
}

export type CharactersQueryHookResult = Pick<InfiniteQueryResult<Character>, 'data' | 'fetchMore' | 'isLoading' | 'isFetching' | 'isError' | 'isSuccess' | 'canFetchMore' | 'isFetchingMore' | 'error'>

export interface ResourceQueryHookConfig<T extends Resource> {
  initialData?: T
  enabled?: boolean
}

export type ResourceQueryHookResult<T extends Resource> = Pick<QueryResult<T>, 'data' | 'isLoading' | 'isFetching' | 'isError' | 'isSuccess' | 'error'>
