export const searchGoogleBooks = (query) => {
  return fetch(`https://api.yelp.com/v3/businesses/search?term=${query}&latitude=37.786882&longitude=-122.399972`, {
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_API_KEYYELP}`,
      withCredentials: true,
    }
  });
};




// export const searchGoogleBooks = (query) => {
//   return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
// };