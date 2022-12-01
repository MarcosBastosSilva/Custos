import styles from './NavBar.module.css'
import Container from './Container'
import {Link} from 'react-router-dom'
import logo from '../../img/costs_logo.png'

function NavBar(){
    return (
        <nav className={styles.navbar}>
          <Container>
            <Link to='/'>
                <img src={logo} alt="Costs"/>
            </Link>
            <ul className={styles.list}>
                <li className={styles.item}>
                  <Link to='/'>Home</Link>
                </li>
                <li className={styles.item}>
                  <Link to='/Projeto'>Projetos</Link>
                </li>
                <li className={styles.item}>
                  <Link to='/Companhia'>Companhia</Link>
                </li>
                <li className={styles.item}>
                  <Link to='/Contato'>Contato</Link>
                </li>
            </ul>
          </Container>

      </nav>
    )
}

export default NavBar