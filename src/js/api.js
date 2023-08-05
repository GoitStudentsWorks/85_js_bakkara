import axios from "axios";
const BASE_URL = 'https://books-backend.p.goit.global/books/';
const TOP_BOOKS_URL = `top-books`

async function fetchTopBooks()  {
    const config = {
    method: 'get',
    baseURL: BASE_URL+TOP_BOOKS_URL,
    params: {
       
    }
}
    try {
    const response = await axios.get('', config);
        // console.log(response);
        return response.data;
  } catch (error) {
    console.error(error);
  }
}


export{ fetchTopBooks}