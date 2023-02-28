import axios from "axios";
//import { FAKE_POPULARS, FAKE_RECOMMENDATIONS } from "./fake_data";
import { BASE_URL,API_KEY_PARAM } from "../config";

//https://api.themoviedb.org/3/tv/popular?api_key=<<api_key>>&language=en-US&page=1
//8a43eef063fa75d0fd886cd760fc9de5



export class TVShowAPI{

    static async fetchPopulars (){
       const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`);
       console.log(response.data.results);
       return response.data.results;
    //return FAKE_POPULARS;
    }
    
    static async fetchRecommendations (tvShowID){
           const response = await axios.get(`${BASE_URL}tv/${tvShowID}/recommendations${API_KEY_PARAM}`);
           return response.data.results;
        // return FAKE_RECOMMENDATIONS;      
        }
    
        static async fetchByTitle (title){
            const response = await axios.get(`${BASE_URL}search/tv${API_KEY_PARAM}&query=${title}`);
            return response.data.results;
         // return FAKE_RECOMMENDATIONS;      
         }
 

}