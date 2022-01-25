import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import NavBar from '../components/NavBar'
import PeseCard from '../components/PeseCard'
import { useEffect } from 'react'
import { useState } from 'react'
import fs from 'fs'
import { setCookies, getCookie } from 'cookies-next'

export default function Home({ peses }) {

  const defaultQuery = getCookie("query") ? getCookie("query") : ""
  const [query, setQuery] = useState(defaultQuery)
  const [results, setResults] = useState(peses)


  useEffect(() => {
      setCookies("query", query)
      const searchResults = peses.filter(peseObj => peseObj.pese.toLowerCase().includes(query.trim().toLowerCase()))
      setResults(searchResults)
  },[query, peses])

  return (
    <div className={styles.container}>
      <Head>
        <title>Pese ma Viiga</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap" rel="stylesheet"></link>
      </Head>

      <NavBar
        setQuery={setQuery}
        query={query}
        // initialQuery={defaultQuery}
      />

      <div className={styles.peseCardArea}>
        {
          results.map(pese => {

            const formattedPese = pese.pese.replaceAll("*", ", ").replaceAll("&", " ")
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

export async function getStaticProps(context) {
  const data = fs.readFileSync("./pesesFS/peses/allPeses",
    { encoding: 'utf8', flag: 'r' })

  const pesesString = data.split("\n");


  const peses = pesesString.map(rawPese => {
    return JSON.parse(rawPese)
  })
  // Returns array of Javascript Objects – Each object is a pese
  // 
  // {
  //   number: X,
  //   pese: "words"
  // }

  return {
    props: { peses }, // will be passed to the page component as props
  }
}