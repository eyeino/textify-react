import React, { Component } from 'react';
import MusicInfo from './musicInfo';
import getTrackDetailsAndText from '../utils/api';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

import './app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      artistQuery: '',
      phoneNumber: '',
      trackDetails: null,
      isLoading: false
    }

    this.handleArtistQueryChange = this.handleArtistQueryChange.bind(this);
    this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.submitted) {
      this.refs.artistQuery.value = '';

      this.setState({
        submitted: false,
        trackDetails: null,
        artistQuery: ''
      })
    } else {
      this.setState({ isLoading: true }, async () => {
        const trackDetails = await getTrackDetailsAndText(this.state.artistQuery, this.state.phoneNumber)

        this.setState({
          trackDetails,
          isLoading: false,
          submitted: true
        })
      })
    }
  }

  handleArtistQueryChange() {
    const value = this.refs.artistQuery.value;
    this.setState({
      artistQuery: value,
      submitted: false
    });
  }

  handlePhoneNumberChange() {
    const value = this.refs.phoneNumber.value;
    this.setState({
      phoneNumber: value,
      submitted: false
    })
  }

  render() {
    return (
      <div className='app'>
        <Container style={{ margin: 40 }}>
          <Row>
            <h1>T E X T I F Y</h1>
          </Row>
          <Row>
            <h4>Get an artists top song sent to your phone!</h4>
          </Row>
          <Row>
            <Form>
              <Form.Group controlId="formArtistQuery">
                <Form.Label>Search artist</Form.Label>
                <Form.Control
                  type="search"
                  ref="artistQuery"
                  placeholder="Enter artist name"
                  onChange={this.handleArtistQueryChange} />
              </Form.Group>
              <Form.Group controlId="formPhoneNumber">
                <Form.Label>Phone number</Form.Label>
                <Form.Control
                  type="tel"
                  ref="phoneNumber"
                  placeholder="Enter phone number"
                  onChange={this.handlePhoneNumberChange} />
                <Form.Text className="text-muted">
                  Standard SMS text rates may apply.
                </Form.Text>
              </Form.Group>
              <Button
                variant={!this.state.submitted ? 'primary' : 'outline-success'}
                type="submit"
                onClick={this.handleSubmit}
                disabled={this.state.isLoading}
              >
                {!this.state.submitted ? 'Submit' : 'Success! Click to clear.'}
              </Button>
            </Form>
          </Row>
          <Row>
            {this.state.trackDetails
              && <MusicInfo trackDetails={this.state.trackDetails} />}
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
