import { render, screen } from "@testing-library/react";
import { characterMock } from "tests/mocks/character";
import { describe, expect, test } from "vitest";
import { CardDescription } from "y/components";

describe("CardDescription", () => {
  test("should render card titles properly", () => {
    render(<CardDescription data={characterMock} />);

    expect(screen.getByText(/Character Name/i)).toBeDefined();
    expect(screen.getByText(/Comics/i)).toBeDefined();
    expect(screen.getByText(/Séries/i)).toBeDefined();
    expect(screen.getByText(/Stories/i)).toBeDefined();
    expect(screen.getByRole("img", { name: /Profile/i })).toBeDefined();
  });

  test.each([["comics"], ["series"]])(
    "should render card values properly in %s",
    (feats) => {
      render(<CardDescription data={characterMock} />);
      expect(screen.getAllByText(/3-D Man/i)).toBeDefined();
      const featsItems = screen.getAllByTestId(feats);
      expect(featsItems).toBeDefined();
      expect(featsItems.length).toEqual(characterMock[feats].items.length);
    }
  );
});
