/* eslint-disable  @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import Main from "."
import { createCharactersListPage } from "utils/tests/utils"
import { renderWithTheme } from "utils/tests/helpers"
import { useCharactersInfiniteQuery } from 'lib/SwReactQuery'
const page = createCharactersListPage()
import { fireEvent } from '@testing-library/react'

jest.mock('lib/SwReactQuery', () => {
  return {
    __esModule: true,
    useCharactersInfiniteQuery: jest.fn(),
  }
})
jest.mock("components/DataContainer", () => {
  return () => <li>MockDataContainer</li>
})
describe("<Main/>", () => {
  it('renders successfully', () => {
    (useCharactersInfiniteQuery as jest.Mock<any, any>).mockImplementation(() => ({
      isLoading: false,
      isFetchingMore: false,
      fetchMore: jest.fn(),
      data: [ page ],
      canFetchMore: true,
    }))
    const { container } = renderWithTheme(
      <Main initialPage={page} />
    )
    expect(container.innerHTML).not.toContain("Loading...");
    expect(container.innerHTML).toContain("Characters");
    expect(container.innerHTML).toContain("MockDataContainer");
    expect(container.innerHTML).toContain("Gimme More!");
  })
  it('renders is loading message', () => {
      (useCharactersInfiniteQuery as jest.Mock<any, any>).mockImplementation(() => ({
        isLoading: true,
        isFetchingMore: false,
        fetchMore: jest.fn(),
        data: null,
        canFetchMore: false,
      }))
      const { container } = renderWithTheme(
        <Main initialPage={page} />
      )
      expect(container.innerHTML).not.toContain("Characters");
      expect(container.innerHTML).toContain("Loading...");
  })
  it('can fetch more', () => {
    (useCharactersInfiniteQuery as jest.Mock<any, any>).mockImplementation(() => ({
      isLoading: false,
      isFetchingMore: false,
      fetchMore: mockFetchMoreFn,
      data: [ page ],
      canFetchMore: true,
    }))
    const mockFetchMoreFn = jest.fn()
    const { getByRole } = renderWithTheme(
      <Main initialPage={page} />
    )
    fireEvent.click(getByRole('button'))
    expect(mockFetchMoreFn).toBeCalled()
  })
  it('can not fetch more', () => {
    (useCharactersInfiniteQuery as jest.Mock<any, any>).mockImplementation(() => ({
      isLoading: false,
      isFetchingMore: false,
      fetchMore: jest.fn(),
      data: [ page ],
      canFetchMore: false,
    }))
    const { container } = renderWithTheme(
      <Main initialPage={page} />
    )
    expect(container.innerHTML).not.toContain("Loading...");
    expect(container.innerHTML).toContain("Characters");
    expect(container.innerHTML).toContain("MockDataContainer");
    expect(container.innerHTML).toContain("My job is done here");
  })
})