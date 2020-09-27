import {
  fetchCharacterList,
  fetchResource,
  fetchResourceById
} from './fetchers'
import axios from 'axios'
import { Character, Film, Planet, Specie, Starship, Vehicle } from 'models'
import {
  createCharacter,
  createFilm,
  createPlanet,
  createSpecie,
  createStarship,
  createUrl,
  createVehicle
} from 'utils/tests/utils'

jest.mock('axios')

describe('fetchCharacterList', () => {
  let mockedAxios: jest.Mocked<typeof axios>
  beforeEach(() => {
    mockedAxios = axios as jest.Mocked<typeof axios>
  })

  it('should return a list of characters', async () => {
    expect.assertions(1)
    const expected = {
      data: {
        count: 1,
        next: createUrl('people', '', '2'),
        results: [
          {
            name: 'blah',
            url: createUrl('people', '1')
          }
        ]
      }
    }
    mockedAxios.get.mockImplementation(() => Promise.resolve(expected))
    await expect(
      fetchCharacterList(createUrl('people', '', '1'))
    ).resolves.toEqual(expected.data)
  })

  it('should return an empty list of characters', async () => {
    expect.assertions(1)
    const expected = {
      data: {
        count: 1,
        next: createUrl('people', '', '2'),
        results: []
      }
    }
    mockedAxios.get.mockImplementation(() => Promise.resolve(expected))
    await expect(
      fetchCharacterList(createUrl('people', '', '1'))
    ).resolves.toEqual(expected.data)
  })

  it('should return an error', async () => {
    expect.assertions(1)
    const errorMessage = 'Something went wrong'
    mockedAxios.get.mockImplementation(() => {
      throw new Error(errorMessage)
    })
    return fetchCharacterList(createUrl('people', '', '1')).catch((e) =>
      expect(e).toEqual(new Error('Something went wrong'))
    )
  })
})

describe('fetchResource', () => {
  const testFetcher = <T>(resource: T, type: string) => {
    expect.assertions(1)
    const expected = { data: resource }
    mockedAxios.get.mockImplementation(() => Promise.resolve(expected))
    expect(fetchResource<T>(createUrl(type, '', '1'))).resolves.toEqual(
      expected.data
    )
  }

  let mockedAxios: jest.Mocked<typeof axios>
  beforeEach(() => {
    mockedAxios = axios as jest.Mocked<typeof axios>
  })
  it('should return a character', async () => {
    await testFetcher(createCharacter(), 'people')
  })
  it('should return a film', async () => {
    await testFetcher(createFilm(), 'film')
  })
  it('should return a planet', async () => {
    await testFetcher(createPlanet(), 'planet')
  })
  it('should return a specie', async () => {
    await testFetcher(createSpecie(), 'specie')
  })
  it('should return a starship', async () => {
    await testFetcher(createStarship(), 'starship')
  })
  it('should return a vehicle', async () => {
    await testFetcher(createVehicle(), 'vehicle')
  })
})

describe('fetchResourceById', () => {
  const testFetcherById = <T>(resource: T, type: string) => {
    expect.assertions(1)
    const expected = { data: resource }
    mockedAxios.get.mockImplementation(() => Promise.resolve(expected))
    expect(fetchResourceById<T>('1', type)).resolves.toEqual(expected.data)
  }

  let mockedAxios: jest.Mocked<typeof axios>
  beforeEach(() => {
    mockedAxios = axios as jest.Mocked<typeof axios>
  })

  it('should return a character', async () => {
    await testFetcherById<Character>(createCharacter(), 'people')
  })
  it('should return a film', async () => {
    await testFetcherById<Film>(createFilm(), 'films')
  })
  it('should return a planet', async () => {
    await testFetcherById<Planet>(createPlanet(), 'planets')
  })
  it('should return a specie', async () => {
    await testFetcherById<Specie>(createPlanet(), 'species')
  })
  it('should return a starship', async () => {
    await testFetcherById<Starship>(createPlanet(), 'starships')
  })
  it('should return a vehicle', async () => {
    await testFetcherById<Vehicle>(createPlanet(), 'vehicles')
  })
})
