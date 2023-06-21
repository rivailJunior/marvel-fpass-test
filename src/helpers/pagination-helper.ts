function generatePaginationArray(
  currentPage: number,
  totalPages: number,
  maxVisiblePages: number
) {
  const paginationArray = [];

  // Calculate the range of visible page numbers
  const startPage = Math.max(currentPage - Math.floor(maxVisiblePages / 2), 1);
  const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

  // Generate the pagination array
  for (let page = startPage; page <= endPage; page++) {
    paginationArray.push(page);
  }

  return paginationArray;
}

export { generatePaginationArray };
