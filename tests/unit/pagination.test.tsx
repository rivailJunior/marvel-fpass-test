import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import { Pagination } from "y/components";

describe("Pagination", () => {
  test("should render pagination component properly", () => {
    const paginationItems = 5;
    render(
      <Pagination
        paginationItems={paginationItems}
        offset={1}
        limit={20}
        totalPages={50}
      />
    );
    for (let item = 0; item < paginationItems; item++) {
      expect(screen.getByText(item)).toBeDefined();
    }
    expect(screen.getByText(/first/i)).toBeDefined();
    expect(screen.queryByText(/last/i)).toBeDefined();
  });
});
