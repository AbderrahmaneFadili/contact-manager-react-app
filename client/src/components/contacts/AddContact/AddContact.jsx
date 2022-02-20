import React, { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addContact } from "../../../store/actions/actions";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router";

const AddContact = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const handleValueChange = ({ target: { name, value } }) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email } = values;
    if (name && email) {
      dispatch(addContact({ id: uuidv4(), name, email }));
      setValues((prev) => ({
        ...prev,
        name: "",
        email: "",
      }));
      history.push("/");
    } else {
      alert("please enter all the fields");
    }
  };
  return (
    <Container>
      <Form autoCorrect="off" className="my-5" onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Control
            type="text"
            onChange={handleValueChange}
            name="name"
            placeholder="Enter name"
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Control
            onChange={handleValueChange}
            type="text"
            name="email"
            placeholder="Enter email"
          />
        </Form.Group>
        <Button variant="dark" type="submit" className="btn-block">
          Add
        </Button>
      </Form>
    </Container>
  );
};

export default AddContact;
