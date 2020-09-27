/* eslint-disable  @typescript-eslint/no-explicit-any */
import { createCharacter, createUrl } from 'utils/tests/utils'
import {
  useCharactersInfiniteQuery,
  useResourceQuery,
  useResourceQueryById
} from '.'
import { useInfiniteQuery, useQuery, queryCache } from 'react-query'
import { Character } from 'models'

const mockedData = createCharacter()
jest.mock('react-query', () => {
  return {
    __esModule: true,
    useQuery: jest.fn(),
    useInfiniteQuery: jest.fn(),
    queryCache: jest.fn()
  }
})

describe('useResourceQueryById', () => {
  it('should return a valid resource', () => {
    (useQuery as jest.Mock<any, any>).mockImplementation(() => ({
      data: mockedData
    }))
    const { data } = useResourceQueryById('1', 'people')
    expect(data).toBe(mockedData)
  })

  it('should NOT return a valid resource', () => {
    (useQuery as jest.Mock<any, any>).mockImplementation(() => ({}))
    const { data } = useResourceQueryById('1', 'people')
    expect(data).toBeUndefined()
  })
})

describe('useResourceQuery', () => {
  it('should return a valid resource', () => {
    (useQuery as jest.Mock<any, any>).mockImplementation(() => ({
      data: mockedData
    }))
    const { data } = useResourceQuery<Character>(createUrl('1', 'people'))
    expect(data).toBe(mockedData)
  })
  it('should NOT return a valid resource', () => {
    (useQuery as jest.Mock<any, any>).mockImplementation(() => ({}))
    const { data } = useResourceQuery<Character>(createUrl('1', 'people'))
    expect(data).toBeUndefined()
  })
})

describe('useCharactersInfiniteQuery', () => {
  it('should a valid item', () => {
    (useInfiniteQuery as jest.Mock<any, any>).mockImplementation(() => ({
      data: [
        {
          results: [mockedData],
          count: 1,
          next: null
        }
      ]
    }))
    queryCache.setQueryData = jest.fn()
    const { data } = useCharactersInfiniteQuery()
    expect(data).toHaveLength(1)
  })
  it('should two valid items', () => {
    (useInfiniteQuery as jest.Mock<any, any>).mockImplementation(() => ({
      data: [
        {
          results: [mockedData],
          count: 1,
          next: null
        },
        {
          results: [mockedData],
          count: 1,
          next: null
        }
      ]
    }))
    queryCache.setQueryData = jest.fn()
    const { data } = useCharactersInfiniteQuery()
    expect(data).toHaveLength(2)
  })
})
