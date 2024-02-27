import React from 'react';
import { useRouter } from 'next/router';
import { Avatar, Title, Group, Flex, Text} from '@mantine/core';
import classes from './Footer.module.css';
import Link from 'next/link'

export default function Footer() {
  const router = useRouter();

  return (
    <footer className={classes.footer}>
      <Flex
        justify="center"
        align="center"
        direction="column"
        wrap="wrap"
        style={{ paddingBottom: '72px', gap: '32px' }}
      >
        <Link href="/" style={{ textDecoration: "none" }}>
          <Group>
            <Avatar src="/logo/MoodBrewLogo.svg" size="lg" />
            <Title order={4} style={{ fontWeight: 800, color: 'var(--taupe)' }}>
              Mood Brew
            </Title>
          </Group>
        </Link>
        <Group
          style={{ minHeight: '50px', gap: 'md', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          <Link className={classes.activeLink} href="https://github.com/NeemaToto/MoodBrew.git" style={{textDecoration: 'none'}} >
            Github Repo
          </Link>
        </Group>
      </Flex>
      <Text className={`${classes.border} ${classes.footerText}`}>© Neema Totonchi</Text>
    </footer>
  );
}
