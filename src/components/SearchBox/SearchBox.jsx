import styles from "./SearchBox.module.css";

export default function SearchBox({ value, onChange }) {
  return (
    <input
      className={styles.input}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search by name..."
    />
  );
}
