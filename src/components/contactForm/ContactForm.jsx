import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";

import { addContactThunk } from "../../redux/contactsOps";
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  phone: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});
const ContactForm = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ name: "", phone: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        dispatch(addContactThunk(values));
        console.log(values);
        actions.resetForm();
      }}
    >
      <Form className={s.contForm}>
        <div className={s.inputWrapper}>
          <label htmlFor="name">Name</label>
          <Field name="name" />
          <ErrorMessage component="div" name="name" className={s.errorMsg} />
        </div>
        <div className={s.inputWrapper}>
          <label htmlFor="phone">Phone</label>
          <Field name="phone" />
          <ErrorMessage component="div" name="phone" className={s.errorMsg} />
        </div>
        <button type="submit" className={s.addContactBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
