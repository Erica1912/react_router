import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contact from "./components/Contact";
import Init from "./components/Init";
import Users from "./components/Users";
import useFetch from "./hooks/FetcHook";
import "./asset/App.css";
import Detail from "./components/Detail";

function App() {
  const { response, error, isLoading } = useFetch([]);

  if (isLoading) {
    return <h1>Cargando sitio...</h1>;
  }
  if (error) {
    return <h1>{error.toString()}</h1>;
  }

  return (
    <Router>
      <div className="container">
        <div className="btn-group">
          <Link to="/" className="btn btn-dark">
            Inicio
          </Link>
          <Link to="/Users" className="btn btn-dark">
            Users
          </Link>
        </div>
        <br />
        <Switch>
          <Route path="/Users/:id" exact>
            <Detail  />
          </Route>
          <Route path="/" exact>
            <Init />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/Users">
            <Users value={response} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
