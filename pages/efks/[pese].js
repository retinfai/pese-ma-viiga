import { useRouter } from 'next/router'
import PeseBar from '../../components/PeseBar'
import fs from 'fs'
import styles from '../../styles/PesePage.module.css'
import Link from 'next/link'
import { FullScreen, useFullScreenHandle } from "react-full-screen";

export default function PesePage(props) {

    const peseNum = props.data.number
    const pese = props.data.pese
    const firstLine = pese.substring(0, pese.indexOf("*"))

    const unformattedPese = pese.split("&")
    const handle = useFullScreenHandle();

    return (

        <div>
            <PeseBar
                peseNum={peseNum}
                firstLine={firstLine}
                pese={pese}
                fullScreen={handle}
            />

            <FullScreen handle={handle}>

                <div className={styles.peseDisplay}>
                    {
                        unformattedPese.map((verse, key) => {

                            const lines = verse.split("*")

                            return (
                                <div key={key}>

                                    {lines.map((line, index) => <p key={index}>{line}</p>)}
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