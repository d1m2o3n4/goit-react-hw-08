import ContactForm from "../components/contactForm/ContactForm";
import SearchBox from "../components/searchBox/SearchBox";
import ContactList from "../components/contactList/ContactList";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContactsThunk } from "../redux/contacts/operations";

export const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContactsThunk());
  }, [dispatch]);
  return (
    <div className="formWrapper">
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};
