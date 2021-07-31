import PropTypes from "prop-types";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import style from "./Form.module.css";

function Form({ onSubmit }) {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleNameChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "number":
        setNumber(e.target.value);
        break;
      default:
        return;
    }
  };

  const formReset = () => {
    setName("");
    setNumber("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuidv4();
    onSubmit(name, number, id);
    formReset();
  };

  return (
    <form onSubmit={handleSubmit} className={style.formSection}>
      <label className={style.formLabel}>
        Name{" "}
        <input
          onChange={handleNameChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>

      <label className={style.formLabel}>
        Phone{" "}
        <input
          onChange={handleNameChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять из цифер и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>

      <button type="submit" className={style.formBtn}>
        Save
      </button>
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
