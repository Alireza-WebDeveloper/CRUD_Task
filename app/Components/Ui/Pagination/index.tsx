'use client';
// Pagination.js
import React from 'react';
import { useCallback } from 'react';
import ReactPaginate from 'react-paginate';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
// استایل‌های Tailwind CSS

interface PaginationProps {
  pageCount: number;
  query: string;
  initialPage: any;
}

const Pagination: React.FC<PaginationProps> = ({
  pageCount,
  query,
  initialPage,
}) => {
  // State Query Page On Url
  const searchParams = useSearchParams();
  const pathName = usePathname();
  const router = useRouter();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );
  // Set Query Page Number
  const onPageChange = (e: { selected: number }) => {
    const pageNumber = String(e.selected + 1);
    if (pageNumber === '1') {
      router.push(pathName);
    } else {
      router.push(pathName + '?' + createQueryString(query, pageNumber));
    }
  };

  return (
    <ReactPaginate
      pageCount={pageCount}
      pageRangeDisplayed={3}
      marginPagesDisplayed={1}
      onPageChange={onPageChange}
      initialPage={parseInt(initialPage) - 1}
      previousLabel="Previous"
      nextLabel="Next"
      breakLabel="..."
      breakClassName="break-me"
      containerClassName="pagination"
      activeClassName="active"
      pageClassName="page-item"
      previousClassName="page-item"
      nextClassName="page-item"
      pageLinkClassName="page-link"
      previousLinkClassName="page-link"
      nextLinkClassName="page-link"
    />
  );
};

export default Pagination;
