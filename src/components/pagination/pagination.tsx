import React from "react";
import { PaginationItemsWrapper, PaginationWrapper } from "./pagination.styled";
import { generatePaginationArray } from "y/helpers/pagination-helper";
import Link from "next/link";
import { PagesRoutes } from "y/helpers/pages-routes";

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

  return (
    <nav aria-label="Pagination Buttons">
      <PaginationWrapper>
        {offset > 0 && (
          <Link href={`${PagesRoutes.characters}/${encodeURIComponent(0)}`}>
            <PaginationItemsWrapper isMin={true} isMax={false} isActive={false}>
              First
            </PaginationItemsWrapper>
          </Link>
        )}
        {pagination.map((item) => {
          return (
            <Link
              key={item}
              href={`${PagesRoutes.characters}/${encodeURIComponent(item - 1)}`}
            >
              <PaginationItemsWrapper
                key={item}
                isMin={offset === 0 ? item === offset + 1 : false}
                isMax={false}
                isActive={item === offset + 1}
              >
                <a href="#" className="">
                  {item - 1}
                </a>
              </PaginationItemsWrapper>
            </Link>
          );
        })}
        <Link
          href={`${PagesRoutes.characters}/${encodeURIComponent(
            !!totalPages && totalPages - 1
          )}`}
        >
          <PaginationItemsWrapper isMin={false} isMax={true} isActive={false}>
            Last
          </PaginationItemsWrapper>
        </Link>
      </PaginationWrapper>
    </nav>
  );
}
