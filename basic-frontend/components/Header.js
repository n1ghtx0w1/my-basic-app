import Link from "next/link"
import styles from '../styles/Header.module.css'


export default function Header() {
  return (
    <header className={styles.header}>
        <div className={styles.logo}>

            <Link href='/'>
                <a>Basic App</a>
            </Link>
        </div>
        <nav>
            <ul>
                <li>
                    <Link href='/link_1'>
                        <a>Link 1</a>
                    </Link>
                </li>
                <li>
                    <Link href='/link_2'>
                        <a>Link 2</a>
                    </Link>
                </li>
                <li>
                    <Link href='/link_3'>
                        <a>Link 3</a>
                    </Link>
                </li>
                <li>
                    <Link href='/about'>
                        <a>About</a>
                    </Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}
