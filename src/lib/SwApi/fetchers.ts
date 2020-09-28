import {
  CharacterListFetcher,
  CharactersListResult,
  ResourceFetcher,
  ResourceFetcherById
} from './types'
import axios from 'axios'
import { Character } from 'models'
import { sanitizeUrl, urlToIdAndType } from 'lib/utils'

export const fetchCharacterList: CharacterListFetcher = async (
  url = 'https://swapi.dev/api/people/?page=1'
) => {

  url = sanitizeUrl(url)
  const resp = await axios.get(url,{
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": true,
        "Access-Control-Allow-Credentials": true
    }})
  const data = resp.data
  data.results = data.results?.map((char: Character) => {
    const [id, type] = urlToIdAndType(url)
    char.id = id
    char.type = type
    return char
  })
  return data as CharactersListResult
}

export const fetchResource: ResourceFetcher = async <T>(url: string) => {

  const resp = await axios.get(sanitizeUrl(url),{
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        "Access-Control-Allow-Origin": true,
        "Access-Control-Allow-Credentials": true
    }})
  const data = resp.data
  return data as T
}

export const fetchResourceById: ResourceFetcherById = async <T>(
  id: string,
  type: string
) => {
  const url = `https://swapi.dev/api/${type}/${id}`
  return fetchResource<T>(sanitizeUrl(url))
}
