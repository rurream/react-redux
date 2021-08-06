import { NavLink } from 'react-router-dom';
import styles from './Menu.module.css';

const Navbar = () => {
  return (
    <div className={styles.sideMenu}>
      <nav className="navbar  navbar-light  ">
        <div className="container-fluid">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink exact activeClassName={styles.myActive} className="nav-link" aria-current="page" to="/">Login</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact activeClassName={styles.myActive} className="nav-link" to="/products">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink exact activeClassName={styles.myActive} className="nav-link" to="/products/create">Create</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>

  )
}

export default Navbar
