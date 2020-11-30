import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import contactsActios from "../ReduxToolkit/toolkitActions/contacts";
import {
  getVisibleContacts,
  filterSelector,
} from "../ReduxToolkit/Selectors/Contacts-selectors";

const INPUT = styled.input`
  width: 260px;
  height: 30px;
  border-radius: 3px;
  border: 1px solid #808080;
  padding: 10px;
  margin: 10px 0;
`;

const Label = styled.label`
  font-size: 20px;
  font-weight: 500;
`;

const Filter = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => getVisibleContacts(state));
  const filter = useSelector((state) => filterSelector(state));

  return (
    <>
      <Label htmlFor="filter">Find contact by name</Label>
      <INPUT
        id="filter"
        type="text"
        value={filter}
        onChange={(e) =>
          dispatch(contactsActios.changeFilter(e.target.value))}
      />
    </>
  );
};

export default Filter;
