import { createStyles, Header, Container, Group, Burger, Paper, Transition, rem } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '@/public/Logo.svg'
import ThemeChangerButton from './ThemeChangerButton'

const HEADER_HEIGHT = rem(60)

const useStyles = createStyles((theme) => ({
    root: {
        backgroundColor: '#B29B86',
        position: 'relative',
        zIndex: 2,
        color: theme.white,
    },

    dropdown: {
        backgroundColor: '#B29B86',
        position: 'absolute',
        top: HEADER_HEIGHT,
        left: 0,
        right: 0,
        zIndex: 0,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopWidth: 0,
        overflow: 'hidden',

        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '100%',
    },

    links: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    mobile: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },

    link: {
        display: 'flex',
        lineHeight: 1,
        padding: `${rem(8)} ${rem(12)}`,
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.white,
        fontSize: theme.fontSizes.sm,
        fontWeight: 500,
        alignItems: 'center',

        '&:hover': {
            backgroundColor: theme.fn.darken('#B29B86', 0.2),
        },

        [theme.fn.smallerThan('sm')]: {
            borderRadius: 0,
            padding: theme.spacing.md,
        },
    },
}))

interface HeaderResponsiveProps {
    links: {
        link: string,
        label: string,
        icon: JSX.Element
    }[]
}

export default function HeaderResponsive({ links }: HeaderResponsiveProps) {
    const [opened, { toggle, close }] = useDisclosure(false)
    const { classes } = useStyles()

    const items = links.map((link) => (
        <Link
            key={link.label}
            href={link.link}
            className={classes.link}
            onClick={() => {
                close()
            }}
        >
            {link.icon}{link.label}
        </Link>
    ))

    return (
        <Header height={HEADER_HEIGHT} className={classes.root}>
            <Container className={classes.header}>
                <Image src={Logo} alt={`Alsarmad Logo`} width={70} height={70} style={{pointerEvents: 'none', userSelect: 'none'}} />
                <Group spacing={5} className={classes.links}>
                    {items}
                    {/* <ThemeChangerButton /> */}
                    <ThemeChangerButton />
                </Group>

                <Group className={classes.mobile}>
                    <Burger opened={opened} onClick={toggle} color={'white'} size='sm' aria-label={'Show links'} role={'button'} />
                    <ThemeChangerButton />
                </Group>

                <Transition transition='pop-top-right' duration={200} mounted={opened}>
                    {(styles) => (
                        <Paper className={classes.dropdown} withBorder style={styles}>
                            {items}
                        </Paper>
                    )}
                </Transition>
            </Container>
        </Header>
    )
}