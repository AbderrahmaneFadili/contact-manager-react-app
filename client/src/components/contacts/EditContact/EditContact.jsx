import React, { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { editContact } from "../../../store/actions/actions";
const EditContact = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const [values, setValues] = useState({
    id: "",
    name: "",
    email: "",
  });

  const { id } = useParams();

  useEffect(() => {
    const contact = JSON.parse(id);
    setValues((pre) => ({
      ...pre,
      id: contact.id,
      name: contact.name,
      email: contact.email,
    }));
  }, []);

  const handleValueChange = ({ target: { name, value } }) => {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { id, name, email } = values;
    dispatch(editContact(id, { name, email }));
    history.push("/");
  };
  return (
    <Container>
      <Form autoCorrect="off" className="my-5" onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Control
            onChange={handleValueChange}
            name="name"
            value={values.name}
            type="text"
            placeholder="Edit name"
          />
        </Form.Group>

        <Form.Group controlId="email">
          <Form.Control
            name="email"
            value={values.email}
            type="text"
            placeholder="Edit email"
            onChange={handleValueChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="btn-block">
          Edit
        </Button>
      </Form>
    </Container>
  );
};

export default EditContact;
