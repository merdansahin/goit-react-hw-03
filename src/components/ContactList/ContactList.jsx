import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

export default function ContactList({ contacts, onDelete }) {
  return (
    <ul className={styles.list}>
      {contacts.map((c) => (
        <Contact key={c.id} contact={c} onDelete={onDelete} />
      ))}
    </ul>
  );
}
