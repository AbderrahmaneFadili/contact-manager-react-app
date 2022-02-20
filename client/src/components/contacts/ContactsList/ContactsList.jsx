import React, { useEffect, useState } from "react";
import { Button, Container, Table, Modal, Spinner } from "react-bootstrap";
import { FaTimes, FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAllContatcs, deleteContact } from "../../../store/actions/actions";
import "./ContactsList.css";

const ContactsList = () => {
  const { contacts, loading } = useSelector((state) => state);
  const dispatch = useDispatch();

  const fetchContacts = () => {
    dispatch(getAllContatcs());
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
    fetchContacts();
  };

  useEffect(() => {
    fetchContacts();
  }, [dispatch]);

  console.log("contacts", contacts);
  return (
    <Container>
      <Link to="/addContact">
        <Button className="my-5">Add Contact</Button>
      </Link>
      {loading && (
        <Container className="d-flex justify-content-center align-items-center">
          <Spinner animation="border" role="status">
            <span className="sr-only">Loading...</span>
          </Spinner>
        </Container>
      )}
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {contacts &&
            contacts.map((contact, i) => {
              return (
                <tr key={i.toString()}>
                  <td>{contact.name}</td>
                  <td>{contact.email}</td>
                  <td>
                    <Link
                      className="edit-contact"
                      to={`/editContact/${JSON.stringify(contact)}`}
                    >
                      <FaPen color="blue" size={20} />
                    </Link>
                    <FaTimes
                      className="delete-contact"
                      onClick={() => handleDeleteContact(contact.id)}
                      color="red"
                      size={20}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
};

export default ContactsList;
