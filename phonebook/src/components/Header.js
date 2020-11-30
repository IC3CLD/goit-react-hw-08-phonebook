import React from "react";
import { useSelector } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import styled from "styled-components";
import { tokenSelector } from "../ReduxToolkit/Selectors/Contacts-selectors";
import { NavLink } from "react-router-dom";
import UserMenu from "./UserMenu";

const NavigationLink = styled(NavLink)`
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  padding: 20px;
  font-size: 26px;
  &:hover {
    color: black;
  }
`;

const Header = () => {
  const token = useSelector((state) => tokenSelector(state));

  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        {token && (
          <NavigationLink to="/contacts" className="link">
            Contacts
          </NavigationLink>
        )}
        {!token && (
          <NavigationLink to="/register" className="link">
            Registration
          </NavigationLink>
        )}
        {!token && (
          <NavigationLink to="/login" className="link">
            Login
          </NavigationLink>
        )}
        {token && <UserMenu />}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
