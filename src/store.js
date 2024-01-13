import {reactive} from 'vue'

export const store = reactive({
    films: [],
    serieTV: [],
    apiURLfilm: "https://api.themoviedb.org/3/search/movie",
    apiURLserie: "https://api.themoviedb.org/3/search/tv",
    apiKey: "01f879bab66342440d4b458aafb5825d",
    query: "",
});