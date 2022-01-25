import { useState, useEffect } from 'react'
import { useFullScreenHandle } from 'react-full-screen'

export default function useSessionStorage(item) {
    const [value, setValue] = useState('')

    useEffect(() => {
        setValue(sessionStorage.getItem(item))
    }, [])

    return value
}