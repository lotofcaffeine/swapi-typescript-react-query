/* eslint-disable  @typescript-eslint/no-explicit-any */
/* eslint-disable react/display-name */
import ResourceList from "."
import { renderWithTheme } from "utils/tests/helpers"

jest.mock('components/ResourceItem', () => {
  return {
    __esModule: true,
    default: (props: any) => {
    return props?.url?(<li>MockResourceItem {props.url}</li>):(<li>MockResourceItem</li>)
    }
  }
})
describe("<ResourceList/>", () => {
  it('renders successfully', () => {
    const url1 = 'url1'
    const url2 = 'url2'
    const urls = [url1, url2]
    const { container } = renderWithTheme(
      <ResourceList info={urls}/>
    )
    expect(container.innerHTML).toContain(url1);
    expect(container.innerHTML).toContain(url2);
  })
})