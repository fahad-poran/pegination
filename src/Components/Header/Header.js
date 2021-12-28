import React from 'react';

const Header = () => {
    return (
        <div>
  <div className={classes.menu}>
      <div className="container">
        <div className={classes.menuWrapper}>
          <div className={classes.logo}>
            <NavLink style={{ textDecoration: "none" }} to="/">
              {" "}
              <h4>Github </h4>
            </NavLink>
          </div>
          <div className={classes.searchInput}>
            <input type="text" placeholder="Search  user " />
            <button type="submit"> <FontAwesomeIcon icon={faSearch} /></button>
          </div>
          <div className="menuNav">
            <ul>
              <li>
                <NavLink
                  exact
                  activeClassName={classes.activeLink}
                  className={classes.link}
                  to="/"
                >
                  Home
                </NavLink>{" "}
              </li>
              <li>
                <NavLink
                  exact
                  activeClassName={classes.activeLink}
                  className={classes.link}
                  to="/about"
                >
                  About{" "}
                </NavLink>{" "}
              </li>
              <li>
                <NavLink
                  exact
                  activeClassName={classes.activeLink}
                  className={classes.link}
                  to="/contact"
                >
                  Contact{" "}
                </NavLink>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    </div>
    );
};

export default Header;