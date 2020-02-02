import React from "react"
import renderer from "react-test-renderer"
import Header from "../Header/Header"

describe("Header", () => {
  it("should render correctly without props", () => {
    const tree = renderer
      .create(<Header siteTitle="Default Starter" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})