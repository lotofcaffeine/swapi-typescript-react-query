import {
  CharactersQueryHookConfig,
  CharactersQueryHookResult,
  ResourceQueryHookConfig,
  ResourceQueryHookResult
} from './types'
import {
  fetchCharacterList,
  fetchResource,
  fetchResourceById
} from 'lib/SwApi'
import { Character, Resource } from 'models'
import { urlToIdAndType } from 'lib/utils'
import { useSWRInfinite } from 'swr'
import useSWR from 'swr'

export const useCharactersInfiniteQuery = (
  queryConfig?: CharactersQueryHookConfig
): CharactersQueryHookResult => {
  let initialData = undefined
  if(queryConfig?.initialPage) {
    initialData = [ queryConfig?.initialPage ]
  }

  const { data, size, setSize, error, isValidating } = useSWRInfinite(
    (index) =>
      `https://swapi.dev/api/people/?page=${index + 1}`,
    fetchCharacterList,
    {
      initialData: initialData,
    }
  )
  // We don't need the pages structure, just the results inside them
  // So this hook aggregates all the items in all pages in one
  // single list (result)
  let result: Character[] = []
  data?.forEach((page) => {
    const characters = page?.results.map((c) => {
      const [id, type] = urlToIdAndType(c.url)
      c.id = id
      c.type = type
      // We also want to cache all character data available so when the
      // single character hook is used, it can use the cached information
      // queryCache.setQueryData<Character>([c.type, c.id], c)
      return c
    })
    if(characters?.length) {
      result = result.concat(characters)
    }
  })
  console.log({data},{error})
  return {
    data: result,
    fetchMore: () => {
      setSize(size + 1)
    },
    isLoading: !data && !error,
    isFetching: !data && !error,
    isError: !!error,
    isSuccess: !!data,
    canFetchMore: !!(data && data[data?.length - 1].next),
    isFetchingMore: !!(data && data[data?.length - 1].next) && isValidating,
  }
}

export const useResourceQueryById = <T extends Resource>(
  id: string,
  type: string,
  queryConfig?: ResourceQueryHookConfig<T>
): ResourceQueryHookResult<T> => {
  const { data, error } = useSWR(
    [type, id],
    () => fetchResourceById<T>(id, type),
    queryConfig
  )
  if (data) {
    data.id = id
    data.type = type
  }
  return {
    data,
    isLoading: !data && !error,
    isFetching: !data && !error,
    isError: !!error,
    isSuccess: !!data,
  }
}

export const useResourceQuery = <T extends Resource>(
  url: string,
  queryConfig?: ResourceQueryHookConfig<T>
): ResourceQueryHookResult<T> => {
  const [id, type] = urlToIdAndType(url)
  const { data, error } = useSWR(
    [type, id],
    () => fetchResource<T>(url),
    queryConfig
  )
  if (data) {
    data.id = id
    data.type = type
  }
  return {
    data,
    isLoading: !data,
    isFetching: !data,
    isError: !!error,
    isSuccess: !!data,
  }
}
