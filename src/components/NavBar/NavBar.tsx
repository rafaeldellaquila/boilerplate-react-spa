import  { NavLink } from 'react-router-dom';
import styles from './NavBar.module.css'

function Navbar() {
    return (
        <div className={styles.navbar}>
            <h1 className='text-gradient_purple'>Navbar</h1>
            <ul>
                <li><NavLink to="/">S</NavLink></li>
                <li><NavLink to="/about">P</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;
