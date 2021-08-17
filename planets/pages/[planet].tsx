import React from 'react'
import { useRouter } from 'next/dist/client/router'
import data from "../components/data.json"
import { MainPage } from '../components/MainPage'
import { GetStaticProps } from 'next'


export default function planet() {
    const router = useRouter()
    const filter = router.query.planet
    return (
        <div>
            {data
            .filter(data => data.name === filter)
            .map(data => <MainPage data={data} key={data.name}/>)
            }
        </div>
    )
}

// export async function getServerSidePros (context) {
//     return {
//         props : {}
//     }
// }