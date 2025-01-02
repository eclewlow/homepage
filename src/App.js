import React from "react";
import {
  Container,
  Divider,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  DropdownHeader,
  Grid,
  Header,
  Image,
  List,
  Menu,
  MenuItem,
  Label,
  Segment,
  Icon,
  Button,
  Item,
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableFooter,
  TableCell,
  TableBody,
  Table,
  Card,
  Transition,
  Dimmer,
} from "semantic-ui-react";

import { Link } from "react-router-dom";

import eugene from "./eugene.jpg";

import "./hamburger.css";
import "./hamburger";

import hikari from "./hikari.jpg";
import marshall_gain from "./marshall-gain.jpeg";
import marshall_eq from "./marshall-eq.jpeg";
import instrument from "./instrument.jpg";
import qtz1side from "./qtz-1-side.jpg";
import qtz1FrontPanel from "./qtz-1-front-panel.jpg";
import qtz1knobs from "./qtz-1-knobs.jpg";
import qtz1naked from "./qtz-1-naked.jpg";
import mosfetPaper from "./mosfet-paper.jpeg";
import mosfetPanel from "./mosfet-panel.jpeg";
import mosfetAdded from "./mosfet-added.jpeg";
import mosfetAssembled from "./mosfet-assembled.jpeg";
import prophet6soundLibrarian from "./prophet6soundlibrarian.jpg";
import housePriceEstimator from "./house-price-1.jpg";
import synthCatalog from "./synth-3.jpg";
import kyotoTower from "./kyoto-tower.jpg";
import iwish from "./iwish-clone.jpg";
import { ifft, fft } from "fft-js";
import { n1GoiEnglish } from "./n1goi-english";
import _ from "lodash";

const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

const Nav = () => (
  <>
    <Menu fixed="top" inverted stackable>
      <Container>
        <Menu.Item as="a" header href="/">
          {/* <Image size="mini" src="/logo.png" style={{ marginRight: "1.5em" }} /> */}
          <Icon color="red" name="codepen" style={{ marginRight: "1.5em" }} />
          Eugene Clewlow
        </Menu.Item>
        <Menu.Item as="a" href="/">
          Home
        </Menu.Item>

        <Menu.Item as="a" href="/blog">
          Blog
        </Menu.Item>

        <Dropdown item text="日本語">
          <Dropdown.Menu>
            <Dropdown.Item href="/n1-goi">
              日本語能力試験１級語彙練習
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown item text="Projects">
          <Dropdown.Menu>
            <Dropdown.Header content="VST / AU" />
            <Dropdown.Divider />
            <Dropdown.Item href="/au-synthesizer">- Synthesizer</Dropdown.Item>
            <Dropdown.Item href="/juce-iwish">- I Wish</Dropdown.Item>

            <Dropdown.Header content="Eurorack" />
            <Dropdown.Divider />
            <Dropdown.Item href="/eurorack-quantizer">- QTZ-1</Dropdown.Item>
            <Dropdown.Item href="/eurorack-mosfet">
              - Mosfet Multidrive
            </Dropdown.Item>
            <Dropdown.Item href="/eurorack-graphic-vco-clone">
              - Graphic VCO clone
            </Dropdown.Item>

            <Dropdown.Header content="Midi" />
            <Dropdown.Divider />
            <Dropdown.Item href="/prophet-6-sound-librarian">
              - Prophet 6 Sound Librarian
            </Dropdown.Item>

            <Dropdown.Header content="DSP" />
            <Dropdown.Divider />
            <Dropdown.Item href="/inverse-fft">- Inverse FFT</Dropdown.Item>

            <Dropdown.Header content="Course Projects" />
            <Dropdown.Divider />
            <Dropdown.Item href="/house-price-estimator">
              - House Price Estimator
            </Dropdown.Item>
            <Dropdown.Item href="/synthesizer-catalog">
              - Synthesizer Catalog
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Menu.Item
          name="bandcamp"
          href="https://myaliendream.bandcamp.com/"
          target="_blank"
        >
          <Icon color="teal" name="bandcamp" />
        </Menu.Item>
        <Menu.Item
          name="instagram"
          href="https://www.instagram.com/eugeneclewlow/"
          target="_blank"
        >
          <Icon color="orange" name="instagram" />
        </Menu.Item>
        <Menu.Item
          name="github alternate"
          href="https://github.com/eclewlow"
          target="_blank"
        >
          <Icon color="green" name="github alternate" />
        </Menu.Item>
        <Menu.Item
          name="linkedin"
          href="https://www.linkedin.com/in/eugene-clewlow-080424196/"
          target="_blank"
        >
          <Icon color="blue" name="linkedin" />
        </Menu.Item>
        <Menu.Item
          name="twitter"
          href="https://twitter.com/eugene_clewlow"
          target="_blank"
        >
          <Icon color="teal" name="twitter" />
        </Menu.Item>
      </Container>

      {/* <Menu.Menu position="right">
        <Dropdown item text="Language">
          <Dropdown.Menu>
            <Dropdown.Item>English</Dropdown.Item>
            <Dropdown.Item>日本語</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu> */}
      <div class="hamburger">
        <span class="hamburger-bun"></span>
        <span class="hamburger-patty"></span>
        <span class="hamburger-bun"></span>
      </div>
    </Menu>
  </>
);

const Footer = () => (
  <Segment
    inverted
    vertical
    style={{
      margin: "5em 0em 0em",
      padding: "5em 0em",
    }}
  >
    <Container textAlign="center">
      <Grid columns="equal" divided inverted padded>
        <Grid.Row>
          <Grid.Column>
            <Header inverted as="h4" content="Index" />
            <List link inverted>
              <List.Item as="a" href="/">
                Home
              </List.Item>
              <List.Item as="a" href="/blog">
                Blog
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <Header inverted as="h4" content="Projects" />
            <List link inverted>
              <List.Item href="/eurorack-graphic-vco-clone" as="a">
                Graphic VCO clone
              </List.Item>
              <List.Item href="/eurorack-quantizer" as="a">
                Quantizer Eurorack Module
              </List.Item>
              <List.Item href="/prophet-6-sound-librarian" as="a">
                Prophet 6 Sound Librarian
              </List.Item>
              <List.Item href="/au-synthesizer" as="a">
                Synthesizer VST / AU
              </List.Item>
              <List.Item href="/juce-iwish" as="a">
                IWish Juce clone VST / AU
              </List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            <Header inverted as="h4" content="Social" />
            <List link inverted>
              <List.Item href="https://www.instagram.com/eugeneclewlow/" as="a">
                Instagram
              </List.Item>
              <List.Item href="https://github.com/eclewlow" as="a">
                Github
              </List.Item>
              <List.Item
                href="https://www.linkedin.com/in/eugene-clewlow-080424196/"
                as="a"
              >
                LinkedIn
              </List.Item>
            </List>
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Divider inverted section />
      <Image centered size="mini" src="/logo.png" />
      <List horizontal inverted divided link size="small">
        <List.Item as="a" href="#">
          Site Map
        </List.Item>
        <List.Item as="a" href="#">
          Contact Us
        </List.Item>
        <List.Item as="a" href="#">
          Terms and Conditions
        </List.Item>
        <List.Item as="a" href="#">
          Privacy Policy
        </List.Item>
      </List>
    </Container>
  </Segment>
);

const GenericPage = ({ headerText, content }) => (
  <>
    <Nav />
    <Container text style={{ marginTop: "7em" }}>
      <Header as="h1" dividing>
        {headerText}
      </Header>
      {content}
    </Container>
    <Footer />
  </>
);

const Homepage = () => (
  <>
    <Nav />
    <Container
      text
      style={{ marginTop: "7em", position: "relative", minHeight: "100vh" }}
    >
      <Item.Group>
        <Item>
          {/* <Item.Image size="small" src={eugene} /> */}
          <Item.Content verticalAlign="middle">
            <Item.Header as="a">Eugene Clewlow</Item.Header>
            <Item.Description>
              <p>eugene.clewlow@gmail.com</p>
              <p>Copyright &copy; 2024 Eugene Clewlow.</p>
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    </Container>
    <Footer />
  </>
);

const BlogPost = ({ date, content }) => (
  <>
    <Header as="h3">{date}</Header>
    <p>{content}</p>
  </>
);

const BlogPage = () => (
  <GenericPage
    headerText="Blog"
    content={
      <>
        <BlogPost
          date="January 1st, 2024"
          content={
            <>
              <p>
                {" "}
                Guitar updates:
                <ul>
                  <li>
                    Jammed AC/DC and Doobie Brothers songs.
                    <ul>
                      <li>Classic Gain Gain: 10</li>
                      <li>Ultra Gain Gain: 2.5</li>
                      <li>Treble: 5</li>
                      <li>Middle: 10</li>
                      <li>Bass: 0</li>
                      <li>Presence: 5</li>
                      <li>Resonance: 0</li>
                      <li>Reverb: 0</li>
                      <li>Tone Shift: On</li>
                    </ul>
                  </li>
                </ul>
              </p>
            </>
          }
        />{" "}
        <BlogPost
          date="December 28th, 2024"
          content={
            <>
              <p>
                {" "}
                Guitar updates:
                <ul>
                  <li>
                    I fixed the Epiphone temporarily. There was a pair of wire
                    in the cavity coming from the humbucker that got twisted and
                    was causing the signal to cut in and out. I straightened it
                    out, and it's not cutting out anymore...for now.
                  </li>
                </ul>
              </p>
              <p>
                Synth updates:
                <ul>
                  <li>
                    I'm considering getting a Yamaha Reface DX to develop
                    librarian software for it.
                  </li>
                </ul>
              </p>
              <p>
                Japan updates:
                <ul>
                  <li>
                    I haven't been studying much Japanese, but I am working with
                    Ken, which I'm incredibly grateful for.
                  </li>
                </ul>
              </p>
              <p>
                Ping pong updates:
                <ul>
                  <li>
                    I pulled a muscle playing last night. It was painful and I
                    will take weeks to heal. I'm using crutches now. I won't be
                    playing ping pong for a while. Maybe I'll use the time to
                    write code or something.
                  </li>
                </ul>
              </p>{" "}
            </>
          }
        />{" "}
        <BlogPost
          date="December 22nd, 2024"
          content={
            <>
              <p>
                {" "}
                Guitar updates:
                <ul>
                  <li>
                    I just got an Epiphone Les Paul on Wednesday. It sounds
                    great. Plays great and stays in tune.
                  </li>
                  <li>
                    Already, the neck humbucker started to have no signal. I
                    opened up the back cavity and wiggled the wires and the
                    sound cuts in and out. I'm thinking of getting a humbucker
                    kit off Amazon and replacing all the hardware.
                  </li>
                </ul>
              </p>
              <p>
                Japan updates:
                <ul>
                  <li>
                    I haven't been motivated to study all that much, which is
                    okay. If the motivation comes and goes, I can live with it.
                  </li>
                  <li>
                    I have been working with Ken, though, which is awesome!
                  </li>
                  <li>
                    I watched Beach Boys on Netflix or something. Pretty cheesy,
                    but pretty good.
                  </li>
                </ul>
              </p>
              <p>
                Ping pong updates:
                <ul>
                  <li>
                    Played with KC and David on Wednesday. We took turns playing
                    matches to 11. It was awesome!
                  </li>
                </ul>
              </p>{" "}
            </>
          }
        />{" "}
        <BlogPost
          date="December 17th, 2024"
          content={
            <>
              <p>
                {" "}
                Guitar updates:
                <ul>
                  <li>
                    Still practicing every day. I practice a mix of AC/DC,
                    Boston, Tom Petty, and Jackson Browne.
                  </li>
                </ul>
              </p>
              <p>
                Japan updates:
                <ul>
                  <li>In the middle of 騎士団長殺し・１部・下巻.</li>
                  <li>
                    Just picked up reading NHK news and practicing Kanji again.
                    I should keep it up.
                  </li>
                  <li>
                    Started using a JLPT N1 test preparation app. It's really
                    good because it tests me on a bunch of stuff I don't
                    know/remember.
                  </li>
                </ul>
              </p>
              <p>
                Ping pong updates:
                <ul>
                  <li>
                    Might play with KC and David tomorrow. Looking forward to
                    it.
                  </li>
                </ul>
              </p>{" "}
            </>
          }
        />{" "}
        <BlogPost
          date="December 9th, 2024"
          content={
            <>
              <p>
                {" "}
                Guitar updates:
                <ul>
                  <li>
                    Jammed Tom Petty songs today. I found my tone switch toggled
                    in the middle position for solos. Maybe could use some bass
                    in the guitar tone so I can stay in the treble position? Or
                    maybe I'll just continue doing that. The middle position
                    sounded pretty good for solos with the December 7th
                    settings.
                    <ul>
                      <li>Classic Gain Gain: 10</li>
                      <li>Classic Gain Volume: set for garage volume</li>
                      <li>Ultra Gain Gain: 3</li>
                      <li>Ultra Gain Volume: set for garage volume</li>
                      <li>Treble: 8</li>
                      <li>Middle: 10</li>
                      <li>Bass: 2</li>
                      <li>Presence: 5</li>
                      <li>Resonance: 8</li>
                      <li>Reverb: 10</li>
                    </ul>
                  </li>
                </ul>
              </p>
            </>
          }
        />{" "}
        <BlogPost
          date="December 7th, 2024"
          content={
            <>
              <p>
                {" "}
                Guitar updates:
                <ul>
                  <li>
                    Today sounded good. Maybe a good tone for an audience, at
                    least at low volumes. Today's settings are:
                    <ul>
                      <li>Classic Gain Gain: 10</li>
                      <li>Classic Gain Volume: 0.5</li>
                      <li>Ultra Gain Gain: 3</li>
                      <li>Ultra Gain Volume: 0.5</li>
                      <li>Treble: 8</li>
                      <li>Middle: 10</li>
                      <li>Bass: 0.5</li>
                      <li>Presence: 5</li>
                      <li>Resonance: 10</li>
                      <li>Reverb: 10</li>
                    </ul>
                  </li>
                </ul>
              </p>
            </>
          }
        />{" "}
        <BlogPost
          date="December 6th, 2024"
          content={
            <>
              <p>
                {" "}
                Guitar updates:
                <ul>
                  <li>
                    Today sounded good. Maybe a good tone for an audience, at
                    least at low volumes. Today's settings are:
                    <ul>
                      <li>Classic Gain Gain: 10</li>
                      <li>Classic Gain Volume: 0.5</li>
                      <li>Ultra Gain Gain: 3</li>
                      <li>Ultra Gain Volume: 0.5</li>
                      <li>Treble: 7</li>
                      <li>Middle: 10</li>
                      <li>Bass: 1</li>
                      <li>Presence: 5</li>
                      <li>Resonance: 10</li>
                      <li>Reverb: 10</li>
                    </ul>
                  </li>
                </ul>
              </p>
            </>
          }
        />{" "}
        <BlogPost
          date="December 4th, 2024"
          content={
            <>
              <p>
                {" "}
                Guitar updates:
                <ul>
                  <li>
                    I ordered some Ernie Ball Super Slinkies. I'm interested in
                    how they'll feel.
                  </li>
                  <li>
                    I've been playing AC/DC mostly with the Marshall. I'm trying
                    to get a similarly compressed sound, but I think I would
                    have to crank the volume to 10.
                  </li>
                  <li>
                    I cranked the volume up to 4 at highest. It's already loud
                    enough for the neighbors to hear. I'm noticing the tonal
                    difference when the tubes have warmed up for around 15 to 20
                    minutes. More headroom. Less breakup when playing loudly.
                    And I've been removing the mids at that point. I'd like to
                    record the amp through my iphone without sound insulation
                    (i.e. blankets) covering the amp.
                  </li>
                </ul>
              </p>
              <p>These are the settings from my last session:</p>
              <p>
                <Image src={marshall_gain} />
                <Image src={marshall_eq} />
              </p>
              <p>
                Japan updates:
                <ul>
                  <li>
                    I finished reading 騎士団長殺し・１部・上巻. Now on to
                    １部・下巻！
                  </li>
                  <li>
                    I made a little page to test my N1 vocabulary.{" "}
                    <Link
                      to={{
                        pathname: "/n1-goi",
                      }}
                    >
                      Here
                    </Link>
                  </li>
                </ul>
              </p>
              <p>
                Ping pong updates:
                <ul>
                  <li>Hopefully will play ping pong this week.</li>
                </ul>
              </p>{" "}
            </>
          }
        />{" "}
        <BlogPost
          date="November 29th, 2024"
          content={
            <>
              <p>
                {" "}
                Guitar updates:
                <ul>
                  <li>
                    I decided to be true to myself and choose the strings that I
                    feel are the best. I can only read so much into what other
                    people use, but at the end of the day, I should choose what
                    I like. Currently they are 9-11-16-26-36-46, which is the
                    Ernie Ball Hybrid Slinkies. Who knows, maybe I'll like Super
                    Slinkies (9-11-16-24-32-42).
                  </li>
                  <li>
                    I love the tone I'm getting out of the Marshall amp and my
                    Tele. It seems to make a big difference depending on how
                    clearly I strike chords.
                  </li>
                  <li>
                    I officially bought my Tele through Reverb on July 28th of
                    this year, a day after my birthday. So I've been playing for
                    about 6 months now. I feel a little guilty, but I've been
                    eyeing the 50s Epiphone Les Paul in Metallic Gold. I really
                    think I'll end up getting it one day, but who knows. I think
                    6 months is a little too early to get another guitar. Plus,
                    play time will be divided between the two. I feel like my
                    Tele will be jealous of the lost attention, and I'll feel
                    guilty.
                  </li>
                </ul>
              </p>
              <p>
                Japan updates:
                <ul>
                  <li>
                    I've been checking out the Japanese Proficiency Exam N1
                    vocabulary and there are A LOT of words I don't know. So,
                    I'm going to have to find a way to study vocabulary.
                  </li>
                </ul>
              </p>
              <p>
                Ping pong updates:
                <ul>
                  <li>
                    Still playing ping pong in Saratoga. My cousin has been
                    beating me consistently. I know sometimes I whiff on serves.
                    He also knows my serves and he returns them in a tricky way
                    for me.
                  </li>
                </ul>
              </p>{" "}
            </>
          }
        />{" "}
        <BlogPost
          date="November 24th, 2024"
          content={
            <>
              <p>
                {" "}
                Guitar updates:
                <ul>
                  <li>
                    The 10 gauge strings were making a creaking sound in the nut
                    or string tree when I did string bends. It may be that the
                    nut is not properly filed for 10 gauge. So I went back to 9
                    gauge.
                  </li>
                  <li>
                    I've been practicing Tom Petty songs. I even started meeting
                    with someone to play Tom Petty songs together. It's a lot of
                    fun. I've also started to take lessons from a guitar
                    teacher.
                  </li>
                </ul>
              </p>
              <p>
                Japan updates:
                <ul>
                  <li>
                    Still reading 騎士団長殺し. The story is very Murakami so
                    far. There's always a male character who starts to live in
                    some remote area. I'm towards the end of １部・上巻. I'm
                    waiting for the story to pick up. My Japanese speaking
                    partner says the story gets exciting.
                  </li>
                </ul>
              </p>
              <p>
                Ping pong updates:
                <ul>
                  <li>
                    Still playing ping pong. Started playing at a new location -
                    a church gymnasium near Saratoga. The organizer knows a lot
                    about bitcoin. I've had some nice conversations with him
                    about that.
                  </li>
                </ul>
              </p>{" "}
            </>
          }
        />{" "}
        <BlogPost
          date="October 18th, 2024"
          content={
            <>
              <p>
                Almost a month since the last blog post. Maybe a good time to
                write a new one.
              </p>{" "}
              <p>
                {" "}
                Guitar updates:
                <ul>
                  <li>
                    The 10 gauge strings haven't broken since I last restrung. A
                    month seems like a nice long time for the strings to last.
                  </li>
                  <li>I finally settled on a Marshall 20-watt tube amp.</li>
                  <li>I'm practicing adding vibrato to string bends.</li>
                </ul>
              </p>
              <p>
                Japan updates:
                <ul>
                  <li>
                    I got the book Killing Commendatore or 騎士団長殺し. It's a
                    4 part novel, the longest novel I will have read until now.
                    I already started reading it and enjoy it very much. It
                    already has that Murakami feel.
                  </li>
                </ul>
              </p>
              <p>
                Ping pong updates:
                <ul>
                  <li>
                    Still playing ping pong. Going to the Ping Pong meetup
                    group. Played with someone who really had some funky spin.
                    It was fun.
                  </li>
                </ul>
              </p>{" "}
            </>
          }
        />{" "}
        <BlogPost
          date="September 21st, 2024"
          content={
            <>
              {" "}
              <p>
                {" "}
                Guitar updates:
                <ul>
                  <li>
                    Still practicing every day. I was learning Huey Lewis songs
                    before, but I've amassed a number of rock tunes to learn.
                    Partially thanks to the guitar group.
                  </li>
                  <li>
                    I switched guitar gauges from 9 to 10. At first I noticed
                    the extra amount of effort to bend the high E, but it's
                    kinda gone away now. I thought I noticed small tonal change.
                    Could just be my imagination. I like the way these feel
                    better because they don't bend as easily as the 9s.
                  </li>
                  <li>
                    Still wondering what amp to get, if I even do get one.
                    Lately I'm considering a solid state amp, because with my
                    pedals, all I'd really use is the clean sound. I guess tube
                    amps still have the tube power stage, of which I might like
                    the sound better.
                  </li>
                </ul>
              </p>
              <p>
                Japan updates:
                <ul>
                  <li>
                    I haven't been going to through the N1 Kanji list. It would
                    be good to do that. The Japanese church classes have started
                    again.
                  </li>
                  <li>
                    I finished with Norwegian Wood in Japanese. I think I'll go
                    to Kinokuniya soon and find a new Murakami book.
                  </li>
                </ul>
              </p>
              <p>
                Ping pong updates:
                <ul>
                  <li>
                    Still playing ping pong. Going to the Ping Pong meetup
                    group. Played with someone really good. I only beat him once
                    out of 10 or 11 games. That one win made my day.
                  </li>
                </ul>
              </p>{" "}
            </>
          }
        />{" "}
        <BlogPost
          date="September 10th, 2024"
          content={
            <>
              {" "}
              <p>
                {" "}
                Synth updates:
                <ul>
                  <li>
                    Nothing new here. I sold the last of my eurorack gear but
                    I'm keeping the Moog Minitaur and my diy eurorack gear.
                  </li>
                </ul>
              </p>
              <p>
                {" "}
                Guitar updates:
                <ul>
                  <li>
                    Still practicing every day. Almost done learning Guthrie
                    Trapp's truck drivin' man solo.
                  </li>
                  <li>
                    I'm thinking about switching string gauges from 9 to 10. I'm
                    curious if there's a difference in tone. Particularly when I
                    play the Do What You Wanna Do solo, the high E sounds very
                    thin. Makes sense; my high E is literally thin. I think this
                    tone quality is nothing that any guitar pedal can fix. I
                    read that a thicker gauge sounds beefier.
                  </li>
                </ul>
              </p>
              <p>
                Japan updates:
                <ul>
                  <li>
                    I finished going through the N1 grammar study guide. I'm
                    wondering if I should start from the beginning and do it
                    again. Will repeated review help me at all memorize the
                    grammar points?
                  </li>
                  <li>
                    Almost done reading Norwegian Wood in Japanese. I still have
                    a Doraemon learning series book of all the prefectures in
                    Japan that I check out once in a while. I just learned that
                    the "gata" in Niigata prefecture means a marsh or a body of
                    water that is hidden by high tide and appears when the tide
                    ebbs.
                  </li>
                </ul>
              </p>
              <p>
                Ping pong updates:
                <ul>
                  <li>
                    Still playing ping pong. Going to the Ping Pong meetup
                    group. Played doubles as well as singles. Really fun.
                  </li>
                </ul>
              </p>{" "}
            </>
          }
        />{" "}
        <BlogPost
          date="August 8th, 2024"
          content={
            <>
              {" "}
              <p>
                {" "}
                Synth updates:
                <ul>
                  <li>
                    I was able to successfully build a project using
                    polymorphism with Cube IDE. I might convert the Wavetable
                    project to Cube IDE and start developing on a STM32F769I
                    Disco board. It's nice because the Disco board has a
                    built-in LCD, an 8th inch audio jack for audio playback, and
                    NOR flash - everything I would need to run the wave
                    synthesizer. But it might be a while if I actually start it.
                  </li>
                  <li>
                    Otherwise, I haven't been making too many video game Moog
                    Minitaur covers of late. Because I started playing electric
                    guitar again.
                  </li>
                </ul>
              </p>
              <p>
                {" "}
                Guitar updates:
                <ul>
                  <li>
                    I started playing electric guitar again. My goal is to learn
                    Huey Lewis and the News songs, but I also have been playing
                    a few The Cranberries songs. It was very sad with the
                    passing of Dolores O'Riordan. When I play her music, I feel
                    I'm with her.
                  </li>
                </ul>
              </p>
              <p>
                Japan updates:
                <ul>
                  <li>I still study Japanese for the N1 every now and then.</li>
                  <li>
                    I started on the second half of Norwegian Wood in Japanese.
                    My Japanese speaking partner taught me the vocabulary for
                    the first and second half of a novel. It's Jou-kan and
                    Ge-kan (上巻、下巻). Three parts would be Jou-Chuu-Ge-kan
                    (上巻、中巻、下巻).
                  </li>
                </ul>
              </p>
              <p>
                Ping pong updates:
                <ul>
                  <li>
                    Still playing ping pong. Going to the Ping Pong meetup
                    group. A lot of good people there.
                  </li>
                </ul>
              </p>{" "}
            </>
          }
        />{" "}
        <BlogPost
          date="July 23rd, 2024"
          content={
            <>
              {" "}
              <p>
                {" "}
                Synth updates:
                <ul>
                  <li>
                    I started playing around with the Moog Minitaur again. I
                    guess my urge to play synths came back. For fun, I've been
                    converting Final Fantasy music, interpreted through the Moog
                    Minitaur, instrumentalized through subtractive synthesis.
                    Here's a bandcamp link of the music thus far.
                  </li>
                </ul>
                <p>
                  {" "}
                  <iframe
                    style={{ border: 0, width: "100%", height: "120px" }}
                    src="https://bandcamp.com/EmbeddedPlayer/album=1283041378/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/"
                    seamless
                  >
                    <a href="https://myaliendream.bandcamp.com/album/final-fantasy-with-a-moog-minitaur">
                      Final Fantasy with a Moog Minitaur by my alien dream
                    </a>
                  </iframe>
                </p>
                <ul>
                  <li>
                    I sold my Jeremy Huang Eurorack setup. It was a great
                    introduction to Eurorack. I just kinda stopped playing with
                    the thing, and I found myself more interested in
                    non-Eurorack Moog equipment. It might be related to my
                    failure to develop the wavetable synthesizer module like I
                    had hoped. Unfortunately, I still haven't been able to
                    figure out why the Arm MCU won't execute polymorphic code. I
                    can't tell if there is an error in the code, or perhaps in
                    the build system itself. It would be nice to figure out why.
                    It just seems that the more I focus on the problem, the more
                    stressed out I get. So I have to step back from it.
                  </li>
                </ul>
              </p>
              <p>
                Japan updates:
                <ul>
                  <li>
                    I'm still studying Japanese. Watching Kinpachi sensei.
                    Studying grammar and Kanji . I'm almost finished with
                    reading the first half of Norwegian Wood by Haruki Murakami.
                  </li>
                </ul>
              </p>
              <p>
                Ping pong updates:
                <ul>
                  <li>
                    Still playing ping pong. Cut down to about once or twice a
                    week. I mostly play with my cousin. I might play with my
                    Japanese speaking partner, which would be an interesting
                    fusion of worlds.
                  </li>
                </ul>
              </p>{" "}
            </>
          }
        />{" "}
        <BlogPost
          date="June 21st, 2024"
          content={
            <>
              <p>
                It hasn't been about two months since I did a blog post. It
                feels like longer. I've removed the synth section because I
                really haven't had any urge to play with synths.
              </p>
              <p>
                Lately, I've gotten really into this game called Skygunner. So
                I've spent a lot of time collecting stuff related to Skygunner,
                and playing it a lot. I played it when it first came out, over
                two decades ago! I was really into it then and I'm still really
                into it, it seems.{" "}
              </p>
              <p>
                I'm still studying Japanese in preparation for the N1 test.
                Still reading Murakami. I'm reading Norwegian Wood now. I've
                read it in English, so I kind of know what to expect. My goal is
                to immerse myself more in Japanese, so one thing I'm doing is
                playing Final Fantasy X in Japanese. Oh yeah, and watching
                Kinpachi Sensei. The video game isn't too hard to understand,
                but Kinpachi Sensei - whoa, they speak fast and in a certain
                way.
              </p>
              <p>
                Ping pong updates:
                <ul>
                  <li>
                    I almost quit playing ping pong. I don't know why. It might
                    have been because I had a bad day one day. No one would play
                    with me and I waited for about an hour. I guess it doesn't
                    sound that bad. I decided to play today and I had a really
                    great work out and a really great time.
                  </li>
                </ul>
              </p>
            </>
          }
        />{" "}
        <BlogPost
          date="April 15th, 2024"
          content={
            <>
              <p>
                Synth updates:
                <ul>
                  <li>
                    I decided to stop working on Eurorack stuff for a while. It
                    started to become more stressful than not, and I'd like to
                    work on things that don't cause me so many negative
                    emotions.
                  </li>
                </ul>
              </p>
              <p>
                Japan updates:
                <ul>
                  <li>
                    I'm still studying Japanese. I finished reading After Dark
                    (by Haruki Murakami) in Japanese. The entire story takes
                    place over one single evening. I really like the
                    storytelling.
                  </li>
                  <li>
                    My friend Ken will be visiting again in a couple days. I'm
                    very happy.
                  </li>
                  <li>
                    I've been cooking with Tsuyu sauce now. It seems like quite
                    a few Japanese dishes have Tsuyu. So far I've made Agedashi
                    Doufu, Zaru Soba, and Tempura.
                  </li>
                </ul>
              </p>
              <p>
                Ping pong updates:
                <ul>
                  <li>
                    Still playing ping pong at Swan. I'm very grateful to have a
                    hobby that I'm passionate about, not to mention a form of
                    exercise.
                  </li>
                </ul>
              </p>
            </>
          }
        />{" "}
        <BlogPost
          date="March 7th, 2024"
          content={
            <>
              <p>
                I thought more time had gone by, but it's only been about a
                month. I think it's a good time to write an update.
              </p>
              <p>
                Synth updates:
                <ul>
                  <li>
                    I'm still just working on the Erica Synths Graphic VCO
                    clone. I keep running into program quirkiness with Arm and
                    C++. It kinda bums me out. But I'm very slowly chugging
                    along. I enjoy it when it works. Not so much when it doesn't
                    work. At the moment I'm running into an issue where calling
                    a function through dynamic binding (virtual function) is
                    causing the program to hault. I think it has something to do
                    with using a local non-const pointer to point to a global
                    variable.
                  </li>
                </ul>
              </p>
              <p>
                Japan updates:
                <ul>
                  <li>
                    I'm still studying Japanese. I started reading a Murakami
                    novel in Japanese called Afterdark. I'm halfway through with
                    it already.
                  </li>
                  <li>
                    My friend Ken is visiting now! It's great to have him here.
                    We've been eating good food. I took him to play ping pong
                    but he said it makes him dizzy. I see, it can have that
                    effect on people.
                  </li>
                  <li>
                    We have also been going to the driving range to practice
                    golf. It's pretty fun.
                  </li>
                </ul>
              </p>
              <p>
                Ping pong updates:
                <ul>
                  <li>
                    I got a new bat. It's the Peter Korbl Butterfly. It's highly
                    recommended for newcomers to the sport. I sold the Joo
                    SaeHyuk. I don't think it matches my play style.
                  </li>
                  <li>
                    I started a membership at a ping pong club in Santa Clara
                    called Swan Ping Pong. I'm having the best times of my life
                    playing there. Such unique players there.
                  </li>
                </ul>
              </p>
            </>
          }
        />
        <BlogPost
          date="January 17th, 2024"
          content={
            <>
              <p>
                Happy New Year! Holy moly. I haven't been keeping up with the
                updates as I said I would. Here are some updates.
              </p>
              <p>
                Synth updates:
                <ul>
                  <li>
                    I redesigned the FET overdrive with parts that the Moog
                    Multidrive circuit uses. It seems to work better now, in
                    that the LED lights up more linearly in response to the
                    pre-gain. Also there is more bass response, as most of the
                    HPF capacitors were removed.
                  </li>
                  <li>
                    I'm working on a{" "}
                    <a href="/eurorack-graphic-vco-clone">
                      clone of the Erica Synths Graphic VCO module
                    </a>
                    . Currently I'm trying to get an LCD to work from
                    BuyDisplay. It's not working right now. I'm hoping it's just
                    a circuit design / soldering issue with the zif connector
                    breakout board. Really I should finish programming the rest
                    of the sound engines while I wait for PCBs to arrive.
                  </li>
                </ul>
              </p>
              <p>
                Japan updates:
                <ul>
                  <li>
                    I'm still studying Japanese. I just finished reading a
                    Murakami novel in Japanese. I plan to read more manga and
                    novels, and do study for the N1 proficiency exam. And watch
                    J dramas.
                  </li>
                  <li>
                    My friend Ken is planning to visit a month from now, so I'm
                    cleaning the house so it's somewhat decent for him.
                  </li>
                </ul>
              </p>
              <p>
                Ping pong updates:
                <ul>
                  <li>
                    I started playing ping pong again! It's great exercise. I
                    love ping pong so much. I feel it's so expressive in terms
                    of style. Everybody I play with is so unique. I also love
                    ping pong paddles. They are designed so exquisitely. I
                    compare them to the design of swords.
                  </li>
                  <li>
                    I'm currently playing with the Butterfly Joo SaeHyuk blade,
                    with Andro Rasanter 42 on FH and Butterfly Sriver BH. My
                    goal is to get better with forehand topspin vs backspin
                    today. There is a meetup ping pong free play tonight.
                  </li>
                </ul>
              </p>
            </>
          }
        />
        <BlogPost
          date="October 8th, 2023"
          content={
            <>
              <p>
                It's been several months since my last post. I'd like to keep
                the updates going.
              </p>
              <p>
                Synth updates:
                <ul>
                  <li>
                    I've filled most of the Moog case with neat, mostly 2hp and
                    6hp modules.
                  </li>
                  <li>
                    I made a new front panel for the QTZ-1. This time I used
                    JLCPCB to make them. The cost is considerably less. Through
                    JLCPCB I can have 5 panels made for ~$25 ($5 per panel).
                    Using Front Panel Express it costs about $50 per panel. The
                    main difference in quality is the material (FR1 vs
                    Aluminum).
                  </li>
                  <li>
                    I developed a Mosfet overdrive 6hp module. I'm pretty
                    pleased with the way it sounds, considering I'm a novice at
                    circuit design. I'm also pleased with how quickly it took to
                    get from design to final product. It took a little more than
                    a month. But it felt like a year.
                  </li>
                </ul>
              </p>
              <p>
                Japan updates:
                <ul>
                  <li>
                    I passed the N2 (level 2) Japanese Language Proficiency
                    Exam! Yay!
                  </li>
                  <li>
                    I finished reading my first novel in Japanese. Actually my
                    second. My true first novel was one of the series Shounen
                    Meitantei (Boy detective). So my second novel was 崩壊の森
                    Houkai no Mori, which follows a reporter sent to the Soviet
                    Union and documents the Soviet's transition from
                    authoritarianism.
                  </li>
                </ul>
              </p>
              <p>
                I find myself trying to finish up books that I've left unread
                from several months ago, despite not being entirely interested.
              </p>
            </>
          }
        />
        <BlogPost
          date="July 22, 2023"
          content={
            <p>
              Got a new Moog 60hp case. Starting to add a bunch of 6hp modules.
            </p>
          }
        />
        <BlogPost
          date="July 17, 2023"
          content={
            <p>
              Migrating my website to React Single-Page App because it will be
              considerably cheaper to host through Amazon S3 instead of running
              a server through Elastic Beanstalk.
            </p>
          }
        />
        <BlogPost
          date="July 13, 2023"
          content={
            <p>
              Returned from my trip to Japan. I already miss the mountains,
              rivers, trees, small towns, the smells, the food.
            </p>
          }
        />
        <BlogPost
          date="July 12, 2023"
          content={
            <>
              <p>
                Stopped by Five-G music in Tokyo on my last day before leaving
                Japan and picked up this Eurorack Sequencer made by Hikari (a
                Japanese eurorack module company).
              </p>
              <p>
                <Image src={hikari} />
              </p>
            </>
          }
        />
        <BlogPost
          date="July 11, 2023"
          content={
            <>
              <p>
                Last night in Kyoto. I had a great view of Kyoto Tower from my
                room.
              </p>
              <p>
                <Image src={kyotoTower} />
              </p>
            </>
          }
        />
      </>
    }
  />
);

const AUSynthesizerPage = () => (
  <GenericPage
    headerText="Audio Unit V3 Synthesizer"
    content={
      <>
        <p>
          <Button
            size="mini"
            href="https://github.com/eclewlow/Instrument/releases"
            target="_blank"
            content="Download"
            icon="download"
            labelPosition="left"
          />
          <Button
            size="mini"
            href="https://github.com/eclewlow/Instrument"
            target="_blank"
            content="Source Code"
            icon="github"
            labelPosition="left"
          />
        </p>
        <p>
          The goal of this project was to develop a subtractive synthesizer AUv3
          instrument for Mac OS X.
        </p>
        <p>
          <Image src={instrument} />
        </p>
        <p>
          This was my first introduction to DSP, but it helped that I've used
          synthesizers before. Still, it was a challenge, and through this
          project I learned about aliasing and how to program various filters.
        </p>
        <p>
          This project was coding in Swift for the UI, and C/C++ for the DSP
          code.
        </p>{" "}
      </>
    }
  />
);
const EurorackQuantizerPage = () => (
  <GenericPage
    headerText="QTZ-1 (Eurorack Quantizer)"
    content={
      <>
        <p>
          <Button
            size="mini"
            href="https://github.com/eclewlow/eurorack/releases"
            target="_blank"
            content="Download"
            icon="download"
            labelPosition="left"
          />
          <Button
            size="mini"
            href="https://github.com/eclewlow/eurorack"
            target="_blank"
            content="Source Code"
            icon="github"
            labelPosition="left"
          />
        </p>
        <p>
          {" "}
          <Grid>
            <Grid.Row columns={2} centered>
              <Grid.Column>
                <Image
                  size="small"
                  src={qtz1knobs}
                  bordered
                  rounded
                  floated="right"
                />
              </Grid.Column>
              <Grid.Column>
                <Image
                  src={qtz1naked}
                  size="small"
                  bordered
                  rounded
                  floated="left"
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2} centered>
              <Grid.Column>
                <Image
                  size="small"
                  src={qtz1FrontPanel}
                  bordered
                  rounded
                  floated="right"
                />
              </Grid.Column>
              <Grid.Column>
                <Image
                  src={qtz1side}
                  size="small"
                  bordered
                  rounded
                  floated="left"
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </p>
        <p>
          The goal of this project was to develop a quantizer that would convert
          noise generated by Intellijel's Noise Random Tools module into notes
          of a specific chord.
        </p>
        <p>
          This was my first introduction to hardwire design, circuit design, and
          assembling SMD parts. I've had experience soldering through-hole
          components. For soldering the SMD components, I learned to use a
          hot-air gun and low temperature solder paste.
        </p>
        <p></p>
        <p>
          The code for the STM32F103CBT6 chip was written following Mutable
          Instrument's open source code base as a guide. The MI code base was an
          immense help and learning experience.
        </p>
        <p>
          <Image src={qtz1FrontPanel} />
        </p>
        <p>
          <Image src={qtz1side} />
        </p>{" "}
      </>
    }
  />
);
const JuceIWishPage = () => (
  <GenericPage
    headerText="I Wish clone (written with JUCE)"
    content={
      <>
        <>
          <p>
            <Button
              size="mini"
              href="https://github.com/eclewlow/IWish/releases"
              target="_blank"
              content="Download"
              icon="download"
              labelPosition="left"
            />
            <Button
              size="mini"
              href="https://github.com/eclewlow/IWish"
              target="_blank"
              content="Source Code"
              icon="github"
              labelPosition="left"
            />
          </p>{" "}
          <p style={{ textAlign: "center" }}>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/W5H1u83LSlc?si=fPj25JTQZa4RYpQG"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </p>
          <p>
            The goal of this project was to develop a plugin using JUCE. In
            particular, I was wanting a plugin that makes sounds similar to what
            Infected Mushroom uses in their tracks.
          </p>
          <p>
            <Image src={iwish} />
          </p>
          <p>
            After watching a number of videos on how the I-Wish plugin works, I
            developed this.
          </p>
          <p>
            It is a musical effect plugin that works as VST, AU, and AUv3. By
            adding a side chain and programming midi notes, the side chain audio
            is sampled into a buffer which I then repeat using a phase variable.
            The full source can be viewed on Github.
          </p>
        </>
      </>
    }
  />
);
const Prophet6SoundLibrarianPage = () => (
  <GenericPage
    headerText="Prophet 6 Sound Librarian"
    content={
      <>
        <p>
          <Button
            size="mini"
            href="https://github.com/eclewlow/Prophet6SoundLibrarian/releases"
            target="_blank"
            content="Download"
            icon="download"
            labelPosition="left"
          />
          <Button
            size="mini"
            href="https://github.com/eclewlow/Prophet6SoundLibrarian"
            target="_blank"
            content="Source Code"
            icon="github"
            labelPosition="left"
          />
        </p>
        <p>
          When I purchased a Sequential Prophet 6, I quickly realized I needed
          software to backup my patches. Though there are alternatives (such as
          sysex programs) to exchange data with the P6, I wanted something that
          allowed me to organize and rename patch data, which basic sysex
          programs don't necessarily provide.
        </p>{" "}
        <p>
          <Image src={prophet6soundLibrarian} />
        </p>
        <p>
          This is a Java Swing application developed for Sequential Circuits
          Prophet 6 owners in mind. It allows user to connect Prophet 6, read
          and write data to the Prophet 6, and organize, rename and merge patch
          data. Also an option to Print a list of patches was added in v1.1.12.
        </p>
      </>
    }
  />
);
const HousePriceEstimatorPage = () => (
  <GenericPage
    headerText="House Price Estimator"
    content={
      <>
        <p>
          <Button
            size="mini"
            href="https://github.com/eclewlow/house_price_estimator/releases"
            target="_blank"
            content="Download"
            icon="download"
            labelPosition="left"
          />
          <Button
            size="mini"
            href="https://github.com/eclewlow/house_price_estimator/tree/main/app/src/main/java/sjsu/cmpe277/android/mapactivity"
            target="_blank"
            content="Source Code"
            icon="github"
            labelPosition="left"
          />
        </p>
        <p>
          The goal of this project was to combine a smart phone interface with a
          backend machine learning model. A fellow student developed UI mock
          frames, and I integrated the UI into Android and programmed the system
          code, including integrating the Google Maps SDK, Google Maps API, and
          Google Firebase for user login and registration.
        </p>
        <p style={{ textAlign: "center" }}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/CN5U1jxJXTk?si=OWqHwn4DE9l7x4rL"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </p>
        <p>
          The backend consisted of a Decision Tree algorithm trained on a house
          price dataset. I delivered the Android application, writing all of the
          code using Model-View-Controller architecture. I incorporated the
          Google Maps SDK for Map navigation, and the Google Maps API for
          embedding a map image.
        </p>
        <p>
          <Image size="large" centered src={housePriceEstimator} />
        </p>
      </>
    }
  />
);
const SynthesizerCatalogPage = () => (
  <GenericPage
    headerText="Synthesizer Catalog"
    content={
      <>
        <p>
          <Button
            size="mini"
            href="https://github.com/eclewlow/synthesizer-catalog/releases"
            target="_blank"
            content="Download"
            icon="download"
            labelPosition="left"
          />
          <Button
            size="mini"
            href="https://github.com/eclewlow/synthesizer-catalog/tree/main/app/src/main/java/sjsu/cmpe277/eugeneclewlow/synthCatalog"
            target="_blank"
            content="Source Code"
            icon="github"
            labelPosition="left"
          />
        </p>
        <p>
          <Image centered size="small" src={synthCatalog} />
        </p>
        <p>
          The goal of this project was to develop a user interface using
          Android's RecyclerView class.
        </p>
        <p>
          The application consists of 2 views: a list view and a single item
          view. It utilizes Fragments, Activities, RecyclerView, as well as
          specialized Intents for making a phone call or deleting the
          application
        </p>
      </>
    }
  />
);

const EurorackMosfetPage = () => (
  <GenericPage
    headerText="Mosfet Multidrive (Eurorack)"
    content={
      <>
        <p>
          <Button
            size="mini"
            href="https://github.com/eclewlow/eurorack/releases"
            target="_blank"
            content="Download"
            icon="download"
            labelPosition="left"
          />
          <Button
            size="mini"
            href="https://github.com/eclewlow/eurorack"
            target="_blank"
            content="Source Code"
            icon="github"
            labelPosition="left"
          />
        </p>
        <p>
          {" "}
          <Grid>
            <Grid.Row columns={2} centered>
              <Grid.Column>
                <Image
                  size="small"
                  src={mosfetPaper}
                  bordered
                  rounded
                  floated="right"
                />
              </Grid.Column>
              <Grid.Column>
                <Image
                  src={mosfetPanel}
                  size="small"
                  bordered
                  rounded
                  floated="left"
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2} centered>
              <Grid.Column>
                <Image
                  size="small"
                  src={mosfetAssembled}
                  bordered
                  rounded
                  floated="right"
                />
              </Grid.Column>
              <Grid.Column>
                <Image
                  src={mosfetAdded}
                  size="small"
                  bordered
                  rounded
                  floated="left"
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </p>
        <p>
          This was my second eurorack module to develop. The goal of this
          project was to create a Eurorack module using the schematic for the
          Moog multidrive. It uses the same mosfet component and surrounding
          circuitry.
        </p>
        <p>
          I was happy to incorporate more components with this module, since my
          last module was basically just potentiometers and phono jacks. This
          one additionally uses a trimmer pot for calibrating the mosfet, an led
          to indicate drive, and a toggle switch to bypass the effect.
        </p>
        <p>
          <Image src={mosfetAssembled} />
        </p>
        <p>
          <Image src={mosfetAdded} />
        </p>{" "}
      </>
    }
  />
);

const GraphicVCOPage = () => (
  <GenericPage
    headerText="Graphic VCO clone"
    content={
      <>
        <p>
          <Button
            size="mini"
            href="https://github.com/eclewlow/Wavetable/releases"
            target="_blank"
            content="Download"
            icon="download"
            labelPosition="left"
          />
          <Button
            size="mini"
            href="https://github.com/eclewlow/Wavetable"
            target="_blank"
            content="Source Code"
            icon="github"
            labelPosition="left"
          />
        </p>
        <p>
          {" "}
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/I2e2QUDk2MY?si=ejBYu6aLQHWSegsT"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </p>
        <p>
          The goal of this project was to clone Erica Synth's Graphic VCO
          software using the JUCE framework. It follows roughly 95% of the
          original user interface.
        </p>
        <p>
          I learned to code the surrounding DSP such as effects (FM, Ring
          modulation, Bitcrush, etc.) myself, so those features may or may not
          be one-to-one with the original module.
        </p>
        <p>
          I don't actually own this module. I learned how it works by watching
          videos and reading the documentation. All sprites were copied by hand.
        </p>
      </>
    }
  />
);

const HARMONICS_BAR_HEIGHT = 240;
const HARMONICS_CANVAS_HEIGHT = 256;
const HARMONICS_DIVISOR = 4;

class InverseFFTPage extends React.Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
    this.waveData = [];
    this.harmonicsData = new Array(256);
    for (let i = 0; i < 256; i++) this.harmonicsData[i] = [0, 0];
    this.setHarmonic(1, 1.0);
  }

  setHarmonic(harmonic, magnitude) {
    if (harmonic > 0) {
      magnitude /= harmonic / HARMONICS_DIVISOR;
    }
    this.harmonicsData[harmonic] = [0, -128 * magnitude];
    if (harmonic > 0)
      this.harmonicsData[this.harmonicsData.length - harmonic] = [
        0,
        128 * magnitude,
      ];
  }
  RunIFFT() {
    var samples = [];

    for (let i = 0; i <= 256; i++) {
      samples.push(Math.sin(Math.PI * 2 * (i / 256.0)));
    }
    var signal = ifft(this.harmonicsData);
    this.waveData = signal;

    // normalize
    let max = 0;
    for (let i = 0; i < 256; i++) {
      if (this.waveData[i][0] > max) {
        max = this.waveData[i][0];
      }
    }
    let threshold = 1.0;
    if (max >= threshold)
      for (let i = 0; i < 256; i++) {
        this.waveData[i][0] = this.waveData[i][0] / max;
      }
  }

  componentDidMount() {
    this.waveData = [];
    this.RunIFFT();
    requestAnimationFrame(this.draw.bind(this));
    const canvas = document.querySelector("#harmonics-canvas");

    canvas.addEventListener(
      "mousedown",
      function (event) {
        event.preventDefault();
        const canvas = document.querySelector("#harmonics-canvas");

        this.isMouseDown = true;

        canvas.addEventListener("mouseup", this.onMouseUp.bind(this), false);
        canvas.addEventListener(
          "mousemove",
          this.onMouseMove.bind(this),
          false
        );
      }.bind(this),
      false
    );

    canvas.addEventListener(
      "touchstart",
      function (event) {
        const canvas = document.querySelector("#harmonics-canvas");

        this.isMouseDown = true;

        canvas.addEventListener("touchend", this.onMouseUp.bind(this), false);
        canvas.addEventListener(
          "touchmove",
          this.onMouseMove.bind(this),
          false
        );
      }.bind(this),
      false
    );
  }

  onMouseUp(event) {
    const canvas = document.querySelector("#harmonics-canvas");
    this.isMouseDown = false;
    canvas.removeEventListener("mousemove", this.onMouseMove.bind(this), false);
    canvas.removeEventListener("mouseup", this.onMouseUp.bind(this), false);
    canvas.removeEventListener("touchmove", this.onMouseMove.bind(this), false);
    canvas.removeEventListener("touchend", this.onMouseUp.bind(this), false);
  }

  onMouseMove(event) {
    event.preventDefault();

    let x, y;
    if (event.touches) {
      //clientX, pageX, screenX
      x = event.touches[0].pageX - event.touches[0].target.offsetLeft;
      y = event.touches[0].pageY - event.touches[0].target.offsetTop;
    } else {
      x = event.offsetX;
      y = event.offsetY;
    }

    if (!this.isMouseDown) {
      return;
    }
    const canvas = document.querySelector("#harmonics-canvas");
    const barWidth = canvas.width / 32.0;
    let harmonic = Math.floor(x / barWidth + 1);
    if (harmonic >= 0) {
      this.setHarmonic(
        harmonic,
        (HARMONICS_BAR_HEIGHT - Math.min(y, HARMONICS_BAR_HEIGHT)) /
          HARMONICS_BAR_HEIGHT
      );
    }
    this.RunIFFT();
    requestAnimationFrame(this.draw.bind(this));
  }

  drawWave() {
    const canvas = document.querySelector("#wave-canvas");
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "rgb(255,255,255)";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath(); //ADD THIS LINE!<<<<<<<<<<<<<

    const sliceWidth = canvas.width / 256.0;
    let x = 0;
    ctx.fillStyle = "rgb(0, 0, 0)";

    for (let i = 0; i < this.waveData.length; i++) {
      const v = this.waveData[i][0];
      const y = -v * (canvas.height / 2) + canvas.height / 2;

      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }

      x += sliceWidth;
    }
    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();
  }
  drawHarmonics() {
    const canvas = document.querySelector("#harmonics-canvas");

    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.clearRect(0, 0, canvas.width, HARMONICS_CANVAS_HEIGHT);
    ctx.beginPath(); //ADD THIS LINE!<<<<<<<<<<<<<

    const barWidth = canvas.width / 32.0 - 1;
    let barHeight;
    let x = 0;
    for (let i = 1; i < 32; i++) {
      barHeight =
        (HARMONICS_BAR_HEIGHT * Math.abs(this.harmonicsData[i][1]) * i) /
        HARMONICS_DIVISOR /
        128;

      ctx.fillStyle = `rgb(${barHeight + 100}, 50, 50)`;
      ctx.fillRect(x, HARMONICS_BAR_HEIGHT - barHeight, barWidth, barHeight);

      x += barWidth + 1;
    }
  }
  draw() {
    this.drawWave();
    this.drawHarmonics();
  }
  render() {
    return (
      <GenericPage
        headerText="Inverse FFT"
        content={
          <>
            <p>
              Click and drag on the bottom canvas to add harmonics to the wave
              form.
            </p>{" "}
            <div ref={this.listRef}>{/* ...contents... */}</div>
            <canvas
              style={{ border: "1px solid black" }}
              width="512"
              height="256"
              id="wave-canvas"
            ></canvas>
            <canvas
              style={{ border: "1px solid black" }}
              width="512"
              height={HARMONICS_CANVAS_HEIGHT}
              id="harmonics-canvas"
            ></canvas>
          </>
        }
      />
    );
  }
}

const WAVE_EDITOR_HARMONICS_DIVISOR = 1;

class WaveEditorPage extends React.Component {
  constructor(props) {
    super(props);
    this.listRef = React.createRef();
    this.waveData = [];
    this.fft = [];
    this.harmonicsData = new Array(256);
    this.gs = new Array(256);
    for (let i = 0; i < 256; i++) this.harmonicsData[i] = [0, 0];
    this.setHarmonic(1, 0, -128, 0, 128);
    for (let i = 0; i < 256; i++) this.gs[i] = [0, 0];
  }

  setHarmonic(harmonic, i0, r0, i1, r1) {
    this.harmonicsData[harmonic] = [i0, r0];
    if (harmonic > 0) {
      this.harmonicsData[this.harmonicsData.length - harmonic] = [i1, r1];
    }
  }
  RunIFFT() {
    // var samples = [];

    // for (let i = 0; i <= 256; i++) {
    //   samples.push(Math.sin(Math.PI * 2 * (i / 256.0)));
    // }
    let after_gain_harmonics = JSON.parse(JSON.stringify(this.harmonicsData));

    for (let i = 1; i < 32; i++) {
      after_gain_harmonics[i][0] = this.gs[i][0] + after_gain_harmonics[i][0];
      after_gain_harmonics[i][1] = this.gs[i][1] + after_gain_harmonics[i][1];
      after_gain_harmonics[256 - i][0] =
        this.gs[256 - i][0] + after_gain_harmonics[256 - i][0];
      after_gain_harmonics[256 - i][1] =
        this.gs[256 - i][1] + after_gain_harmonics[256 - i][1];
    }

    after_gain_harmonics[0][0] = 0;
    after_gain_harmonics[0][1] = 0;

    var signal = ifft(after_gain_harmonics);
    this.waveData = signal;
  }
  RunFFT() {
    for (let i = 0; i < 256; i++) this.gs[i] = [0, 0];
    var dft = fft(this.waveData);

    this.fft = dft;

    for (let i = 0; i < 128; i++) {
      this.setHarmonic(
        i,
        dft[i][0],
        dft[i][1],
        i > 0 ? dft[256 - i][0] : 0,
        i > 0 ? dft[256 - i][1] : 0
      );
    }
  }

  componentDidMount() {
    this.waveData = [];
    this.RunIFFT();
    // this.RunFFT();
    requestAnimationFrame(this.draw.bind(this));
    const canvas = document.querySelector("#harmonics-canvas");

    canvas.addEventListener(
      "mousedown",
      function (event) {
        event.preventDefault();
        const canvas = document.querySelector("#harmonics-canvas");

        this.isMouseDown = true;

        canvas.addEventListener("mouseup", this.onMouseUp.bind(this), false);
        canvas.addEventListener(
          "mousemove",
          this.onMouseMove.bind(this),
          false
        );
      }.bind(this),
      false
    );

    canvas.addEventListener(
      "touchstart",
      function (event) {
        const canvas = document.querySelector("#harmonics-canvas");

        this.isMouseDown = true;

        canvas.addEventListener("touchend", this.onMouseUp.bind(this), false);
        canvas.addEventListener(
          "touchmove",
          this.onMouseMove.bind(this),
          false
        );
      }.bind(this),
      false
    );

    const wave_canvas = document.querySelector("#wave-canvas");

    wave_canvas.addEventListener(
      "mousedown",
      function (event) {
        event.preventDefault();
        const wave_canvas = document.querySelector("#wave-canvas");

        this.isWaveCanvasMouseDown = true;

        wave_canvas.addEventListener(
          "mouseup",
          this.onWaveCanvasMouseUp.bind(this),
          false
        );
        wave_canvas.addEventListener(
          "mousemove",
          this.onWaveCanvasMouseMove.bind(this),
          false
        );
      }.bind(this),
      false
    );

    wave_canvas.addEventListener(
      "touchstart",
      function (event) {
        const wave_canvas = document.querySelector("#wave-canvas");

        this.isWaveCanvasMouseDown = true;

        wave_canvas.addEventListener(
          "touchend",
          this.onWaveCanvasMouseUp.bind(this),
          false
        );
        wave_canvas.addEventListener(
          "touchmove",
          this.onWaveCanvasMouseMove.bind(this),
          false
        );
      }.bind(this),
      false
    );
  }

  onWaveCanvasMouseUp(event) {
    const canvas = document.querySelector("#wave-canvas");
    this.isWaveCanvasMouseDown = false;
    canvas.removeEventListener(
      "mousemove",
      this.onWaveCanvasMouseMove.bind(this),
      false
    );
    canvas.removeEventListener(
      "mouseup",
      this.onWaveCanvasMouseUp.bind(this),
      false
    );
    canvas.removeEventListener(
      "touchmove",
      this.onWaveCanvasMouseMove.bind(this),
      false
    );
    canvas.removeEventListener(
      "touchend",
      this.onWaveCanvasMouseUp.bind(this),
      false
    );
  }

  onWaveCanvasMouseMove(event) {
    event.preventDefault();

    let x, y;
    if (event.touches) {
      //clientX, pageX, screenX
      x = event.touches[0].pageX - event.touches[0].target.offsetLeft;
      y = event.touches[0].pageY - event.touches[0].target.offsetTop;
    } else {
      x = event.offsetX;
      y = event.offsetY;
    }

    if (!this.isWaveCanvasMouseDown) {
      return;
    }

    const canvas = document.querySelector("#wave-canvas");

    x = clamp(x, 0, canvas.width - 2);

    this.waveData[Math.floor((256 * x) / canvas.width)][0] = -(
      (2 * y) / canvas.height -
      1.0
    );
    this.waveData[Math.floor(1 + (256 * x) / canvas.width)][0] = -(
      (2 * y) / canvas.height -
      1.0
    );
    this.RunFFT();
    requestAnimationFrame(this.draw.bind(this));
  }

  onMouseUp(event) {
    const canvas = document.querySelector("#harmonics-canvas");
    this.isMouseDown = false;
    canvas.removeEventListener("mousemove", this.onMouseMove.bind(this), false);
    canvas.removeEventListener("mouseup", this.onMouseUp.bind(this), false);
    canvas.removeEventListener("touchmove", this.onMouseMove.bind(this), false);
    canvas.removeEventListener("touchend", this.onMouseUp.bind(this), false);
  }

  onMouseMove(event) {
    event.preventDefault();

    let x, y;
    if (event.touches) {
      //clientX, pageX, screenX
      x = event.touches[0].pageX - event.touches[0].target.offsetLeft;
      y = event.touches[0].pageY - event.touches[0].target.offsetTop;
    } else {
      x = event.offsetX;
      y = event.offsetY;
    }

    if (!this.isMouseDown) {
      return;
    }
    const canvas = document.querySelector("#harmonics-canvas");
    const barWidth = canvas.width / 32.0;
    let harmonic = Math.floor(x / barWidth + 1);
    if (harmonic > 0) {
      let i = harmonic;
      let cr = this.harmonicsData[i][1] * this.harmonicsData[i][1];
      let ci = this.harmonicsData[i][0] * this.harmonicsData[i][0];
      let magnitude = Math.sqrt(cr + ci);

      let barY =
        (HARMONICS_BAR_HEIGHT - Math.min(y, HARMONICS_BAR_HEIGHT)) /
        HARMONICS_BAR_HEIGHT;

      function getG(hyp, aoriginal, barY, index, secondHalf) {
        let amax = 0;
        if (hyp == 0) {
          // amax = 128 / Math.sqrt(2);
          if (index == 1) amax = 128 * (secondHalf ? 1 : -1);
          else amax = 0;
        } else {
          amax = (aoriginal * 128) / hyp;
        }

        let result = barY * amax - aoriginal;

        return result;
      }

      let hyp = magnitude;

      this.gs[i][0] = getG(hyp, this.harmonicsData[i][0], barY, 0, 0);
      this.gs[i][1] = getG(hyp, this.harmonicsData[i][1], barY, 1, 0);

      cr = this.harmonicsData[256 - i][1] * this.harmonicsData[256 - i][1];
      ci = this.harmonicsData[256 - i][0] * this.harmonicsData[256 - i][0];
      magnitude = Math.sqrt(cr + ci);
      hyp = magnitude;

      this.gs[256 - i][0] = getG(
        hyp,
        this.harmonicsData[256 - i][0],
        barY,
        0,
        1
      );
      this.gs[256 - i][1] = getG(
        hyp,
        this.harmonicsData[256 - i][1],
        barY,
        1,
        1
      );
    }
    this.RunIFFT();
    requestAnimationFrame(this.draw.bind(this));
  }

  drawWave() {
    const canvas = document.querySelector("#wave-canvas");
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "rgb(255,255,255)";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath(); //ADD THIS LINE!<<<<<<<<<<<<<

    const sliceWidth = canvas.width / 256.0;
    let x = 0;
    ctx.fillStyle = "rgb(0, 0, 0)";

    for (let i = 0; i < this.waveData.length; i++) {
      let v = this.waveData[i][0];
      v = clamp(v, -0.9, 0.9);
      const y = -v * (canvas.height / 2) + canvas.height / 2;

      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }

      x += sliceWidth;
    }

    ctx.lineTo(canvas.width, canvas.height / 2);
    ctx.stroke();
  }
  drawHarmonics() {
    const canvas = document.querySelector("#harmonics-canvas");

    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "rgb(255,255,255)";
    ctx.clearRect(0, 0, canvas.width, HARMONICS_CANVAS_HEIGHT);
    ctx.beginPath(); //ADD THIS LINE!<<<<<<<<<<<<<

    const barWidth = canvas.width / 32 - 1;
    let barHeight;
    let x = 0;
    for (let i = 1; i < 32; i++) {
      let imag = this.harmonicsData[i][1] + this.gs[i][1];
      let real = this.harmonicsData[i][0] + this.gs[i][0];
      let cr = imag * imag;
      let ci = real * real;
      let magnitude = Math.sqrt(cr + ci);
      barHeight =
        (HARMONICS_BAR_HEIGHT * magnitude) /
        WAVE_EDITOR_HARMONICS_DIVISOR /
        128;

      ctx.fillStyle = `rgb(${barHeight + 255 - 128}, 50, 50)`;
      ctx.fillRect(x, HARMONICS_BAR_HEIGHT - barHeight, barWidth, barHeight);

      x += barWidth + 1;
    }
  }
  draw() {
    this.drawWave();
    this.drawHarmonics();
  }
  render() {
    return (
      <GenericPage
        headerText="Wave Editor"
        content={
          <>
            <p>
              Click and drag on the top canvas to add harmonics to the wave
              form.
              <br />
              Click and drag on the wave canvas to draw a wave and see the
              harmonic content.
            </p>{" "}
            <div ref={this.listRef}>{/* ...contents... */}</div>
            <canvas
              style={{ border: "1px solid black" }}
              width="512"
              height={HARMONICS_CANVAS_HEIGHT}
              id="harmonics-canvas"
            ></canvas>
            <br />
            <br />
            <br />
            <canvas
              style={{
                border: "1px solid black",
                transform: "scale(2.0,2.0)",
              }}
              width="128"
              height="64"
              id="wave-canvas"
            ></canvas>
          </>
        }
      />
    );
  }
}

function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
}

export class N1Goi extends React.Component {
  constructor(props) {
    super(props);

    this.vocablist = _.clone(n1GoiEnglish);
    this.state = { selected_index: -1 };

    // console.log("running");
    this.generateQuestion();
  }

  generateQuestion() {
    this.randomword = _.sample(this.vocablist);

    this.kana = this.randomword[0];
    this.kanji = this.randomword[1];
    this.english = this.randomword[2];

    this.without = _.without(this.vocablist, this.randomword);

    this.randomcandidates = _.sampleSize(this.without, 3);

    this.randomcandidates.push(this.randomword);

    shuffle(this.randomcandidates);

    this.correctIndex = _.findIndex(this.randomcandidates, (e) => {
      return _.isEqual(this.randomword, e);
    });

    console.log(this.randomcandidates);
    console.log(this.randomword);
    console.log(this.correctIndex);

    this.setState({ selected_index: -1 });
  }

  onClick(i, pass) {
    this.setState({ selected_index: i });
  }

  render() {
    let isSelected = this.state.selected_index >= 0;

    let correct = false;

    if (isSelected)
      correct =
        this.randomcandidates[this.state.selected_index][1] === this.kanji;

    console.log(correct);
    console.log(this.state.selected_index);
    let green = "#ccffcc";
    let red = "#ffcccc";

    // incorrect. selected index is red, correct index is green
    // correct. only selected index is green

    return (
      <GenericPage
        headerText="Japanese Proficiency Test Level 1 Vocabulary Quiz"
        content={
          <>
            <Button
              onClick={() => {
                this.generateQuestion();
              }}
            >
              New word
            </Button>
            <Card color="blue" raised centered>
              <Card.Content textAlign="center">{this.kanji}</Card.Content>
              <Card.Content textAlign="center">{this.kana}</Card.Content>
            </Card>
            <Card.Group itemsPerRow={2}>
              {_.map(this.randomcandidates, (elem, i) => {
                // console.log(i);
                return (
                  <>
                    <Transition
                      visible={true}
                      animation="scale"
                      duration={500}
                      transitionOnMount={true}
                    >
                      <Card
                        style={{
                          backgroundColor: isSelected
                            ? correct
                              ? i == this.state.selected_index
                                ? green
                                : "transparent"
                              : i == this.correctIndex
                              ? green
                              : i == this.state.selected_index
                              ? red
                              : "transparent"
                            : "transparent",
                        }}
                        raised
                        centered
                        onClick={() => {
                          this.onClick(i, elem[1] === this.kanji);
                        }}
                      >
                        <Card.Content textAlign="center">
                          {elem[2]}
                        </Card.Content>
                      </Card>
                    </Transition>
                  </>
                );
              })}
            </Card.Group>
            <br />
            <br />
            <br />
          </>
        }
      />
    );
  }
}

export {
  Homepage,
  BlogPage,
  AUSynthesizerPage,
  EurorackQuantizerPage,
  JuceIWishPage,
  Prophet6SoundLibrarianPage,
  HousePriceEstimatorPage,
  SynthesizerCatalogPage,
  EurorackMosfetPage,
  InverseFFTPage,
  WaveEditorPage,
  GraphicVCOPage,
};
