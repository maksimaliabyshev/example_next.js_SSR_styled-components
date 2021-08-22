import Head from 'next/head';
import { useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import RadioGroupButtons from '../components/RadioGroupButtons';
import SvgLabel from '../components/SvgLabel';
import { parseISO, differenceInMinutes } from 'date-fns';
import { format, zonedTimeToUtc } from 'date-fns-tz';

// import { GetStaticProps, GetStaticPropsContext } from 'next';

const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
body {
    font-family: 'Inter', sans-serif;
    font-weight: lighter;
  }
  /* a {
    text-decoration: none;
    cursor: pointer;
  }
  a:hover {
    text-decoration: underline;
  } */
`;

const Container = styled.div`
    max-width: 1200px;
    margin: 50px auto;
`;

const ButtonsBlock = styled.div`
    display: flex;
    justify-content: center;
`;
const SvgBlock = styled.div`
    display: flex;
    margin: 100px auto;
    justify-content: center;
`;

// export default function Index({ timezones, events }: any) {
export default function Index() {
    const [events, setEvents] = useState([
        {
            start: '2021-07-23T12:00:00.000Z',
            end: '2021-07-23T14:00:00.000Z',
            summary: 'Daily meeting 😜🌷🎁😜🌷🎁😜🌷🎁😜🌷🎁😜🌷🎁',
        },
        {
            start: '2021-10-31T02:30:00+02:00',
            end: '2021-10-31T05:30:00+01:00',
            summary: 'Berlin meeting',
        },
        {
            start: '2021-10-30T23:30:00.000Z',
            end: '2021-10-31T03:30:00.000Z',
            summary:
                'Night meeting (Сайт рыбатекст поможет дизайнеру, верстальщику, вебмастеру сгенерировать несколько абзацев более менее осмысленного текста рыбы на русском языке)',
        },
    ]);
    const [timezones, setTimezones] = useState([
        'Europe/Berlin',
        'UTC',
        'Asia/Irkutsk',
        'Pacific/Chatham',
    ]);
    // useEffect(() => {
    //     effect;
    //     // return () => {
    //     //     cleanup;
    //     // };
    // }, [ timezones, events ]);

    const [timezone, setTimezone] = useState('');
    const [event, setEvent] = useState('');
    const [label, setLabel] = useState({});
    // console.log(timezones, events);

    useEffect(() => {
        if (event && timezone) {
            let start = zonedTimeToUtc(new Date(event.start), timezone);
            let end = zonedTimeToUtc(new Date(event.end), timezone);
            let height = Math.ceil(differenceInMinutes(end, start) / 30) * 39;
            console.log(
                'start \n',
                new Date(event.start) + ' - new Date(event.start)\n',
                start,
                timezone + '\n',
            );
            console.log(
                'end \n',
                new Date(event.end) + ' - new Date(event.start)\n',
                end,
                timezone + '\n',
                '-------------------',
            );
            setLabel({
                height: height,
                start: start,
                end: end,
            });
            // console.log('end ', timeEnd, timezone);
        }
        // return () => {
        //     cleanup;
        // };
    }, [timezone, event]);

    return (
        <>
            <Head>
                <title>SSR styled-components with Next.js</title>
            </Head>
            <GlobalStyle />
            <Container>
                <ButtonsBlock>
                    <RadioGroupButtons
                        name="timezones"
                        labels={timezones}
                        onChange={(value) => setTimezone(timezones[value])}
                    />
                    <RadioGroupButtons
                        name="events"
                        labels={events.map(
                            (item, i) => 'EventSummary' + (i + 1),
                        )}
                        onChange={(value) => setEvent(events[value])}
                    />
                </ButtonsBlock>
                <SvgBlock>
                    <SvgLabel
                        start={label.start && format(label.start, 'H:mm')}
                        end={label.end && format(label.end, 'H:mm')}
                        text={event.summary}
                        height={label.height}
                    />
                </SvgBlock>
            </Container>
        </>
    );
}

// export async function getServerSideProps() {
//     const res = await fetch(
//         'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/5e217b82-9c20-4f66-ba4c-3ac6ec0b795d/timezones.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210811T041054Z&X-Amz-Expires=86400&X-Amz-Signature=c317ab4d9da89f8e68a3da18ac38ef96d86719efe1251c6602bfe441f52192ba&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22timezones.json%22',
//     );
//     const timezones = await res.json();
//     const res2 = await fetch(
//         'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e78c62b6-ac16-4d6a-b5d4-5204b48c5c61/events.json?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210811T041229Z&X-Amz-Expires=86400&X-Amz-Signature=3447b873726a0a294352f672bd98d87b88ff1d84b0ec1dcced44cedbeb3f41a9&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22events.json%22',
//     );
//     const events = await res2.json();

//     return {
//         props: {
//             timezones,
//             events,
//         },
//     };
// }

interface IEvent {
    start: string | Date;
    end: string | Date;
    summary: string;
}
