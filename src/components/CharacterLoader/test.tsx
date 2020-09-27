/* eslint-disable  @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import CharacterLoader from "."
import { createCharacter, createPlanet } from "utils/tests/utils"
import { renderWithTheme } from "utils/tests/helpers"
import { useResourceQuery } from 'lib/SwReactQuery'

const character = createCharacter()
const planet = createPlanet()
jest.mock('lib/SwReactQuery', () => {
  return {
    __esModule: true,
    useResourceQuery: jest.fn(),
  }
})
jest.mock('components/AttributesContainer', () => {
  return {
    __esModule: true,
    default: ({ character, planet }: any) => {
    return (<li>MockAttributesContainer {character.name} {planet.name}</li>)
    }
  }
})
describe("<CharacterLoader/>", () => {
  it('renders successfully', () => {
    (useResourceQuery as jest.Mock<any, any>).mockImplementation(() => ({
      data: planet,
      isSuccess: true
    }))
    const { container } = renderWithTheme(
      <CharacterLoader character={character} />
    )
    expect(container.innerHTML).toContain(`MockAttributesContainer ${character.name} ${planet.name}`);
  })
})