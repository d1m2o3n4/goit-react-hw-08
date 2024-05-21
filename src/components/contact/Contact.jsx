import { useDispatch } from "react-redux";
import s from "./Contact.module.css";
import { FaUserAlt, FaPhoneAlt } from "react-icons/fa";

import { deleteContactsThunk } from "../../redux/contactsOps";
const Contact = ({ id, name, phone }) => {
  const dispatch = useDispatch();

  return (
    <li className={s.contactItem}>
      <div className={s.infoWrapper}>
        <p>
          <FaUserAlt className={s.contactIcon} />
          {name}
        </p>
        <p>
          <FaPhoneAlt className={s.contactIcon} />
          {phone}
        </p>
      </div>
      <button
        className={s.contactDeleteBtn}
        onClick={() => dispatch(deleteContactsThunk(id))}
      >
        Delete
      </button>
    </li>
  );
};
export default Contact;
