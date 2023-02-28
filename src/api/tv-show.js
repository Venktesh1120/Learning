import axios from "axios";

//https://api.themoviedb.org/3/tv/popular?api_key=<<api_key>>&language=en-US&page=1
//8a43eef063fa75d0fd886cd760fc9de5
const BASE_URL = "https://api.themoviedb.org/3/"
const API_KEY_PARAM = "?api_key=8a43eef063fa75d0fd886cd760fc9de5"


export class TVShowAPI{
    static async fetchPopulars (){
       const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
       console.log(response.data.results);
       return response.data.results;

    }

}