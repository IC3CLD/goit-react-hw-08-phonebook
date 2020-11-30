import React, { useEffect, Suspense, lazy } from "react";
import { Switch, Route, Redirect, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";


import Header from "./Header";
import Loader from "./Loader";

import { tokenSelector } from "../ReduxToolkit/Selectors/Contacts-selectors";

const ContactsPage = lazy(() => import("../pages/ContactsPage"));
const RegisterPage = lazy(() => import("../pages/RegisterPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));

const Container = styled.div`
  margin: 0 auto;
`;

const App = () => {
  const token = useSelector((state) => tokenSelector(state));
  const history = useHistory();
  useEffect(() => {
    if (token) {
      history.push("/contacts");
    } else {
      history.push("/login");
    }
  }, [token]);
  return (
    <Container>
      <Header />
      <Switch>
        <Suspense fallback={<Loader/>}>
          {token ? (
            <Route exact path="/contacts" component={ContactsPage} />
          ) : (
            <Route path="/login" component={LoginPage} />
          )}
          <Route path="/register" component={RegisterPage} />
          {/* <Route path="/login" component={LoginPage} /> */}
        </Suspense>
        <Redirect path="/login" to="/login" />
      </Switch>
    </Container>
  );
};

export default App;
