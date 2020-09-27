/* eslint-disable  @typescript-eslint/no-explicit-any */
import AttributesContainer from "."
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
describe("<AttributesContainer/>", () => {
  it('renders successfully', () => {
    
    (useResourceQuery as jest.Mock<any, any>).mockImplementation(() => ({
      data: planet
    }))
    const { container } = renderWithTheme(
      <AttributesContainer character={character} planet={planet} />
    )
    expect(container.innerHTML).toContain(character.birth_year);
    expect(container.innerHTML).toContain(character.eye_color);
    expect(container.innerHTML).toContain(character.gender);
    expect(container.innerHTML).toContain(character.hair_color);
    expect(container.innerHTML).toContain(character.height);
    expect(container.innerHTML).toContain(character.mass);
    expect(container.innerHTML).toContain(character.skin_color);
    expect(container.innerHTML).toContain(planet.name);
  })
})