import styles from "./Contact.module.css";

export default function Contact({ contact, onDelete }) {
  return (
    <div className={styles.card}>
      <div className={styles.item}>
        <div className={styles.name}>👤 {contact.name}</div>
        <div className={styles.number}> 📞 {contact.number}</div>
      </div>
      <button
        type="button"
        className={styles.delete}
        onClick={() => onDelete(contact.id)}
      >
        Delete
      </button>
    </div>
  );
}
