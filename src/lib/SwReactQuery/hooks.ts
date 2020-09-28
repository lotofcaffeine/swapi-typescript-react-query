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
import { queryCache, useInfiniteQuery, useQuery } from 'react-query'
import { Character, Resource } from 'models'
import { sanitizeUrl, urlToIdAndType } from 'lib/utils'

const fetchInfiniteCharacterList = async (_: string, url: string) => {
  url = sanitizeUrl(url)
  return fetchCharacterList(url)
}

export const useCharactersInfiniteQuery = (
  queryConfig?: CharactersQueryHookConfig
): CharactersQueryHookResult => {
  const { data, ...rest } = useInfiniteQuery(
    'characters',
    fetchInfiniteCharacterList,
    {
      refetchOnWindowFocus: false,
      initialData: [ queryConfig?.initialPage ],
      getFetchMore: (lastPage) => {
        return lastPage?.next
      }
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
      queryCache.setQueryData<Character>([c.type, c.id], c)
      return c
    })
    if(characters?.length) {
      result = result.concat(characters)
    }
  })
  return {
    data: result,
    ...rest
  }
}
export const useResourceQueryById = <T extends Resource>(
  id: string,
  type: string,
  queryConfig?: ResourceQueryHookConfig<T>
): ResourceQueryHookResult<T> => {
  const { data, ...rest } = useQuery(
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
    ...rest
  }
}

export const useResourceQuery = <T extends Resource>(
  url: string,
  queryConfig?: ResourceQueryHookConfig<T>
): ResourceQueryHookResult<T> => {
  url = sanitizeUrl(url)
  const [id, type] = urlToIdAndType(url)
  const { data, ...rest } = useQuery(
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
    ...rest
  }
}
