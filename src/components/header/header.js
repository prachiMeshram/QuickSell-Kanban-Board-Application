import React from "react";
import "./header.scss";

const Header = ({
  toggleMenu,
  showMenu,
  Groupby,
  groupbyHandler,
  orderbyHandler,
  Orderby,
}) => {
  return (
    <div className="Header">
      <div id="menu-toggle" className="menu-toggle" onClick={toggleMenu}>
        Display
      </div>
      {showMenu && (
        <div id="menu-id" className="menu active">
          <div className="select">
            <span>Grouping</span>
            <select
              value={Groupby}
              onChange={groupbyHandler}
              name="todos"
              className="filter-todo"
            >
              <option value="priority">Priority</option>
              <option value="users">Users</option>
              <option value="status">Status</option>
            </select>
          </div>
          <div className="select">
            <span>Ordering</span>
            <select
              value={Orderby}
              onChange={orderbyHandler}
              name="todos"
              className="filter-todo"
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
