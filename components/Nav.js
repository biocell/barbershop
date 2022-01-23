import Link from 'next/link'
import navStyles from '../styles/Nav.module.css'
 
const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li><Link href="/">HOME</Link></li>
                <li><Link href="/">CONTACT US</Link></li>
                <li><Link href="/about">ABOUT US</Link></li>
                <li><Link href="/">FIERCE CUTS</Link></li>
                <li><Link href="/">OUR SERVICES</Link></li>
                <li><Link href="/">PRICING</Link></li>
                <li><Link href="/">GALLERY</Link></li>
            </ul>
                   
        </nav>
    )
}

export default Nav