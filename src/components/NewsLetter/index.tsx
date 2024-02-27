import { Text, Title, TextInput, Button, rem } from '@mantine/core';
import classes from './NewsLetter.module.css';
import Spline from '@splinetool/react-spline';

export default function NewsLetter() {
    return (
        <div className={classes.wrapper}>
            <div className={classes.body}>
                <Title className={classes.title}>Did You Know?</Title>
                <Text fw={500} fz="lg" mb={5}>
                    MoodBrew allows you to curate your tea preferences!
                </Text>
                <Text fz="sm" c="dimmed">
                    You can sign up for the newsletter to hear more about it, as well as other tips.
                    Also recieve promotional codes and get up to 3 months free!
                </Text>

                <div className={classes.controls}>
                    <TextInput
                        placeholder="Your email"
                        classNames={{ input: classes.input, root: classes.inputWrapper }}
                    />
                    <Button className={classes.control}>Subscribe</Button>
                </div>
            </div>
            <div style={{ overflow: 'hidden', width: '200px', height: '300px' }}>
                <Spline style={{ overflow: 'hidden', width: rem(1400), height: '300px', marginLeft: '-40rem' }} scene="https://prod.spline.design/OjHDTCBDNdWYwiTH/scene.splinecode" />
            </div>
        </div>
    );
}
