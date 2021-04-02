import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'

export default function Hello() {

    return (
        <Layout>
            <Head>
                <title>Hello World</title>
            </Head>
            <h1>Hello World</h1>
        </Layout>
    ) 
}