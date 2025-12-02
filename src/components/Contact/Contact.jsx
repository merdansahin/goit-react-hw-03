import styles from "./Contact.module.css";

export default function Contact({ contact, onDelete }) {
  return (
    <li className={styles.item}>
      {contact.name}: {contact.number}
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </li>
  );
}
