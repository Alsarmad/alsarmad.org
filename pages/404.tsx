import type {NextPage} from 'next'
import { Center, Text } from '@mantine/core'
import Image from 'next/image'
import PageNotFoundImage from '@/public/404.svg'
import Link from 'next/link'
import Head from 'next/head'

const PageNotFound: NextPage = () => {
    return (
        <>
            <Head>
                <title>Page Not Found | هذه الصفحة غير موجودة</title>
                {/* Primary Meta Tags */}
                <meta name="title" content="Page Not Found | هذه الصفحة غير موجودة" />
                <meta name="description" content="هذه الصفحة غير موجودة" />
                <meta name="keywords" content="السرمد, التقوى, الموجز, مفتوح المصدر, منظمة السرمد, Alsarmad" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://alsarmad.org/" />
                <meta property="og:site_name" content="Alsarmad" />
                <meta property="og:title" content="Page Not Found | هذه الصفحة غير موجودة" />
                <meta property="og:description" content="هذه الصفحة غير موجودة" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://alsarmad.org/" />
                <meta property="twitter:title" content="Page Not Found | هذه الصفحة غير موجودة" />
                <meta property="twitter:description" content="هذه الصفحة غير موجودة" />
            </Head>

            <Center>
                <Image src={PageNotFoundImage} alt={'Page Not Found'} width={404} height={404} loading={'eager'} style={{minHeight: '400px'}} />
            </Center>
            <Text align={'center'} size={'xl'}>
                يبدو أنك قد ضللت طريقك لأن هذه الصفحة غير موجودة عد إلى
                <Link href={'/'} style={{textDecoration: 'none', backgroundImage: 'linear-gradient(45deg, #8D7A57, #B29B86)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}> الصفحة الرئيسية</Link>
            </Text>
        </>
    )
}

export default PageNotFound