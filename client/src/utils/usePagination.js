import { useState } from 'react';

export const usePagination = (data, perPage) => {
  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = Math.ceil(data.length / perPage);

  const currentData = () => {
    const begin = (currentPage - 1) * perPage;
    const end = begin + perPage;
    return data.slice(begin, end);
  }

  const next = () => setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));

  const previous = () => setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));

  return { next, previous, currentData, currentPage, maxPage };
};
