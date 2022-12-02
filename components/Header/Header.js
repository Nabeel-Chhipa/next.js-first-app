import Link from 'next/link'
import styles from './Header.module.css'

const Header = () => {
    return (
        <nav className={styles.mainNav}>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/about'>About</Link>
          </li>
          <li>
            <Link href='/blog'>Blog</Link>
          </li>
          <li>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
      </nav>
    )
}

export default Header