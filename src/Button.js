import styles from "./Button.module.css";

function Btn({ text, onClick }) {
  return (
    <button onClick={onClick} className={styles.btn}>
      {text}
    </button>
  );
}

export default Btn;
