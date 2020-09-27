/* eslint-disable  @typescript-eslint/no-explicit-any */
import ResourceItem from "."
import { renderWithTheme } from "utils/tests/helpers"
import { useResourceQuery } from 'lib/SwReactQuery'
import { createCharacter, createFilm } from "utils/tests/utils"

jest.mock('lib/SwReactQuery', () => {
  return {
    __esModule: true,
    useResourceQuery: jest.fn(),
  }
})

describe("<ResourceItem/>", () => {
  it('renders successfully', () => {
    (useResourceQuery as jest.Mock<any, any>).mockImplementation(() => ({
      isSuccess: true,
      data: character,
    }))
    const character = createCharacter()
    const url = 'mockUrl'
    const { container } = renderWithTheme(
      <ResourceItem url={url}/>
    )
    expect(container.innerHTML).toContain(character.name);
  })
  it('shows nothing if no data available', () => {
    (useResourceQuery as jest.Mock<any, any>).mockImplementation(() => ({
      isSuccess: false,
      data: character,
    }))
    const character = createCharacter()
    const url = 'mockUrl'
    const { container } = renderWithTheme(
      <ResourceItem url={url}/>
    )
    expect(container.innerHTML).not.toContain(character.name);
  })
  it('renders successfully with film', () => {
    (useResourceQuery as jest.Mock<any, any>).mockImplementation(() => ({
      isSuccess: true,
      data: film,
    }))
    const film = createFilm()
    const url = 'mockUrl'
    const { container } = renderWithTheme(
      <ResourceItem url={url}/>
    )
    expect(container.innerHTML).toContain(film.title);
  })
})