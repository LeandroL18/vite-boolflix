import {reactive} from 'vue'

export const store = reactive({
    cardlistArray: [],
    apiURL: "https://api.themoviedb.org/3/search/movie",
    apiKey: "01f879bab66342440d4b458aafb5825d",
    query: "",
    
});