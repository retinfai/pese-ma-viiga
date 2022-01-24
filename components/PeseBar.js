import styles from "../styles/NavBar.module.css"
import Link from "next/link"

export default function PeseBar({ peseNum, firstLine, pese, fullScreen }) {

    return (

        <ul className={styles.container}>
            <li>
                <Link href={"/"}>
                    <h1 className={styles.title}>
                        Pese ma Viiga
                    </h1>
                </Link>

            </li>

            <li>
                <h1 >
                    Pese {peseNum}: {firstLine}
                </h1>
            </li>

            <li className={styles.linksContainer}>

                <a className={styles.links} onClick={copyToClipboard}>Copy to Clipboard</a>

                <a className={styles.links} onClick={fullScreen.enter}>Present</a>

            </li>
        </ul>

    )
    
    function copyToClipboard() {
        const formattedPese2 = pese.replaceAll("*", "\n").replaceAll("&","\n\n");
        navigator.clipboard.writeText(formattedPese2)
    }



}