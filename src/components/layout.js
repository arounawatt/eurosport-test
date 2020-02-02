import React from "react";
import PropTypes from "prop-types";

import Header from "./Header/Header";
import "../styles/base.scss";

const Layout = ({ children }) => {
  return (
    <>
      <Header siteTitle="Eurosport tennis players" />
        <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
