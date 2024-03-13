import axios from 'axios';


export const getPosts = () => {

  // Making a GET request
  axios.get('https://api.nasa.gov/neo/rest/v1/feed?start_date=2015-09-07&end_date=2015-09-08&api_key=DEMO_KEY')
    .then(response => {
      // Handle the successful response
      console.log(response.data);

      return response.data;
    })
    .catch(error => {
      // Handle errors
      console.error('An error occurred:', error);
    });
}