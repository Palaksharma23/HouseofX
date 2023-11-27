import React from "react";
import "./Pagination.css";

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);

  const goToNextPage = () => {
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  const goToPrevPage = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  return (
    <div>
      <ul className="pagination-list-container">
        <li>
          <a onClick={goToPrevPage} href="#">
            Previous
          </a>
        </li>
        {pageNumbers.map((pgNumber) => (
          <li
            key={pgNumber}
            className={currentPage == pgNumber ? "active" : ""}
          >
            <a onClick={() => setCurrentPage(pgNumber)} href="#">
              {pgNumber}
            </a>
          </li>
        ))}
        <li>
          <a onClick={goToNextPage} href="#">
            Next
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
