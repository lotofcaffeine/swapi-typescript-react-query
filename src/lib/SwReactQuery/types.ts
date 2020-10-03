import { Character, Resource } from 'models'

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

export interface ResourceQueryHookResult<T extends Resource> {
  data?: T
  isLoading: boolean
  isFetching: boolean
  isError: boolean
  isSuccess: boolean
}
