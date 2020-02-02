import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./Header.scss";

const Header = ({ siteTitle }) => (
  <header className="Header">
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
        <img className="Header__logo" src="https://zephyr-ui.eurosport.com/1.56.0/e6cae33e67433ad1dfcd8af34364b8fc.svg" alt="eurosport" />
        </Link>
      </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
