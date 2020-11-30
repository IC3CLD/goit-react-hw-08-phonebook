import React from "react";
import styled from "styled-components";
import contactsOperations from "../ReduxToolkit/Operations/contacts-operations";
import { useSelector, useDispatch } from "react-redux";
import { tokenSelector } from "../ReduxToolkit/Selectors/Contacts-selectors";



const BUTTON = styled.button`
  &:hover {
    background-color: #3197fd;
  }
  width: 45px;
  height: 25px;
  color: #ffffff;
  font-size: 10px;
  font-weight: 800;
  border: none;
  border-radius: 5px;
  background-color: #ff335c;
  cursor: pointer;
`;

const ContactListItem = ({ id, name, number }) => {

  const token = useSelector((state) => tokenSelector(state));
  const dispatch = useDispatch();


  return (
    <>
      <p>{name}:</p>
      <span>{number}</span>
      <BUTTON type="button" onClick={(e) => dispatch(contactsOperations.deleteContact(token, id))}>
        Delete
      </BUTTON>
    </>
  );
};

export default  ContactListItem;

