import React from "react";
import { PaginationItemsWrapper, PaginationWrapper } from "./pagination.styled";
import { generatePaginationArray } from "y/helpers/pagination-helper";

type TPaginationProps = {
  offset: number;
  limit?: number;
  paginationItems: number;
  totalPages?: number;
};

export function Pagination({
  offset,
  paginationItems,
  totalPages,
}: TPaginationProps) {
  const pagination = generatePaginationArray(
    offset,
    totalPages || 0,
    paginationItems
  );
  console.log("pagination", pagination, offset);
  return (
    <nav aria-label="Pagination Buttons">
      <PaginationWrapper>
        {offset > 0 && (
          <PaginationItemsWrapper isMin={true} isMax={false} isActive={false}>
            First
          </PaginationItemsWrapper>
        )}
        {pagination.map((item) => {
          return (
            <PaginationItemsWrapper
              key={item}
              isMin={offset === 0 ? item === offset + 1 : false}
              isMax={false}
              isActive={item === offset + 1}
            >
              <a href="#" className="">
                {item}
              </a>
            </PaginationItemsWrapper>
          );
        })}
        <PaginationItemsWrapper isMin={false} isMax={true} isActive={false}>
          Last
        </PaginationItemsWrapper>
      </PaginationWrapper>
    </nav>
  );
}
