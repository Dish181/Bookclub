import axios from "axios";

const googleBooksApi = axios.create({
  baseURL: "https://www.googleapis.com/books",
  headers: {
    Authorization: "key=AIzaSyAAWQal4AL2qIpxzQik2hyOWGIp_I_yi6o",
  },
});

export const searchByTitleOrAuthor = (
  searchTerm: string,
  setStateFn: Function
) => {
  return googleBooksApi
    .get("/v1/volumes", {
      params: {
        q: searchTerm,
      },
    })
    .then((results) => {
      const books = results.data.items;
      return books.map((book: any) => {
        return {
          title: book.volumeInfo.title ? book.volumeInfo.title : undefined,
          authors: book.volumeInfo.authors
            ? book.volumeInfo.authors.join(", ")
            : undefined,
          description: book.volumeInfo.description
            ? book.volumeInfo.description
            : undefined,
          coverImg: book.volumeInfo.imageLinks
            ? book.volumeInfo.imageLinks.smallThumbnail
            : "https://bookstoreromanceday.org/wp-content/uploads/2020/08/book-cover-placeholder.png",
          averageRating: book.volumeInfo.averageRating
            ? book.volumeInfo.averageRating
            : undefined,
        };
      });
    })
    .then((resultsArray) => {
      setStateFn(resultsArray);
    })
    .catch((err) => {
      console.log(err);
    });
};