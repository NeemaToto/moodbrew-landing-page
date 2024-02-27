import {
    Group,
    Button,
    Divider,
    Box,
    Burger,
    Drawer,
    ScrollArea,
    rem,
    Avatar,
    Title,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Header() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const router = useRouter();

    const isActive = (path: string) => router.pathname === path;

    return (
        <Box pb={35} pt={35}>
            <header className={classes.header}>
                <Group justify="space-between" h="100%">
                    <Link href="/" style={{ textDecoration: 'none' }}>
                        <Group>
                            <Avatar src='/logo/MoodBrewLogo.svg' size='lg' />
                            <Title order={4} fw={800} c='taupe'>Mood Brew</Title>
                        </Group>
                    </Link>
                    
                    <Button visibleFrom='sm' component={Link} href='https://mood-brew.vercel.app/signup' color='sage'>Signup MoodBrew Today!</Button>
                    <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
                </Group>
            </header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title="MoodBrew"
                hiddenFrom="sm"
                zIndex={1000000}
            >
                <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
                    <Divider my="sm" />
                    

                    <Group justify="center" grow pb="xl" px="md">
                        <Button component={Link} href='https://mood-brew.vercel.app/signup' color='sage'>Signup for MoodBrew Today!</Button>
                    </Group>
                </ScrollArea>
            </Drawer>
        </Box>
    );
}
