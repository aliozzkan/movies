import React, { ReactElement } from "react";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";

interface Props {
  selectPage: (page: number) => void;
  page: number;
  pagesCount: number;
}

function PaginationComp({ selectPage, page, pagesCount }: Props): ReactElement {
  return (
    <Pagination aria-label="Page navigation example">
      <PaginationItem>
        <PaginationLink
          first
          onClick={() => {
            selectPage(1);
          }}
        />
      </PaginationItem>
      <PaginationItem disabled={page === 1}>
        <PaginationLink
          previous
          onClick={() => {
            selectPage(page - 1);
          }}
          disabled={page === 1}
        />
      </PaginationItem>

      {page - 4 >= 1 && (
        <PaginationItem>
          <PaginationLink
            onClick={() => {
              selectPage(page - 4);
            }}
          >
            ...
          </PaginationLink>
        </PaginationItem>
      )}
      {page - 3 >= 1 && (
        <PaginationItem>
          <PaginationLink
            onClick={() => {
              selectPage(page - 3);
            }}
          >
            {page - 3}
          </PaginationLink>
        </PaginationItem>
      )}
      {page - 2 >= 1 && (
        <PaginationItem>
          <PaginationLink
            onClick={() => {
              selectPage(page - 2);
            }}
          >
            {page - 2}
          </PaginationLink>
        </PaginationItem>
      )}
      {page - 1 >= 1 && (
        <PaginationItem>
          <PaginationLink
            onClick={() => {
              selectPage(page - 1);
            }}
          >
            {page - 1}
          </PaginationLink>
        </PaginationItem>
      )}
      <PaginationItem active>
        <PaginationLink>{page}</PaginationLink>
      </PaginationItem>
      {page + 1 <= pagesCount && (
        <PaginationItem>
          <PaginationLink
            onClick={() => {
              selectPage(page + 1);
            }}
          >
            {page + 1}
          </PaginationLink>
        </PaginationItem>
      )}
      {page + 2 <= pagesCount && (
        <PaginationItem>
          <PaginationLink
            onClick={() => {
              selectPage(page + 2);
            }}
          >
            {page + 2}
          </PaginationLink>
        </PaginationItem>
      )}
      {page + 3 <= pagesCount && (
        <PaginationItem>
          <PaginationLink
            onClick={() => {
              selectPage(page + 3);
            }}
          >
            {page + 3}
          </PaginationLink>
        </PaginationItem>
      )}
      {page + 4 <= pagesCount && (
        <PaginationItem>
          <PaginationLink
            onClick={() => {
              selectPage(page + 4);
            }}
          >
            ...
          </PaginationLink>
        </PaginationItem>
      )}
      <PaginationItem disabled={page === pagesCount}>
        <PaginationLink
          next
          onClick={() => {
            selectPage(page + 1);
          }}
          disabled={page === pagesCount}
        />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink
          last
          onClick={() => {
            selectPage(pagesCount);
          }}
        />
      </PaginationItem>
    </Pagination>
  );
}

export default PaginationComp;
