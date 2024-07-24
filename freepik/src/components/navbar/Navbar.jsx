import Logo from "../Logo";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Logo fillColor="#FFF" />
      </div>
      <div className={styles.navItems}>
        <ul>
          <li>
            <a>Tools</a>
          </li>
          <li>
            <a>Images</a>
          </li>
          <li>
            <a>Icons</a>
          </li>
          <li>
            <a>Videos</a>
          </li>
          <li>
            <a>Templates</a>
          </li>
          <li>
            <a>PSD</a>
          </li>
          <li>
            <a>Mockups</a>
          </li>
          <li>
            <a>More</a>
          </li>
          <li className={styles.pricing}>
            <a>Pricing</a>
          </li>
        </ul>
      </div>
      <div className={styles.loginSignup}>
        <ul>
          <li>
            <a>Login</a>
          </li>
          <li className={styles.signup}>
            <a>Sign Up</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
