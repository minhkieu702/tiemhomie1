import React from "react";

function Search() {
  return (
    <div className="me-2">
      <div className="input-group rounded">
        <input
          type="search"
          className="form-control rounded ps-2"
          placeholder="Tìm kiếm sản phẩm"
          aria-label="Search"
          aria-describedby="search-addon"
        />
        <span className="input-group-text border-0" id="search-addon">
          <i className="fas fa-search" />
        </span>
      </div>
    </div>
  );
}

export default Search;
