import axios from "axios";

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKey = "&key=AIzaSyBqLuIYKx1s8LyeQL4GPYoRRh3Tkrtpamo";

export default {
  search: function(query) {
    return axios.get(BASEURL + query + APIKey);
  }
};
