import React from 'react'
import styled from 'styled-components'
import {
  BackgroundImage,
  Flex,
  Container,
  theme
} from '@hackclub/design-system'
import { Section, SectionTitle, Cols } from './Content'
import {
  Headline,
  Subhline,
  Featline,
  Highlight,
  Title,
  Lead
} from 'components/Content'
import Photo from 'components/Photo'
import Schedule from './Schedule'

const FullBleed = styled(BackgroundImage)`
  position: relative;
  width: 100%;
  min-height: 24rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-shadow: 0 1px 4px rgba(0, 0, 0, 0.75);
`
const FullBleedCaption = styled(Flex).attrs({
  fontSize: 1,
  py: 1,
  px: 3,
  m: [3, 4],
  align: 'center',
  color: 'dark'
})`
  position: absolute;
  right: 0;
  bottom: 0;
  border-radius: ${theme.pill};
  background: rgba(255, 255, 255, 0.875);
  text-shadow: none;
  line-height: 1.75;
  @supports (-webkit-backdrop-filter: none) or (backdrop-filter: none) {
    background: rgba(255, 255, 255, 0.75) !important;
    -webkit-backdrop-filter: saturate(180%) blur(2px);
  }
  ${theme.mediaQueries.reduceTransparency} {
    background: ${theme.colors.muted} !important;
  }
`

const Gallery = styled(Container).attrs({ maxWidth: 84, px: [3, 4] })`
  display: grid;
  grid-gap: ${theme.space[3]}px;
  ${theme.mediaQueries.md} {
    grid-template-columns: repeat(8, 1fr);
    > div {
      grid-column: span 4;
      min-height: 32rem;
      &[data-vertical] {
        grid-column: span 2;
      }
    }
  }
`

export default () => (
  <Section>
    <Container maxWidth={61.25} px={3}>
      <SectionTitle>Activities</SectionTitle>
      <Cols cols="1fr 3fr" mt={[4, 5, 6]}>
        <Headline pr={[0, null, 3]}>By leaders, for&nbsp;leaders.</Headline>
        <Lead>
          In the weeks leading up to Camp, we’ll work one-on-one with every
          attendee to prepare a 2-hour workshop about something technical they
          love. They’ll share these at Camp, one every morning—so the main
          “instructional” sessions are all led by leaders.
        </Lead>
      </Cols>
    </Container>
    <FullBleed
      src="/camp/dolores.jpg"
      aria-label="Mission Dolores Park, San Francisco"
      style={{ minHeight: '32rem' }}
      align="center"
      color="white"
      px={3}
      pb={[4, null, 6]}
      my={[4, 5, 6]}
    >
      <Subhline mb={0}>Welcome to</Subhline>
      <Title mb={0}>San&nbsp;Francisco</Title>
      <FullBleedCaption>Mission Dolores Park</FullBleedCaption>
    </FullBleed>
    <Container maxWidth={48} px={3}>
      <Lead mb={4}>
        Hack Camp takes place entirely in San Francisco. You’ll live with your
        fellow campers at Home Base, a house in the Sunset. During the day,
        you’ll be at HQ, our office in SoMA.
      </Lead>
      <Lead mb={4}>
        Every day, new challenges will await campers, encompassing everything
        from adulting & high-level engineering to safe-cracking & sewing. You’ll
        have to leverage your diverse skill sets and communication skills as you
        learn to be independent. <Highlight>Expect the unexpected.</Highlight>
      </Lead>
      <Lead>
        On weekends, we’ll go on adventures, like touring the Facebook campus in
        Menlo Park, taking a trip to Angel Island outside San Francisco, and
        visiting the Exploratorium museum.
      </Lead>
    </Container>
    <Gallery my={[4, 5, 6]}>
      <Photo
        src="/camp/street.jpg"
        alt="Natoma St, HQ on the left"
        data-vertical
      />
      <Photo
        src="/camp/neighborhood.jpg"
        alt="Neighborhood, two blocks from HQ"
      />
      <Photo
        src="/camp/classroom.jpg"
        alt="HQ’s classroom space"
        data-vertical
      />
      <Photo src="/camp/conference.jpg" alt="HQ’s conference room" />
      <Photo src="/camp/library.jpg" alt="HQ’s library" />
    </Gallery>
    <Container maxWidth={48} px={3}>
      <Featline>Daily schedule</Featline>
      <Schedule
        events={[
          { start: '7:30am', length: 1, name: 'Wake up' },
          { start: '8:30am', length: 0.5, name: 'Travel to HQ' },
          { start: '9:00am', length: 1, name: 'Breakfast at HQ' },
          { start: '10:00am', length: 2, name: 'Hacker Workshop' },
          { start: '12:00pm', length: 0.5, name: 'Project Demos' },
          { start: '12:30pm', length: 1, name: 'Lunch' },
          { start: '1:30pm', length: 1, name: 'Speaker' },
          { start: '2:30pm', length: 2.5, name: 'Challenge' },
          { start: '5:00pm', length: 0.5, name: 'Travel to Home Base' },
          { start: '5:30pm', length: 1.5, name: 'Cooking' },
          { start: '7:00pm', length: 1, name: 'Dinner' },
          { start: '8:00pm', length: 1, name: 'Cleanup' },
          { start: '9:00pm', length: 2, name: 'Free Time' },
          { start: '11:00pm', length: 1, name: 'Bedtime' }
        ]}
      />
      <Lead mb={4}>
        We’ll have speakers every other day. Robert from Radiolab May-Li from
        Khan Academy Tom from GitHub
      </Lead>
    </Container>
  </Section>
)
