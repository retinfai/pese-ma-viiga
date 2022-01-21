import styles from "../styles/NavBar.module.css"
import Link from "next/link"

export default function NavBar() {

    return (

        <ul className={styles.container}>
            <li>
                <h1 className={styles.title}>
                    Pese ma Viiga
                </h1>
            </li>

            <li>
                <input className={styles.searchBar} type="text" placeholder="Search for a Pese" />
            </li>

            <li className={styles.linksContainer}>
                <Link href={"/about"}>
                    <a className={styles.links}>About</a>
                </Link>

                <Link href={"/new-service"}>
                    <a className={styles.links}>New Service</a>
                </Link>

                <Link href={"/login"}>
                    <a className={styles.links}>Login</a>
                </Link>
            </li>

            {/* <li className={styles.links}>
                
            </li>

            <li className={styles.links}>
                
            </li> */}
        </ul>

    )


}