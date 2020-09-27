/* eslint-disable react/display-name */
import { renderWithTheme } from "utils/tests/helpers"
import React from "react"
import NavBar from "."

jest.mock("next/link", () => {
return () => <div>MockLink</div>
})

describe("<NavBar/>", () => {
  it('renders successfully', () => {
    const { container } = renderWithTheme(
      <NavBar />
    )
    expect(container.innerHTML).toContain("MockLink");
  })
})