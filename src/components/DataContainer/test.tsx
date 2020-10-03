/* eslint-disable react/display-name */
import DataContainer from "."
import { createCharacter } from "utils/tests/utils"
import { renderWithTheme } from "utils/tests/helpers"

jest.mock("components/Card", () => {
return () => <li>MockCard</li>
})


describe("<DataContainer/>", () => {
  it('renders successfully', () => {
    const character = createCharacter()
    const { container } = renderWithTheme(
      <DataContainer items={[ character ]} />
    )
    expect(container.innerHTML).toContain("MockCard");
  })
})
