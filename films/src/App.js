import "./App.css";
import React from "react";
import { Provider } from "react-redux";
import store from "./components/redux/store/index";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/pages/Home/index";
import Result from "./components/pages/Result/index";
import MovieDetail from "./components/pages/MovieDetail/index";
const App = (props) => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Home} />
      <Route path="/result" component={Result} />
      <Route path="/movie/:id" component={MovieDetail} />
    </BrowserRouter>
  );
};

const ConnectedApp = (props) => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};
export default ConnectedApp;
