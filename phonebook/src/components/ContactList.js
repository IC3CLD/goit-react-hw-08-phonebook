import React from "react";
import { v4 as uuidv4 } from "uuid";
import ContactListItem from "./ContactListItem";
import styled from "styled-components";
import LI from "../StyledComponents/Item";
import { TransitionGroup } from "react-transition-group";
import {
  getVisibleContacts,
  filterSelector,
} from "../ReduxToolkit/Selectors/Contacts-selectors";
import { useSelector, useDispatch } from "react-redux";


const UL = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 320px;
  height: auto;
  list-style: none;
  margin: 0;
  padding: 10px 0;
`;

const ContactList = ({ onRemove }) => {

  const dispatch = useDispatch();
  const contacts = useSelector((state) => getVisibleContacts(state));
  const filter = useSelector((state) => filterSelector(state));


  return (
    <TransitionGroup component={UL}>
      {contacts.map(({ id, name, number }) => (
        <LI key={id}>
          <ContactListItem
            key={uuidv4()}
            id={id}
            name={name}
            number={number}
            onRemove={onRemove}
          />
        </LI>
      ))}
    </TransitionGroup>
  );
};

export default ContactList;
