import React from "react";
import {
  Container,
  Divider,
  Dropdown,
  Grid,
  Header,
  Image,
  List,
  Menu,
  Segment,
  Icon,
  Button,
  Item,
} from "semantic-ui-react";
import eugene from "./eugene.jpg";
import "semantic-ui-css/semantic.min.css";

import hikari from "./hikari.jpg";
import instrument from "./instrument.jpg";
import qtz1side from "./qtz-1-side.jpg";
import qtz1FrontPanel from "./qtz-1-front-panel.jpg";
import qtz1knobs from "./qtz-1-knobs.jpg";
import qtz1naked from "./qtz-1-naked.jpg";
import prophet6soundLibrarian from "./prophet6soundlibrarian.jpg";
import housePriceEstimator from "./house-price-1.jpg";
import synthCatalog from "./synth-3.jpg";
import kyotoTower from "./kyoto-tower.jpg";
import tokyoStation from "./tokyo-station.jpg";
import iwish from "./iwish-clone.jpg";

const Nav = () => (
  <>
    <Menu fixed="top" inverted>
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

        <Dropdown item simple text="Projects">
          <Dropdown.Menu>
            <Dropdown.Header>Sound Programming</Dropdown.Header>
            <Dropdown.Item>
              <i className="dropdown icon" />
              <span className="text">VST / AU</span>
              <Dropdown.Menu>
                <Dropdown.Item href="/au-synthesizer">
                  Synthesizer
                </Dropdown.Item>
                <Dropdown.Item href="/juce-iwish">I Wish</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
            <Dropdown.Item>
              <i className="dropdown icon" />
              <span className="text">Eurorack</span>
              <Dropdown.Menu>
                <Dropdown.Item href="/eurack-quantizer">QTZ-1</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>{" "}
            <Dropdown.Item href="/prophet-6-sound-librarian">
              Prophet 6 Sound Librarian
            </Dropdown.Item>
            <Dropdown.Divider />
            <Dropdown.Header>Course Projects</Dropdown.Header>
            <Dropdown.Item>
              <i className="dropdown icon" />
              <span className="text">Android</span>
              <Dropdown.Menu>
                <Dropdown.Item href="/house-price-estimator">
                  House Price Estimator
                </Dropdown.Item>
                <Dropdown.Item href="/synthesizer-catalog">
                  Synthesizer Catalog
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

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
      </Container>

      <Menu.Menu position="right">
        <Dropdown item text="Language">
          <Dropdown.Menu>
            <Dropdown.Item>English</Dropdown.Item>
            <Dropdown.Item>日本語</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Menu>
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
      <Grid divided inverted stackable>
        <Grid.Column width={3}>
          <Header inverted as="h4" content="Group 1" />
          <List link inverted>
            <List.Item as="a">Link One</List.Item>
            <List.Item as="a">Link Two</List.Item>
            <List.Item as="a">Link Three</List.Item>
            <List.Item as="a">Link Four</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={3}>
          <Header inverted as="h4" content="Group 2" />
          <List link inverted>
            <List.Item as="a">Link One</List.Item>
            <List.Item as="a">Link Two</List.Item>
            <List.Item as="a">Link Three</List.Item>
            <List.Item as="a">Link Four</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={3}>
          <Header inverted as="h4" content="Group 3" />
          <List link inverted>
            <List.Item as="a">Link One</List.Item>
            <List.Item as="a">Link Two</List.Item>
            <List.Item as="a">Link Three</List.Item>
            <List.Item as="a">Link Four</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={7}>
          <Header inverted as="h4" content="Footer Header" />
          <p>
            Extra space for a call to action inside the footer that could help
            re-engage users.
          </p>
        </Grid.Column>
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
          <Item.Image size="small" src={eugene} />
          <Item.Content verticalAlign="middle">
            <Item.Header as="a">Eugene Clewlow</Item.Header>
            <Item.Description>
              <p>eugene.clewlow@sjsu.edu</p>
              <p>Copyright &copy; 2023 Eugene Clewlow.</p>
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
        {" "}
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
          {" "}
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
          backend machine learning model.
        </p>
        <p>
          <Image size="large" centered src={housePriceEstimator} />
        </p>
        <p>
          The backend consisted of a Decision Tree algorithm trained on a house
          price dataset. I delivered the Android application, writing all of the
          code using Model-View-Controller architecture. I incorporated the
          Google Maps SDK for Map navitation, and the Google Maps API for
          embedding a map image.
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

export {
  Homepage,
  BlogPage,
  AUSynthesizerPage,
  EurorackQuantizerPage,
  JuceIWishPage,
  Prophet6SoundLibrarianPage,
  HousePriceEstimatorPage,
  SynthesizerCatalogPage,
};
