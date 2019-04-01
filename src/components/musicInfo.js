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
        <Col xs={4} md={2} lg={2}>
          <a href={trackLink} target="_blank" rel="noopener noreferrer">
            <Image src={albumImgUrl} thumbnail fluid />
          </a>
        </Col>
        <Col xs={6} md={4} lg={4}>
          <h4>{trackName}</h4>
          <h5>{artistName}</h5>
          <h5>{albumName}</h5>
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