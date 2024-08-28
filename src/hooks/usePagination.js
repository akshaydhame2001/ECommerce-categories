"use client";

import { useState } from "react";

const usePagination = ({ perPage, totalItems }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(totalItems / perPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getCurrentItems = (items) => {
    const startIndex = (currentPage - 1) * perPage;
    return items.slice(startIndex, startIndex + perPage);
  };

  return {
    currentPage,
    totalPages,
    goToPage,
    getCurrentItems,
  };
};

export default usePagination;
