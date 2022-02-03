import { useRouter } from 'next/router'
import PeseBar from '../../components/PeseBar'
import fs from 'fs'
import styles from '../../styles/PesePage.module.css'
import Link from 'next/link'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { useEffect } from 'react'

export default function PesePage(props) {

    const peseNum = props.data.number
    const pese = props.data.pese
    const firstLine = pese.substring(0, pese.indexOf("*"))

    const verses = pese.split("&")
    const numVerses = verses.length
    var numLines = 0
    var numChars = 0
    verses.forEach(verse => {
        numLines += verse.split("*").length
        verse.split("*").forEach(line => numChars += line.length)
    })
    console.log(numLines)
    console.log(numChars)

    const handle = useFullScreenHandle();

    useEffect(() => {

        document.addEventListener("fullscreenchange", (event) => {
            const peseDisplay = document.getElementById(styles.peseDisplay)

            if (document.fullscreenElement || document.webkitCurrentFullScreenElement) {
                peseDisplay.style.display = "grid"
                peseDisplay.style.gridTemplateColumns = "repeat(" + Math.ceil(numVerses / 2).toString() + ",1fr"
                peseDisplay.style.height = "100vh"
                peseDisplay.style.width = "100vw"
            } else {
                peseDisplay.style.display = null;
                peseDisplay.style.gridTemplateColumns = null
                peseDisplay.style.height = null
                peseDisplay.style.width = null

                const lines = Array.prototype.slice.call(document.getElementsByClassName(styles.verseLines))

                lines.forEach(line => {
                    line.style.marginBottom = null
                })

            }

        })


    }, [])

    return (

        <div>
            <PeseBar
                peseNum={peseNum}
                firstLine={firstLine}
                pese={pese}
                fullScreen={handle}
            />

            <FullScreen handle={handle}>

                <div id={styles.peseDisplay}>
                    {
                        verses.map((verse, key) => {

                            const lines = verse.split("*")

                            return (
                                <div key={key}>
                                    <p id={styles.verseNum}>Verse {key + 1}</p>
                                    {lines.map((line, index) => <p key={index} className={styles.verseLines}>{line}</p>)}
                                    <br />

                                </div>

                            )

                        })
                    }
                </div>

            </FullScreen>


        </div>

    )
}

export async function getServerSideProps(context) {
    const peseNum = context.query.pese.substring(5)
    const rawData = fs.readFileSync("./pesesFS/peses/pese-" + peseNum + ".json",
        { encoding: 'utf8', flag: 'r' })
    const data = JSON.parse(rawData)

    return {
        props: { data } // will be passed to the page component as props
    }
}