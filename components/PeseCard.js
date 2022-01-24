import styles from "../styles/PeseCard.module.css"
import Link from "next/link"

export default function PeseCard({ peseNum, pese }) {

    return (
        <Link href={"/efks/pese-" + peseNum}>
            <div className={styles.peseCard}>
                <h3>Pese {peseNum}</h3>
                <hr></hr>
                <p className={styles.pesePreview}>{pese}</p>
            </div>
        </Link>

    )
}