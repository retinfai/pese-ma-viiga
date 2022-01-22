import { useRouter } from 'next/router'

export default function PesePage(){

    const router = useRouter()
    return (
        <h1>Pese {router.asPath.substring(6)}</h1>
    )
}