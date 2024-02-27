import { Flex, Stack, Title, Text, Button, Card } from "@mantine/core";
import Spline from '@splinetool/react-spline';
import styles from './PlanCard.module.css'

export default function PlanCard({
    scene,
    text,
    title,
    buttonPrice
}: CardProps) {
    return (
        <Card shadow="sm" withBorder radius='md' c='taupe' className={styles.card_container}>
            <Flex direction='column' justify='space-between' align='center' >
                <Spline style={{ width: '10rem', height: '13.85rem' }} scene={scene} />
                <Stack>
                    <Title order={3}>{title}</Title>
                    <Text>{text}</Text>
                    <Button w='100%' h={60} size="md" fw={500}>Buy for ${buttonPrice}!</Button>
                </Stack>
            </Flex>
        </Card>
    )
}