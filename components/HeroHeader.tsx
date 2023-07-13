import { createStyles, Group, Title, Text, Card, SimpleGrid, Container, rem, Highlight } from '@mantine/core'
import { IconInfinity } from '@tabler/icons-react'

const useStyles = createStyles((theme) => ({
    title: {
        fontSize: rem(34),
        fontWeight: 900,

        [theme.fn.smallerThan('sm')]: {
            fontSize: rem(24),
        },
    },

    description: {
        maxWidth: 600,
        margin: 'auto',

        '&::after': {
            content: '""',
            display: 'block',
            width: rem(45),
            height: rem(2),
            marginTop: theme.spacing.sm,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },

    card: {
        border: `${rem(1)} solid ${theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]}`,
    },

    cardTitle: {
        '&::after': {
            content: '""',
            display: 'block',
            width: rem(45),
            height: rem(2),
            marginTop: theme.spacing.sm,
        },
    },
}))

interface HeroHeaderProps {
    features: {
        title: string,
        icon: JSX.Element,
    }[]
}

export default function HeroHeader({ features }: HeroHeaderProps) {
    const { classes, theme } = useStyles()

    return (
        <Container size='lg' py='xl'>
            <Title
                order={2}
                className={classes.title}
                ta='center'
                mt='sm'
                variant="gradient"
                gradient={{ from: '#8D7A57', to: '#B29B86', deg: 45 }}
            >
                منظمة السرمد
            </Title>

            <Text className={classes.description} ta='center' mt='md'>
                منظمة عربية مهتمة بنشر برمجيات مفتوحة المصدر باللغة العربية
            </Text>
            <Text color='black' ta='center' mt='md'>
                <Highlight
                    highlight={'منظمة السرمد'}
                    highlightStyles={(theme) => ({
                        backgroundImage: theme.fn.linearGradient(45, '#8D7A57', '#B29B86'),
                        fontWeight: 700,
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    })}
                    sx={(theme) => ({
                        color: theme.colorScheme === 'dark' ? theme.white : theme.black
                    })}
                >
                    القواعد الأساسية لمنظمة السرمد
                </Highlight>
            </Text>

            <SimpleGrid cols={2} spacing='xl' mt={50} breakpoints={[{ maxWidth: 'md', cols: 2 }]}>
                {
                    features.map((feature) => (
                        <Card key={feature.title} shadow='md' radius='md' className={classes.card} padding='xl'>
                            <Group>
                                {feature.icon}
                                <Text fz='lg' fw={500} className={classes.cardTitle} mt='md' sx={(theme) => ({
                                    color: theme.colorScheme === 'dark' ? theme.white : theme.black
                                })}>
                                    {feature.title}
                                </Text>
                            </Group>
                        </Card>
                    ))
                }
            </SimpleGrid>

            <Card shadow='md' radius='md' className={classes.card} padding='xl' mt={25}>
                <Group>
                    <IconInfinity size={rem(50)} stroke={2} color={'#B29B86'} />
                    <Text fz='lg' fw={500} className={classes.cardTitle} mt='md'>
                        <Highlight
                            highlight={[
                                'سرمد',
                                '[سورة القصص/72]'
                            ]}
                            highlightStyles={(theme) => ({
                                backgroundImage: theme.fn.linearGradient(45, '#8D7A57', '#B29B86'),
                                fontWeight: 700,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            })}
                            sx={(theme) => ({
                                color: theme.colorScheme === 'dark' ? theme.white : theme.black
                            })}
                        >
                            &quot;سرمد&quot; هو الشيء الدائم الذي لا ينقطع وهي كلمة ذكرت في القرآن الكريم في [سورة القصص/72]
                        </Highlight>
                    </Text>
                </Group>
            </Card>
        </Container>
    )
}