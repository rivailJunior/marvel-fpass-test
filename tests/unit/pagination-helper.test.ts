import { describe, expect, test } from "vitest";
import { generatePaginationArray } from "y/helpers/pagination-helper";

describe("generatePaginationArray", () => {
  test("generates the pagination array correctly", () => {
    const currentPage = 5;
    const totalPages = 10;
    const maxVisiblePages = 5;

    const paginationArray = generatePaginationArray(
      currentPage,
      totalPages,
      maxVisiblePages
    );

    expect(paginationArray).toEqual([3, 4, 5, 6, 7]);
  });

  test("handles edge case when total pages is less than max visible pages", () => {
    const currentPage = 2;
    const totalPages = 3;
    const maxVisiblePages = 5;

    const paginationArray = generatePaginationArray(
      currentPage,
      totalPages,
      maxVisiblePages
    );

    expect(paginationArray).toEqual([1, 2, 3]);
  });

  test("handles edge case when currentPage is near the beginning", () => {
    const currentPage = 1;
    const totalPages = 10;
    const maxVisiblePages = 5;

    const paginationArray = generatePaginationArray(
      currentPage,
      totalPages,
      maxVisiblePages
    );

    expect(paginationArray).toEqual([1, 2, 3, 4, 5]);
  });

  test("handles edge case when currentPage is near the end", () => {
    const currentPage = 10;
    const totalPages = 10;
    const maxVisiblePages = 5;

    const paginationArray = generatePaginationArray(
      currentPage,
      totalPages,
      maxVisiblePages
    );

    expect(paginationArray).toEqual([8, 9, 10]);
  });
});
