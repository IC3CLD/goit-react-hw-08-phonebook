import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  tokenSelector,
  nameSelector,
} from "../ReduxToolkit/Selectors/Contacts-selectors";
import { logoutOperation } from "../ReduxToolkit/Operations/auth-operations";
import contactsOperations from "../ReduxToolkit/Operations/contacts-operations";
import styled from "styled-components";

const BUTTON = styled.button`
  color: #3f51b5;
  font-size: 26px;
  border-radius: 4px;
  outline: none;
  border: none;
  margin-left: 20px;
  &:hover {
    background-color: #3f51b5;
    color: white;
  }
`;

const NameTag = styled.p`
  font-size: 26px;
  text-transform: uppercase;
`;

const Container = styled.div`
  display: flex;
`;

const UserMenu = () => {
  const dispatch = useDispatch();
  const token = useSelector((state) => tokenSelector(state));
  const name = useSelector((state) => nameSelector(state));

  useEffect(() => {
    dispatch(contactsOperations.getUser(token));
  }, []);

  const logOut = () => {
    dispatch(logoutOperation(token));
  };

  return (
    <Container>
      <NameTag>{name}</NameTag>
      <BUTTON type="button" onClick={logOut}>
        Logout
      </BUTTON>
    </Container>
  );
};

export default UserMenu;
