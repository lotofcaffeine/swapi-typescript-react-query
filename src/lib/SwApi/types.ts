import { Character } from 'models'

export interface CharactersListResult {
  results: Character[]
  count: number
  next: string
}

export type CharacterListFetcher = (url?: string) => Promise<CharactersListResult>

// This function will be used to fetch:
// character
// movie
// spaceship
// films
// vehicles
// species
export type ResourceFetcher = <T>(url: string) => Promise<T>

export type ResourceFetcherById = <T>(id: string, type: string) => Promise<T>
