export const getStartAndEndRow = (pageIndex: number, pageSize: number, totalItems: number) => {
  const startRow = totalItems > 0 ? pageIndex * pageSize + 1 : 0;
  const endRow = Math.min(totalItems, (pageIndex + 1) * pageSize);
  return { startRow, endRow };
};
