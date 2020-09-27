import ResourceCard from "."
import { renderWithTheme } from "utils/tests/helpers"

describe("<ResourceCard/>", () => {
  it('renders successfully', () => {
    const title = 'mockTitle'
    const { container } = renderWithTheme(
      <ResourceCard title={title}/>
    )
    expect(container.innerHTML).toContain(title);
  })
})