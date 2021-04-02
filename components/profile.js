import useSWR from 'swr'
import utilStyles from '../styles/utils.module.css'

export function Profile() {

    const fetcher = (...args) => fetch(...args).then(res => res.json())
    const url = 'http://localhost:8080/webservice/REST/HealthFlow/HealthFlow/FlowConfig'
    const {data, error} = useSWR(url, fetcher)

    if (error) return <div>Failed to load Profile</div>
    if (!data) return <div className={utilStyles.wait}>Loading...</div>
    return (
        <div>
            {data[0].value}!
        </div>
    )
}