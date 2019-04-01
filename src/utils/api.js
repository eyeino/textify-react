import axios from 'axios';

const baseUrl = 'https://textify-node.herokuapp.com/';

function getTrackDetailsAndText(artistQuery, phoneNumber) {
  return axios
    .post(baseUrl, {
      artistQuery,
      phoneNumber
    })
    .then((data) => {
      return data.data;
    });
}

export default getTrackDetailsAndText;