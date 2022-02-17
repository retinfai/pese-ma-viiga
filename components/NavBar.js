import styles from "../styles/NavBar.module.css"
import Link from "next/link"
import { useEffect } from "react"

export default function NavBar({ setQuery, query }) {

    function handleInputChange(event) {
        const query = event.currentTarget.value
        setQuery(query)
    }

    function handleTitleClick() {
        setQuery("")
    }

    function handleHamburgerMenu() {
        const dropDown = document.getElementById(styles.dropDown)
        
        if (dropDown.style.display == "none") {
            dropDown.style.display = "block"
        } else {
            dropDown.style.display = "none"
        }
    }

    function handleSearchIcon() {
        if (window.innerWidth <= 1052) {
            const searchBar = document.getElementById(styles.searchBar)
            searchBar.style.display = 'inline'
            searchBar.focus()
        }
    }

    return (
        <div>
            <ul className={styles.container}>
                <li className={styles.hamburgerMenuContainer}>
                    <img onClick={handleHamburgerMenu} className={styles.hamburgerMenu + " " + styles.mobileElmt} src="https://img.icons8.com/external-gradak-royyan-wijaya/48/000000/external-article-basic-interface-iii-gradak-royyan-wijaya-2.png" />
                </li>


                <li className={styles.titleContainer}>
                    <h1 className={styles.mobileElmt} id={styles.title} onClick={handleTitleClick}>
                        Pese ma Viiga
                    </h1>
                    {/* <img src="logo.png" className={styles.mobileElmt} id={styles.title} onClick={handleTitleClick}/> */}
                </li>

                <li className={styles.searchIconContainer}>
                    <img onClick={handleSearchIcon} className={styles.searchIcon + " " + styles.mobileElmt} src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/64/000000/external-magnifying-glass-interface-kiranshastry-lineal-kiranshastry.png" />
                </li>

                <li className={styles.searchBarContainer}>
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
                    {/* <Link href={"/about"}>
                        <a className={styles.links}>About</a>
                    </Link> */}

                    {/* <Link href={"/new-service"}>
                        <a className={styles.links}>New Service</a>
                    </Link>

                    <Link href={"/login"}>
                        <a className={styles.links}>Login</a>
                    </Link> */}
                </li>


            </ul>

            <ul id={styles.dropDown} style={{display: "none"}}>
                <Link href="/about">

                    <li className={styles.dropDownItems}>
                        <h3>About</h3>


                    </li>
                </Link>

            </ul>

        </div>

    )


}