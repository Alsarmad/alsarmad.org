import { useMantineColorScheme, ActionIcon, Group } from '@mantine/core'
import { IconSun, IconMoonStars } from '@tabler/icons-react'

export default function ThemeChangerButton() {
    const { colorScheme, toggleColorScheme } = useMantineColorScheme()

    return (
        <Group position='center' my='xl'>
            <ActionIcon
                aria-label={'Theme Changer'}
                role={'button'}
                onClick={() => toggleColorScheme()}
                size='lg'
                sx={(theme) => ({
                    color: theme.white,
                    '&:hover': {
                        backgroundColor: theme.fn.darken('#B29B86',0.2),
                    }
                })}
            >
                {colorScheme === 'dark' ? <IconSun size='1.2rem' /> : <IconMoonStars size='1.2rem' />}
            </ActionIcon>
        </Group>
    )
}