import { render, screen } from "@testing-library/react";
import { characterMock } from "tests/mocks/character";
import { describe, test, expect } from "vitest";
import { GridCards } from "y/components";

const mockData = [
  characterMock,
  { ...characterMock, id: "1" },
  { ...characterMock, id: "2" },
];
describe("GridCards", () => {
  test("renders grid cards correctly", () => {
    render(<GridCards data={mockData} />);

    const gridCards = screen.getAllByText(/3-D Man/i);
    expect(gridCards.length).toBe(mockData.length);

    mockData.forEach((character, index) => {
      const card = gridCards[index];
      expect(card?.innerHTML).toBe(character.name);
    });
  });

  test("renders no grid cards when data is empty", () => {
    const { queryAllByTestId } = render(<GridCards data={[]} />);

    const gridCards = queryAllByTestId("grid-card");
    expect(gridCards.length).toBe(0);
  });
});
