import React from "react";
import "../App.css";

const Pagination = ({ postsPerPage, totalPosts, paginate, currentPage }) => {
  const totalPages = totalPosts / postsPerPage;

  const prevPage = () => {
    if (currentPage >= 2) {
      paginate(currentPage - 1);
    }
  };
  const nextPage = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
    }
  };

  return (
    <nav id="pager">
      <button id="previous" onClick={prevPage}>
        PREVIOUS
      </button>{" "}
      <span id="pagination">{`Page ${currentPage} of ${totalPages}`}</span>{" "}
      <button id="next" onClick={nextPage}>
        NEXT
      </button>
    </nav>
  );
};

export default Pagination;
