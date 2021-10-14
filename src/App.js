import React from "react";
import { Layout, Typography, Space } from "antd";
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import {
  Navbar,
  Homepage,
  Exchanges,
  Cryptocurrencies,
  CryptoDetails,
  News,
  SaveUser,
  EditUser,
} from "./components";
import "./app.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="navbar">
          <Navbar />
        </div>
        <div className="main">
          <Layout>
            <div className="routes">
              <Switch>
                <Route exact path="/">
                  <Homepage />
                </Route>
                <Route exact path="/exchanges">
                  <Exchanges />
                </Route>
                <Route exact path="/cryptocurrencies">
                  <Cryptocurrencies />
                </Route>
                <Route exact path="/crypto/:coinId">
                  <CryptoDetails />
                </Route>
                <Route exact path="/news">
                  <News />
                </Route>
                <Route exact path="/adduser">
                  <SaveUser />
                </Route>
                <Route exact path="/edituser/:id">
                  <EditUser />
                </Route>
              </Switch>
            </div>
          </Layout>
          <div className="footer">
            <Typography.Title
              level={5}
              style={{ color: "white", textAlign: "center" }}
            >
              CryptoApp <br />
              All rights reserved
            </Typography.Title>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/exchanges">Exchanges</Link>
              <Link to="/news">News</Link>
            </Space>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
