import "./App.css";
import { useState } from "react";
// import { v4 as uuidv4 } from "uuid";
import Form from "../Form/Form";
import Contacts from "../Contacts/Contacts";
import Filter from "../Filter/Filter";

function App() {
  const [contacts, setContacts] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  ]);
  const [filter, setFilter] = useState("");

  const formSubmitHandler = (name, number, id) => {
    const newContact = {
      id,
      name,
      number,
    };
    if (contacts.find((contact) => contact.name === name)) {
      alert(`${newContact.name} is already in contacts.`);
      return;
    }
    setContacts((prevState) => [newContact, ...prevState]);
  };

  const changeFilter = (e) => {
    setFilter(e.currentTarget.value);
  };

  const getVisibleContact = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = (contactId) => {
    console.log(contactId);
    setContacts(contacts.filter((contact) => contact.id !== contactId));
  };

  return (
    <section className="phonebook">
      <h1>Phonebook</h1>
      <Form onSubmit={formSubmitHandler} />
      <h2 className="contactsHead">Contacts </h2>
      <Filter value={filter} onChange={changeFilter} />
      <Contacts contacts={getVisibleContact()} onDelete={deleteContact} />
    </section>
  );
}

export default App;
