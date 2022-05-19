import { useRouter } from 'next/router'
import PeseBar from '../../components/PeseBar'
import styles from '../../styles/PesePage.module.css'
import fs from 'fs'
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
    const avgLine = Math.ceil(numChars / numLines)
    const numLinesInVerse = Math.ceil(numLines / numVerses)

    console.log("Number of Verses: " + numVerses)
    console.log("Number of lines per Verse: " + numLinesInVerse)
    console.log("Average Chars in Line: " + avgLine)


    const handle = useFullScreenHandle();

    useEffect(() => {

        document.addEventListener("webkitfullscreenchange", (event) => {
            const peseDisplay = document.getElementById(styles.peseDisplay)
            const lines = document.getElementsByClassName(styles.verseLines)

            if (numLinesInVerse <= 4 && numVerses <= 6 && avgLine <= 26) {
                peseDisplay.style.fontSize = "5vh"
                for (let a = 0; a < lines.length; a++) {
                    lines[a].style.margin = "0.5em"
                }
            } else if (numLinesInVerse <= 4 && numVerses > 5 || numLinesInVerse <= 4 && numVerses <= 5 && avgLine > 23) {
                peseDisplay.style.fontSize = "4vh"
                for (let a = 0; a < lines.length; a++) {
                    lines[a].style.margin = "0.5em"
                }
            } else if (numLinesInVerse <= 7) {
                peseDisplay.style.fontSize = "4.5vh"
                for (let a = 0; a < lines.length; a++) {
                    lines[a].style.margin = "0.15em"
                }
            } else {
                peseDisplay.style.fontSize = "3.5vh"
                for (let a = 0; a < lines.length; a++) {
                    lines[a].style.margin = "0.2em"
                }
            }



            if (document.fullscreenElement || document.webkitCurrentFullScreenElement) {
                peseDisplay.style.display = "grid"
                peseDisplay.style.gridTemplateColumns = "repeat(" + Math.ceil(numVerses / 2).toString() + ",1fr"
                peseDisplay.style.height = "100vh"
                peseDisplay.style.width = "100vw"
                peseDisplay.style.paddingTop = "0"
            } else {
                peseDisplay.style.display = null;
                peseDisplay.style.gridTemplateColumns = null
                peseDisplay.style.height = null
                peseDisplay.style.width = null
                peseDisplay.style.fontSize = null
                const lines = document.getElementsByClassName(styles.verseLines)
                for (let a = 0; a < lines.length; a++) {
                    lines[a].style.margin = null
                }


            }

        })

        document.addEventListener("fullscreenchange", (event) => {
            const peseDisplay = document.getElementById(styles.peseDisplay)
            const lines = document.getElementsByClassName(styles.verseLines)

            if (numLinesInVerse <= 4 && numVerses <= 6 && avgLine <= 26) {
                peseDisplay.style.fontSize = "5vh"
                for (let a = 0; a < lines.length; a++) {
                    lines[a].style.margin = "0.5em"
                }
            } else if (numLinesInVerse <= 4 && numVerses > 5 || numLinesInVerse <= 4 && numVerses <= 5 && avgLine > 23) {
                peseDisplay.style.fontSize = "4vh"
                for (let a = 0; a < lines.length; a++) {
                    lines[a].style.margin = "0.5em"
                }
            } else if (numLinesInVerse <= 7) {
                peseDisplay.style.fontSize = "4.5vh"
                for (let a = 0; a < lines.length; a++) {
                    lines[a].style.margin = "0.15em"
                }
            } else {
                peseDisplay.style.fontSize = "3.5vh"
                for (let a = 0; a < lines.length; a++) {
                    lines[a].style.margin = "0.2em"
                }
            }



            if (document.fullscreenElement || document.webkitCurrentFullScreenElement) {
                peseDisplay.style.display = "grid"
                peseDisplay.style.gridTemplateColumns = "repeat(" + Math.ceil(numVerses / 2).toString() + ",1fr"
                peseDisplay.style.height = "100vh"
                peseDisplay.style.width = "100vw"
                peseDisplay.style.paddingTop = "0"
            } else {
                peseDisplay.style.display = null;
                peseDisplay.style.gridTemplateColumns = null
                peseDisplay.style.height = null
                peseDisplay.style.width = null
                peseDisplay.style.fontSize = null
                const lines = document.getElementsByClassName(styles.verseLines)
                for (let a = 0; a < lines.length; a++) {
                    lines[a].style.margin = null
                }


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
    const path = require('path')

    const configDirectory = path.resolve(process.cwd(), "pesesFS/peses");
    // const file = readFileSync(
    //     path.join(configDirectory, "pese-" + peseNum + ".json"),
    //     { encoding: 'utf8', flag: 'r' }
    // );

    const peseNum = context.query.pese.substring(5)
    const rawData = fs.readFileSync(
        path.join(configDirectory, "pese-" + peseNum + ".json"),
        { encoding: 'utf8', flag: 'r' }
    );
    const data = JSON.parse(rawData)

    return {
        props: { data } // will be passed to the page component as props
    }
}