import styles from "../styles/PeseCard.module.css"

export default function PeseCard({ peseNum, pese }) {

    return (
        <div className={styles.peseCard}>
            <h3>Pese {peseNum}</h3>
            <hr></hr>
            <p>{pese}</p>
        </div>
    )
}