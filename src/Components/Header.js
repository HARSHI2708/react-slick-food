import React, { useEffect } from "react";
import {
  AppBar,
  Box,
  Toolbar,
} from "@mui/material";
import { NavLink } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";


import "../styles/HeaderStyles.css";
import "./Header.css";



const Header = () => {

  return (
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor: "#e5bf18" }}>
          <Toolbar>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink activeClassName="active" to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink to={"/cart"}>OrderCart</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        </Box>
  );
};

export default Header;