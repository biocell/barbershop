
import Image from 'next/image';
import styles from '../styles/Navbar.module.css'
 
const Navbar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.step1}>
                <div className={styles.contact}>
                <div className={styles.callBtn}>
                    <Image src="/images/call.png" alt="" width="30" height="30" /> 
                    <div className={styles.text}>(234)345-4569</div>
                </div>
                
                <div className={styles.mailBtn}></div>
                    <Image src="/images/email.png" alt="" width="30" height="30" /> 
                     <div className={styles.text}>info@barbershop.com</div>
                

                    <div className={styles.smIcons}>
                    <button className={styles.smIcon}><Image src="/images/facebook.png" alt="" width="30" height="30" /></button>
                    <button className={styles.smIcon}><Image src="/images/twitter.png" alt="" width="30" height="30"/></button>
                    <button className={styles.smIcon}><Image src="/images/instagram.png" alt="" width="30" height="30"/></button>
            
                </div>
                </div>
                <div className="appointment">
                <Image src="/images/appointment.png" alt="" width="276" height="60"/>
            
                </div>
            </div>       
            <div className={styles.step2}>
                <ul className={styles.list}>
                    <li className={styles.listItem}>HOME</li>
                    <li className={styles.listItem}>CONTACT US</li>
                    <li className={styles.listItem}>ABOUT US</li>
                    <li className={styles.listItem}><Image src="/images/logo.png" alt="" width="140" height="55"/></li>
                    <li className={styles.listItem}>OUR SERVICES</li>
                    <li className={styles.listItem}>PRICING</li>
                    <li className={styles.listItem}>GALLERY</li>
                
                </ul>
            </div>
        </div>
    )
}

export default Navbar