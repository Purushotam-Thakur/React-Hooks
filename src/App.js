import React from 'react';
import './App.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import HeaderNavbar from "./components/common/header-navbar";
import {Card, Row} from "react-bootstrap";

import Home from "./components/home";

import HookCounter from "./components/state-hook/HookCounter";
import FormOnChange from "./components/state-hook/FormOnChange";
import AddItems from "./components/state-hook/AddItems";

function App() {
  return (
      <BrowserRouter>
        <HeaderNavbar/>
        <Card>
            <Card.Body>
                <Row> &nbsp; </Row>
                <Switch>
                    <Route exact path="/"><Home/></Route>

                    <Route path="/state-hook/hook-counter"><HookCounter /></Route>
                    <Route path="/state-hook/form-on-change"><FormOnChange /></Route>
                    <Route path="/state-hook/add-items"><AddItems /></Route>

                </Switch>
            </Card.Body>
        </Card>
      </BrowserRouter>
  );
}

export default App;
