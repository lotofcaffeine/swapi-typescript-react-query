import { ResourceWithName } from './ResourceWithName'

export interface Character extends ResourceWithName {
  height: number
  mass: number
  hair_color: string
  skin_color: string
  eye_color: string
  birth_year: string
  gender: string
  homeworld: string
  films: string[]
  species: string[]
  vehicles: string[]
  starships: string[]
  url: string
}
