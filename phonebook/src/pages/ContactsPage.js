import React, { useEffect } from "react";
import styled from "styled-components";
import transition from "styled-transition-group";

import Form from "../components/Form";
import Filter from "../components/Filter";
import ContactList from "../components/ContactList";
import FilterContainer from "../StyledComponents/FilterContainer";
import Loader from "../components/Loader"

import { useSelector, useDispatch } from "react-redux";
import contactsAction from "../ReduxToolkit/toolkitActions/contacts";
import contactsOperations from "../ReduxToolkit/Operations/contacts-operations";
import {
  loaderSelector,
  errorSelector,
  contactsSelector,
  tokenSelector
} from "../ReduxToolkit/Selectors/Contacts-selectors";

const Container = styled.div`
  max-width: 300px;
  margin: 0 auto;
`;

const DIV = styled.div`
  padding: 40px;
`;

const App_title = transition.h1.attrs({
  unmountOnExit: true,
  mountOnEntry: true,
  timeout: 500,
})`
  color: #016f91;
  font-size: 30px;
  font-weight: 800;
  text-align: center;
  margin-bottom: 20px;

  &:enter { opacity: 0; 
    transform: translateX(-100%); }
  &:enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1), transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:exit { opacity: 1;
  transform: translateX(0); }
  &:exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1), transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const Error = transition.div.attrs({
  unmountOnExit: true,
  mountOnEntry: true,
  timeout: 500,
})`
position: absolute;
padding: 5px 10px;
width: 300px;
top: 10px;
left: 10px;
background-color: #b81d3f;
border-radius: 8px;
text-align: center;
color: white;
  &:enter { opacity: 0; 
    transform: translateX(-100%); }
  &:enter-active {
    opacity: 1;
    transform: translateX(0);
    transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1), transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  &:exit { opacity: 1;
  transform: translateX(0); }
  &:exit-active {
    opacity: 0;
    transform: translateX(-100%);
    transition: opacity 500ms cubic-bezier(0.4, 0, 0.2, 1), transform 500ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacs = useSelector((state) => contactsSelector(state));
  const error = useSelector((state) => errorSelector(state));
  const loading = useSelector((state) => loaderSelector(state));
  const token = useSelector((state) => tokenSelector(state));

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts(token));
  }, []);

  useEffect(() => {
    if (error) {
      setTimeout(() => {
        dispatch(contactsAction.changeError(false));
      }, 1500);
    }
  }, [error]);

  return (
    <DIV>
      {loading && <Loader/>}
      <Error in={error}>
        <p>alredy in contacts!</p>
      </Error>
      <Container>
        <App_title in={true}>Phonebook</App_title>
        <Form contacts={contacs} />
        <FilterContainer in={true}>
          <Filter />
        </FilterContainer>
        <ContactList />
      </Container>
    </DIV>
  );
};

export default ContactsPage;
