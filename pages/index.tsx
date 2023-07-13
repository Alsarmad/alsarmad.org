import type { NextPage } from 'next'
import HeroHeader from '@/components/HeroHeader'
import { IconBrandOpenSource, IconEye, IconHeartHandshake, IconLanguage } from '@tabler/icons-react'
import { Image, rem } from '@mantine/core'
import Head from 'next/head'
import ar from '@/public/ar.svg'

const Home: NextPage = () => {
    type feature = {
        title: string,
        icon: JSX.Element,
    }
    
    const features: feature[] = [
        {
            title: 'الوضوح والشفافية العاليتان',
            icon: <IconEye size={rem(50)} stroke={2} color={'#B29B86'} />,
        },
        {
            title: 'تراخيص مفتوحة المصدر',
            icon: <IconBrandOpenSource size={rem(50)} stroke={2} color={'#B29B86'} />,
        },
        {
            title: 'اللغة العربية أولًا',
            icon: <Image src={ar.src} alt={'Arabic icon'} width={rem(50)} height={rem(50)} style={{pointerEvents: 'none', userSelect: 'none'}} />,
        },
        {
            title: 'نرحب بالمساهمة',
            icon: <IconHeartHandshake size={rem(50)} stroke={2} color={'#B29B86'} />,
        },
    ]

    return (
        <>
            <Head>
                <title>Alsarmad | منظمة السرمد</title>
                {/* Primary Meta Tags */}
                <meta name="title" content="Alsarmad | منظمة السرمد" />
                <meta name="description" content="الموقع الرسمي لمنظمة السرمد" />
                <meta name="keywords" content="السرمد, التقوى, الموجز, مفتوح المصدر, منظمة السرمد, Alsarmad" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://alsarmad.org/" />
                <meta property="og:site_name" content="Alsarmad" />
                <meta property="og:title" content="Alsarmad | منظمة السرمد" />
                <meta property="og:description" content="الموقع الرسمي لمنظمة السرمد" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://alsarmad.org/" />
                <meta property="twitter:title" content="Alsarmad | منظمة السرمد" />
                <meta property="twitter:description" content="الموقع الرسمي لمنظمة السرمد" />
            </Head>

            <HeroHeader features={features} />
        </>
    )
}

export default Home