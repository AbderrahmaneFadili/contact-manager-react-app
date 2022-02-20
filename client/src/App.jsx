import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Layout/Header";
//Components
import ContactsList from "./components/contacts/ContactsList/ContactsList";
import AddContact from "./components/contacts/AddContact/AddContact";
import EditContact from "./components/contacts/EditContact/EditContact";
const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/addContact" component={AddContact} />

        <Route exact path="/editContact" component={EditContact} />

        <Route exact path="/editContact/:id" component={EditContact} />

        <Route path="/" component={ContactsList} />
      </Switch>
    </Router>
  );
};

export default App;
