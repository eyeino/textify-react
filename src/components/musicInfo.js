import React from 'react';
import PropTypes from 'prop-types';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

function MusicInfo(props) {
  const { artistName, trackName,
    trackLink, albumName, albumImgUrl } = props.trackDetails;

  return (
    <Container style={{ 'marginTop': 40 }}>
      <Row>
        <Col xs={6} md={4}>
          <a href={trackLink} target="_blank" rel="noopener noreferrer">
            <Image src={albumImgUrl} thumbnail fluid />
          </a>
        </Col>
        <Col>
          <h2>{trackName}</h2>
          <h4>{artistName}</h4>
          <h4>{albumName}</h4>
        </Col>
      </Row>
    </Container>
  )
}
  
MusicInfo.propTypes = {
  trackDetails: PropTypes.shape({
    artistName: PropTypes.string.isRequired,
    trackName: PropTypes.string.isRequired,
    albumName: PropTypes.string.isRequired,
    albumImgUrl: PropTypes.string.isRequired,
    trackLink: PropTypes.string.isRequired,
  })
}

export default MusicInfo;