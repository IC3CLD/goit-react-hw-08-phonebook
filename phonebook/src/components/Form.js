import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { allContactsSelector, tokenSelector } from "../ReduxToolkit/Selectors/Contacts-selectors";
import contactsAction from "../ReduxToolkit/toolkitActions/contacts";
import contactsOperations from "../ReduxToolkit/Operations/contacts-operations";

const BUTTON = styled.button`
  &:hover {
    background-color: #3197fd;
  }
  border-radius: 5px;
  outline: none;
  border: none;
  background-color: teal;
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
`;

const FORM = styled.form`
  width: 300px;
  height: max-content;
  border: none;
  border-radius: 3px;
  border: 1px solid black;
  padding: 20px;
  margin-bottom: 20px;
`;

const Input_form = styled.input`
  border: 1px solid #808080;
  margin: 10px 0 30px;
  padding: 10px;
`;



const Form = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => allContactsSelector(state));
  const token = useSelector((state) => tokenSelector(state));


  const formInitialState = {
    name: "",
    number: "",
  };
  
  const [{ name, number }, setForm] = useState({ ...formInitialState });


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      return;
    }
    if (contacts.every((contact) => contact.name !== name && contact.number !== number)) {
      dispatch(contactsOperations.addContact(token, name, number));
    } else {
      dispatch(contactsAction.changeError(true));
    }
    setForm({ ...formInitialState });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <FORM onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name <br />
        </label>
        <Input_form type="text" onChange={handleChange} id="name" name="name" />
        <br />
        <label htmlFor="number">
          Number <br />
        </label>
        <Input_form
          type="text"
          onChange={handleChange}
          id="number"
          name="number"
        />
        <BUTTON type="submit">Add contact</BUTTON>
      </FORM>
    </>
  );
};

export default Form;



// getUserById = (arr, name) =>
//   arr.find((x) => x.name === name || x.number === name);
