import { expect, describe, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { Card } from "y/components";
import { characterMock } from "tests/mocks/character";

describe("Card Component", () => {
  test("should render card component properly", () => {
    render(<Card data={characterMock} />);
    expect(screen.getByText(/3-D Man/i)).toBeDefined();
    expect(screen.getByRole("img", { name: /3-D Man/ })).toBeDefined();
    expect(screen.getByAltText(/3-D Man/i)).toBeDefined();
    const link = screen.getByTestId(/3-D Man/);
    expect(link).toBeDefined();
    expect(link).toHaveProperty("href");
  });

  test("should return nothing if object is blank", () => {
    render(<Card data={{} as any} />);
    expect(screen.queryByText(/3-D Man/i)).toBeFalsy();
    expect(screen.queryByRole("img", { name: /3-D Man/i })).toBeFalsy();
    expect(screen.queryByAltText(/3-D Man/i)).toBeFalsy();
  });
});
