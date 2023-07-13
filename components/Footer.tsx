import { createStyles, Container, Group, ActionIcon, rem } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '@/public/Logo.svg'

const useStyles = createStyles((theme) => ({
    footer: {
        backgroundColor: '#B29B86',
        marginTop: rem(120),
        borderTop: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]}`,
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,

        [theme.fn.smallerThan('xs')]: {
            flexDirection: 'column',
        },
    },

    links: {
        [theme.fn.smallerThan('xs')]: {
            marginTop: theme.spacing.md,
        },
    },

    actionIcon: {
        '&:hover': {
            backgroundColor: theme.fn.lighten(
                '#B29B86',
                0.1
            ),
        }
    }
}))

interface FooterProps {
    socials: {
        name: string,
        link: string,
        icon: JSX.Element,
    }[]
}

export default function FooterSocial({socials}: FooterProps) {
    const { classes } = useStyles()

    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
                <Image src={Logo} alt={`Alsarmad Logo`} width={60} height={60} style={{pointerEvents: 'none', userSelect: 'none'}} />
                <Group spacing={0} className={classes.links} position='right' noWrap>
                    {socials.map((social) => (
                        <ActionIcon size='lg' className={classes.actionIcon} key={social.name}>
                            <Link
                                href={social.link}
                                aria-label={social.name}
                            >
                                {social.icon}
                            </Link>
                        </ActionIcon>
                    ))}
                </Group>
            </Container>
        </div>
    )
}