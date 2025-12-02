import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import styles from "./ContactForm.module.css";

const Schema = Yup.object({
  name: Yup.string().min(3).max(50).required("Required"),
  number: Yup.string().min(3).max(50).required("Required"),
});

export default function ContactForm({ onAdd }) {
  const handleSubmit = (values, actions) => {
    const contact = {
      ...values,
      id: nanoid(),
    };
    onAdd(contact);
    actions.resetForm();
  };
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={Schema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <label>Name</label>
        <Field name="name" />
        <ErrorMessage name="name" />

        <label>Number</label>
        <Field name="number" />
        <ErrorMessage name="number" />

        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
}
