import Image from "next/image";
import styles from "../styles/Employees.module.css";

const Employees = () => {
    return (
        <div className={styles.Background}>
            <Image src="/images/employees.png" alt="" width="1560" height="698"/>
        </div>
    )
}

export default Employees;