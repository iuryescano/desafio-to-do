import styles from './Header.module.css'

export function Header(){
  return (
    <header className={styles.header}>   
      <strong className={styles.texto1}>uniTo</strong> <strong className={styles.texto2}>do</strong>
    </header>

  );
}