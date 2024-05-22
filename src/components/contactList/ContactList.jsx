import { useSelector } from "react-redux";
import Contact from "../contact/Contact";
import s from "./ContactList.module.css";
import { selectFilteredContacts } from "../../redux/contacts/slice";

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  console.log(filteredContacts);
  return (
    <ul className={s.contactList}>
      {filteredContacts.map((cont) => (
        <Contact
          key={cont.id}
          id={cont.id}
          name={cont.name}
          number={cont.number}
        />
      ))}
    </ul>
  );
};
export default ContactList;
