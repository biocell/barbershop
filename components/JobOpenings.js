import Image from "next/image";
import styles from "../styles/JobOpenings.module.css"


const JobOpenings = () => {
    return (
        <div className={styles.container}>
            <div className={styles.openings}>
            <Image src="/images/jobOpenings.png" alt="" width="770" height="136" />
            </div>

            <div className={styles.apply}>
                <p className={styles.apply1}>BARBER</p>
                <p className={styles.apply2}>COLORIST</p>
                <p className={styles.apply3}>SALOON<br/>MANAGER</p>
               
            </div>
            <div className={styles.applyBtn}>
            <button>APPLY HERE</button>
            <button>APPLY HERE</button>
            <button>APPLY HERE</button>
            </div>
        </div>
    )
}

export default JobOpenings;