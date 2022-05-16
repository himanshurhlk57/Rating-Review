import React from "react";
import "./pagination.css";

function Pagination({ setPage, page }) {
  const handlePagination = () => {
    if (page === 2) {
      setPage(page - 1);
    }
    window.scroll(0, 0);
  };
  const handlePagination2 = () => {
    setPage(page + 1);
    window.scroll(0, 0);
  };
  const handlePagination3 = () => {
    setPage(page + 2);
    window.scroll(0, 0);
  };
  const handlePagination4 = () => {
    setPage(page + 3);
    window.scroll(0, 0);
  };
  const handlePagination5 = () => {
    setPage(page + 4);
    window.scroll(0, 0);
  };
  const handlePagination6 = () => {
    setPage(page + 5);
    window.scroll(0, 0);
  };
  const handlePagination7 = () => {
    setPage(page + 6);
    window.scroll(0, 0);
  };

  return (
    <div className="paginationWrapper">
      <div className="spanStyle">
        <span className="pageNo" onClick={handlePagination}>
          1
        </span>
      </div>
      <div className="spanStyle">
        <span className="pageNo" onClick={handlePagination2}>
          2
        </span>
      </div>
      <div className="spanStyle">
        <span className="pageNo" onClick={handlePagination3}>
          3
        </span>
      </div>
      <div className="spanStyle">
        <span className="pageNo" onClick={handlePagination4}>
          4
        </span>
      </div>
      <div className="spanStyle">
        <span className="pageNo" onClick={handlePagination5}>
          5
        </span>
      </div>
      <div className="spanStyle">
        <span className="pageNo" onClick={handlePagination6}>
          6
        </span>
      </div>
      <div className="spanStyle">
        <span className="pageNo" onClick={handlePagination7}>
          7
        </span>
      </div>
  
    </div>
  );
}

export default Pagination;
