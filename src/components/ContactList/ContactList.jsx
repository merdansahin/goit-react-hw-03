import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

export default function ContactList({ contacts, onDeleteContact }) {
  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        {contacts.map((contact) => (
          <Contact
            key={contact.id}
            contact={contact}
            onDelete={onDeleteContact}
          />
        ))}
      </ul>
    </div>
  );
}
