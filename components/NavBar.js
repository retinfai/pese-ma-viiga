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

    }

    function handleSearchIcon() {
        if (window.innerWidth <= 1052) {
            const searchBar = document.getElementById(styles.searchBar)
            searchBar.style.display = 'inline'
            searchBar.focus()
        }
    }

    // useEffect(() => {
    //     const searchBar = document.getElementById(styles.searchBar)
    //     searchBar.addEventListener('focus', () => {
    //         if (window.innerWidth <= 1052){
    //             console.log(document.getElementsByClassName(styles.mobileElmt))
    //             const mobileElmts = document.getElementsByClassName(styles.mobileElmt)

    //             for(let elmt of mobileElmts ){
    //                 elmt.style.display ='none'
    //             }
    //         }
    //     })
    // },[])

    return (

        <ul className={styles.container}>
            <li className={styles.hamburgerMenuContainer}>
                <img onClick={handleHamburgerMenu} className={styles.hamburgerMenu + " " + styles.mobileElmt} src="https://img.icons8.com/external-gradak-royyan-wijaya/48/000000/external-article-basic-interface-iii-gradak-royyan-wijaya-2.png" />
            </li>


            <li className={styles.titleContainer}>
                <h1 className={styles.mobileElmt} id={styles.title}  onClick={handleTitleClick}>
                    Pese ma Viiga
                </h1>
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