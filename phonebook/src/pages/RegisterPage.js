import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { registerOperation } from "../ReduxToolkit/Operations/auth-operations";
import styled from "styled-components";
import { errorSelector } from "../ReduxToolkit/Selectors/Contacts-selectors";

const Container = styled.div`
  display: block;
  padding: 40px;
  margin: 0 auto;
  width: 400px;
`;

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

const Alert = styled.p`
font-size: 26;
color: red;
text-transform: uppercase;
`;


const initioalState = { name: "", email: "", password: "" };

const RegisterPage = () => {
  const [form, setForm] = useState(initioalState);
  const error = useSelector((state) => errorSelector(state));
  const dispatch = useDispatch();

  const inputHandler = ({ target }) => {
    const { name, value } = target;
    setForm((state) => ({ ...state, [name]: value }));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(registerOperation(form));
  };

  return (
    <Container>
      <h1>Register</h1>
      <FORM onSubmit={submitHandler}>
        <label htmlFor="name">name</label>
        <br />
        <Input_form
          onChange={inputHandler}
          type="text"
          id="name"
          name="name"
          value={form.name}
          />
        <br />
        <label htmlFor="email">email</label>
        <br />
        <Input_form
          onChange={inputHandler}
          type="email"
          id="email"
          name="email"
          value={form.email}
          />
        <label htmlFor="password">password</label>
        <br />
        <Input_form
          onChange={inputHandler}
          type="password"
          id="password"
          name="password"
          value={form.password}
          />
        <br />
          {error && <Alert>invalid user data</Alert>}
        <BUTTON type="submit">Register</BUTTON>
      </FORM>

      <p>
        If you already registered, please go <NavLink to="/login">here</NavLink>{" "}
        for login!
      </p>
    </Container>
  );
};

export default RegisterPage;
