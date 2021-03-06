import Head from 'next/head'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import PeseCard from '../components/PeseCard'
import { useState, useEffect } from 'react'
import fs from 'fs'

export default function Home({ peses }) {


  const [query, setQuery] = useState("")
  const [results, setResults] = useState(peses)

  useEffect(() => { // Executed on mount (once)
    const defaultQuery = sessionStorage.getItem("query") ? sessionStorage.getItem("query") : ""
    setQuery(defaultQuery)
  }, [])

  useEffect(() => {
    sessionStorage.setItem("query", query)
    // if (parseInt(query)){

    // }
    const searchResults = peses.filter(peseObj => peseObj.pese.toLowerCase().includes(query.trim().toLowerCase()) || peseObj.number.includes(query.trim()))
    setResults(searchResults)
  }, [query, peses])

  return (
    <div className={styles.container}>
      <Head>
        <title>Pese ma Viiga | Samoan Hymns </title>
        <meta name="description" content="Pese ma Viiga brings Samoan Hymns to your finger tips. No more spending hours typing out every hymn on Powerpoint; simply search and present" />
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"></link>
      </Head>

      <NavBar
        setQuery={setQuery}
        query={query}
      />
      
        <div className={styles.peseCardArea}>
          {
            results.map(pese => {

              const formattedPese = pese.pese.replace(/\*/g, ', ').replace(/\&/g, ' ')
              return (
                <PeseCard
                  key={"pese-" + pese.number}
                  peseNum={pese.number}
                  pese={formattedPese}
                />
              )
            })
          }

        </div>




      <footer className={styles.footer}>
      </footer>
    </div>
  )

}

export async function getStaticProps() {

  const data = fs.readFileSync("./pesesFS/peses/allPeses",
    { encoding: 'utf8', flag: 'r' })

  const pesesString = data.split("\n");


  const peses = pesesString.map(rawPese => {
    return JSON.parse(rawPese)
  })
  // Returns array of Javascript Objects ??? Each object is a pese
  // 
  // {
  //   number: X,
  //   pese: "words"
  // }

  return {
    props: { peses } // will be passed to the page component as props
  }
}