import React from "react"
import ReactDOM from 'react-dom';
import { act } from 'react-dom/test-utils';
import playersMock from "../../../__mocks__/players";
import axios from "axios"
import PlayerCard from "../PlayerCard/PlayerCard";

jest.mock('axios');

let container;

beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

describe("ListPLayers", () => {
  it("should render correctly without props", async () => {
    ReactDOM.render(<PlayerCard />, container);
    expect(container.innerHTML).toMatchSnapshot()
  })

  it("should render correctly", async () => {
    axios.get = jest.fn().mockReturnValue(Promise.reject());
    ReactDOM.render(<PlayerCard item={playersMock.data.players[0]}/>, container);
    expect(container.innerHTML).toMatchSnapshot()
  })
})