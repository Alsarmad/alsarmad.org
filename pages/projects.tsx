import type { NextPage } from 'next'
import UnderConstruction from '@/public/UnderConstruction.svg'
import Image from 'next/image'
import { Center, Text } from '@mantine/core'
import Head from 'next/head'

const Projects: NextPage = () => {
    return (
        <>
            <Head>
                <title>Alsarmad Projects | مشاريع منظمة السرمد</title>
                {/* Primary Meta Tags */}
                <meta name="title" content="Alsarmad Projects | مشاريع منظمة السرمد" />
                <meta name="description" content="مشاريع منظمة السرمد" />
                <meta name="keywords" content="السرمد, التقوى, الموجز, مفتوح المصدر, منظمة السرمد, Alsarmad" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://alsarmad.org/" />
                <meta property="og:site_name" content="Alsarmad" />
                <meta property="og:title" content="Alsarmad Projects | مشاريع منظمة السرمد" />
                <meta property="og:description" content="مشاريع منظمة السرمد" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://alsarmad.org/" />
                <meta property="twitter:title" content="Alsarmad Projects | مشاريع منظمة السرمد" />
                <meta property="twitter:description" content="مشاريع منظمة السرمد" />
            </Head>

            <Center>
                <Image src={UnderConstruction} alt={'Under Construction'} width={400} height={400} loading={'eager'} style={{minHeight: '400px'}} />
            </Center>
            <Text align={'center'} size={'xl'}>هذه الصفحة تحت التطوير</Text>
        </>
    )
}

export default Projects