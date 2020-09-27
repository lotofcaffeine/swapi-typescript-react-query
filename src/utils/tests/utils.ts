import { CharactersListPage } from 'lib/SwReactQuery'
import { Character, Film, Planet, Specie, Starship, Vehicle } from 'models'

export const createCharacter = (): Character => {
  return {
    id: '1',
    type: 'people',
    name: 'Luke',
    height: 172,
    mass: 77,
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
    homeworld: createUrl('planets', '1'),
    films: [],
    species: [],
    vehicles: [],
    starships: [],
    url: createUrl('people', '1')
  }
}

export const createCharactersListPage = (): CharactersListPage => {
  return {
    results: [ createCharacter() ],
    count: 1,
    next: '',
  }
}

export const createFilm = (): Film => {
  return {
    id: '1',
    type: 'films',
    title: 'Star Wars',
    url: createUrl('films', '1')
  }
}

export const createPlanet = (): Planet => {
  return {
    id: '1',
    type: 'planets',
    name: 'Tatooine',
    url: createUrl('planets', '1')
  }
}

export const createSpecie = (): Specie => {
  return {
    id: '1',
    type: 'planets',
    name: 'Droid',
    url: createUrl('species', '1')
  }
}

export const createStarship = (): Starship => {
  return {
    id: '1',
    type: 'startships',
    name: 'Ship',
    url: createUrl('starships', '1')
  }
}

export const createVehicle = (): Vehicle => {
  return {
    id: '1',
    type: 'vehicles',
    name: 'Ship',
    url: createUrl('vehicles', '1')
  }
}

export const createUrl = (type: string, id?: string, page?: string): string => {
  const pageParam = page ? `?page=${page}` : ''
  const idParam = id ? `id=${id}/` : ''
  return `https://swapi.dev/api/${type}/${idParam}${pageParam}`
}
