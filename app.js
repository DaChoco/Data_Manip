
document.addEventListener("DOMContentLoaded", function(){

    const searchbar = document.getElementById("search")
    const dataShow = document.getElementById("Data")
    let myArrayShowTitles = []
    let myArrayMovieTitles = []

    getTVShows(myArrayShowTitles)
    getMovies(myArrayMovieTitles)

    searchbar.addEventListener("input", function(e){
        const searchTerm = e.target.value.toLowerCase()
        const filteredResults = searchTerm.filter()
    })
    

})
async function getMovies(array){
    response = await fetch("http://127.0.0.1:5000/movies")
    data = await response.json()

    for (i=0; i<data.length;i++){
        array[i] = data[i].title;
    }
    console.log("These are the movies!")
    console.log(array)
}
async function getTVShows(array){
    response = await fetch("http://127.0.0.1:5000/shows")
    data = await response.json()

    for (i = 0; i<data.length; i++){
         array[i] = data[i].title
    }
    console.log("These are the shows!")
    console.log(array)   
}