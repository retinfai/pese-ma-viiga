import styles from "../styles/NavBar.module.css"
import Link from "next/link"

export default function PeseBar({ peseNum, firstLine, pese, fullScreen }) {


    return (

        <ul className={styles.container}>
            <li className={styles.backArrowContainer}>
                <Link href={"/"}>
                    <img className={styles.backArrow} src="https://img.icons8.com/external-kmg-design-basic-outline-kmg-design/32/000000/external-left-arrows-kmg-design-basic-outline-kmg-design-1.png" />
                </Link>

            </li>

            <li className={styles.titleContainer}>
                <Link href={"/"}>
                    <h1 className={styles.title}>
                        Pese ma Viiga
                    </h1>
                </Link>
                <p className={styles.smallPeseTitle}>Pese {peseNum}: {firstLine}</p>


            </li>
            <li>
                <h1 className={styles.peseTitle}>
                    Pese {peseNum}: {firstLine}
                </h1>
            </li>

            <li>
            </li>

            <li className={styles.linksContainer}>
                <div id={styles.copyBtnContainer}>
                    <a id={styles.copyBtn} className={styles.links} onClick={copyToClipboard}>Copy to Clipboard</a>

                </div>

                <a className={styles.links} onClick={fullScreen.enter}>Present</a>

            </li>
        </ul>

    )

    function copyToClipboard(event) {
        const formattedPese = pese.replaceAll("*", "\n").replaceAll("&", "\n\n");
        navigator.clipboard.writeText(formattedPese)

        event.target.innerHTML = "Copied!"
        event.target.style.color = "#acb1bd"

    }



}