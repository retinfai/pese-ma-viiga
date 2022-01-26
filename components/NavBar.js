import styles from "../styles/NavBar.module.css"
import Link from "next/link"

export default function NavBar({ setQuery, query }) {

    function handleInputChange(event) {
        const query = event.currentTarget.value
        setQuery(query)
    }

    function handleTitleClick(){
        setQuery("")
    }

    return (

        <ul className={styles.container}>
            <li className={styles.titleContainer}>
                <h1 className={styles.title} onClick={handleTitleClick}>
                    Pese ma Viiga
                </h1>
            </li>

            <li>
                <input
                    id={styles.searchBar}
                    type="text"
                    placeholder="Search for a Pese"
                    onChange={handleInputChange}
                    autoComplete="off" 
                    value={query}
                    spellCheck="false"
                    />
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
        </ul>

    )


}