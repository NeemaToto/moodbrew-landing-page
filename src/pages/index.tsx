import Head from "next/head";
import { Title, Flex, Stack, Text, Group, Button } from "@mantine/core";
import Spline from '@splinetool/react-spline';
import Link from "next/link";
import { IconArrowDown } from '@tabler/icons-react'
import PlanCard from "@/components/PlanCard";
import NewsLetter from '@/components/NewsLetter'

export default function Home() {
  return (
    <>
      <Head>
        <title>MoodBrew - Landing Page</title>
        <meta name="description" content="Join MoodBrew today!" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Flex
          justify='center'
          align='center'
          direction='column'
          ta='center'
          gap={150}
        >
          <section>
            <Stack
              align="center"
              justify="center"
            >
              <Title>
                MoodBrew
              </Title>
              <Text>
                A sustainable tea vendor, where you can experience the unknown with every sip while also leading a healthy lifestyle.
              </Text>
              <Spline style={{ width: '35vw', minWidth: '20rem' }} scene="https://prod.spline.design/e9qLvVK1dOaVhi3d/scene.splinecode" />
              <Button component={Link} href='#plans' rightSection={<IconArrowDown stroke={3} />} mt={70} size="md">Browse our premium plans</Button>
            </Stack>
          </section>

          <section id="plans">
            <Stack
              justify="center"
              align="center"
              gap={50}
            >
              <Stack>
                <Title order={2}>
                  Browse MoodBrews Premium Plans
                </Title>
                <Text>
                  Pick a plan that works for you! MoodBrew offers a variety of plans in order to cater to every unique need.<br />All plans
                  come with a monthly delivery to your doorstep.
                </Text>
              </Stack>
              <Group
                justify="center"
                align="center"
                wrap="wrap"
                gap={100}
              >
                <PlanCard scene="https://prod.spline.design/NGVkymEDedqBo4rX/scene.splinecode" text="The Basic Plan offers a limited sample of monthly teas with limited health benefits." title="Basic Plan" buttonPrice="11.99/month" />
                <PlanCard scene="https://prod.spline.design/jTVV4or32Yg8iZfN/scene.splinecode" text="The Tea Enjoyer plan offers a wide variety of tea's that come with an abundance of healthy benefits." title="Tea Enjoyer" buttonPrice="19.99/month" />
                <PlanCard scene="https://prod.spline.design/pchXaaVnvdFb895q/scene.splinecode" text="The Tea Lover! plan offers a massive sample of monthly teas, packed with nutrients to your doorstep!" title="Tea Lover!" buttonPrice="24.99/month" />
              </Group>
            </Stack>
          </section>
          
          <section>
            <NewsLetter />
          </section>
        </Flex>
      </main>
    </>
  );
}
