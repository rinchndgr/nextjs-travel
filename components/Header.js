import styles from './Header.module.css';
import ArrowDown from './Icons/ArrowDown';

function Header() {
  return (
    <div className="flex w-full justify-between">
      <h1 className={styles.logo__text}>travelaja</h1>
      <ul className="flex space-x-5 items-center">
        <li className={`${styles.header__text} !font-bold`}>Home</li>
        <li className={styles.header__text}>Discover</li>
        <li className={styles.header__text}>Services</li>
        <li className={styles.header__text}>News</li>
        <li className={styles.header__text}>About Us</li>
        <li className={styles.header__text}>Contact</li>
      </ul>
      <section className="flex items-center space-x-2">
        <h1>ID</h1>
        <ArrowDown />
      </section>
    </div>
  );
}

export default Header;
