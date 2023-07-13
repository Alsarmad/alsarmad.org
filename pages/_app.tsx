import { AppProps } from 'next/app'
import Head from 'next/head'
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core'
import {IconBrandDiscord, IconBrandGithub, IconBrandTelegram, IconHome, IconRocket, IconUsersGroup} from '@tabler/icons-react'
import { useLocalStorage } from '@mantine/hooks'
// Components
import HeaderResponsive from '@/components/Header'
import FooterSocial from '@/components/Footer'

export default function App(props: AppProps) {
    const { Component, pageProps } = props
    
    const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
        key: 'color-scheme',
        defaultValue: 'light',
    })
    
    const toggleColorScheme = () => setColorScheme((current) => (current === 'dark' ? 'light' : 'dark'))

    type link = {
        link: string,
        label: string,
        icon: JSX.Element
    }

    const links: link[] = [
        {
            link: '/',
            label: 'الرئيسية',
            icon: <IconHome />
        },
        {
            link: '/projects',
            label: 'المشاريع',
            icon: <IconRocket />
        },
        {
            link: '/team',
            label: 'الفريق',
            icon: <IconUsersGroup />
        },
    ]

    type social = {
        name: string,
        link: string,
        icon: JSX.Element,
    }

    const socials: social[] = [
        {
            name: 'Telegram',
            link: 'https://t.me/Alsarmad_org',
            icon: <IconBrandTelegram size='1.05rem' stroke={1.5} color={'white'} aria-label={'Telegram'} />,
        },
        {
            name: 'Discord',
            link: 'https://discord.com/invite/NeV3XEwXXw',
            icon: <IconBrandDiscord size='1.05rem' stroke={1.5} color={'white'} aria-label={'Discord'} />,
        },
        {
            name: 'Github',
            link: 'https://github.com/Alsarmad/',
            icon: <IconBrandGithub size='1.05rem' stroke={1.5} color={'white'} aria-label={'Github'} />,
        },
    ]

    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width' />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            </Head>

            <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                <MantineProvider theme={{colorScheme}} withGlobalStyles withNormalizeCSS>
                    <HeaderResponsive links={links} />
                    <main style={{minHeight: `100vh`}}>
                        <Component {...pageProps} />
                    </main>
                    <FooterSocial socials={socials} />
                </MantineProvider>
            </ColorSchemeProvider>
        </>
    )
}