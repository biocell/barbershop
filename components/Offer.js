import Image from "next/image";
import styles from "../styles/Offer.module.css";
const Offer = () => {
    return (
        <div className={styles.Offer}><Image src="/images/offer.png" alt="" width="1440" height="698"/></div>
    )
}

export default Offer;