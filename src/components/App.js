import React from 'react';
import MusicInfo from './musicInfo';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const trackDetails = {
  artistName: 'Toro Y Moi',
  albumName: 'Outer Peace',
  trackName: 'Ordinary Pleasure',
  albumImgUrl: 'https://i.scdn.co/image/bc37539ee4ad2d9bc3fe51d96cbf443f0d44aece',
  trackLink: 'https://open.spotify.com/track/31F0KxmTD4rz3o0tJht5RL'
}

function App() {
  return (
    <div>
      <Container style={{ margin: 40 }}>
        <Row>
          <h1>Textify</h1>
        </Row>
        <Row>
          <h2>Get an artists top song sent to your phone!</h2>
        </Row>
        <Row>
          <SearchForm />
        </Row>
        <Row>
          <MusicInfo trackDetails={trackDetails} />
        </Row>
      </Container>
    </div>
  );
}

function SearchForm() {
  return (
    <Form>
      <Form.Group controlId="formArtistQuery">
        <Form.Label>Search artist</Form.Label>
        <Form.Control type="search" placeholder="Enter artist name" />
      </Form.Group>
      <Form.Group controlId="formPhoneNumber">
        <Form.Label>Phone number</Form.Label>
        <Form.Control type="tel" placeholder="Enter phone number" />
        <Form.Text className="text-muted">
          Standard SMS text rates may apply.
        </Form.Text>
      </Form.Group>
      <Button variant="primary" type="button">
        Submit
      </Button>
    </Form>
  );
}

export default App;
