import React from "react"
import ReactDOM from 'react-dom';
import axios from "axios"
import { act } from 'react-dom/test-utils';
import playersMock from "../../../__mocks__/players";
import ListPlayers from "../ListPlayers/ListPlayers";

jest.mock('axios');
jest.mock('../PlayerCard/PlayerCard', () => "mock-player-card");

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
  it("should render correctly", async () => {
    axios.get = jest.fn().mockReturnValue(Promise.resolve(playersMock));
     act(() => {
      ReactDOM.render(<ListPlayers />, container);
    });
    await Promise.resolve();
    expect(container.innerHTML).toMatchSnapshot()
  })

  it("should render error", async () => {
    axios.get = jest.fn().mockReturnValue(Promise.reject());
     act(() => {
      ReactDOM.render(<ListPlayers />, container);
    });
    await Promise.resolve();
    expect(container.innerHTML).toMatchSnapshot()
  })
})