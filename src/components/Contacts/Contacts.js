import PropTypes from "prop-types";
import React from "react";
import style from "./Contacts.module.css";
import ContactItem from "./ContactItem/ContactItem";

function Contacts({ contacts, onDelete }) {
  return (
    <section className={style.contacts}>
      <ul className={style.contactsList}>
        {contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} onClick={onDelete} />
        ))}
      </ul>
    </section>
  );
}

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

export default Contacts;
