import { Character, Resource } from 'models'
import { QueryResult } from 'react-query'

export interface CharactersListPage {
  results: Character[]
  count: number
  next: string
}

export interface CharactersQueryHookConfig {
  initialPage?: CharactersListPage
}

export interface CharactersQueryHookResult {
  data?: Character[]
  fetchMore: () => void
  isLoading: boolean
  isFetching: boolean
  isSuccess: boolean
  isError: boolean
  canFetchMore?: boolean
  isFetchingMore?: string | boolean
}

export interface ResourceQueryHookConfig<T extends Resource> {
  initialData?: T
  enabled?: boolean
}

export type ResourceQueryHookResult<T extends Resource> = Pick<QueryResult<T>, 'data' | 'isLoading' | 'isFetching' | 'isError' | 'isSuccess' | 'error'>
