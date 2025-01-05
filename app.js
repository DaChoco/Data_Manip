const searchbar = document.getElementById("search")
const dataShow = document.getElementById("Data")
const resultbox = document.getElementById("searchAuto")

document.addEventListener("DOMContentLoaded", function(){

    
    let myArrayShowTitles = []
    let myArrayMovieTitles = []

    getTVShows(myArrayShowTitles)
    getMovies(myArrayMovieTitles)

    searchbar.addEventListener("input", function(e){
        let result = []
        const searchTerm = e.target.value.toLowerCase()
        if (searchTerm.length){
            result = myArrayShowTitles.filter((keyword) => {return keyword.toLowerCase().includes(searchTerm.toLowerCase())})
            console.log(result)
            displayAutoSearch(result, resultbox)

        }
        else{
            resultbox.innerHTML = "";
            resultbox.style.visibility = "hidden";
        }

    })

})
function displayAutoSearch(result, ulbox){
    const content = result.map((list)=>{
        return "<li onclick=SelectInput(this)>" + list + "</li>"
    })
    resultbox.style.visibility = "visible"
    ulbox.innerHTML = "<ul>" + content.join("") + "</ul>"

    if (!result.length){
        resultbox.style.visibility = "hidden"

    }
}

function SelectInput(list){
    searchbar.value = list.innerHTML
    resultbox.innerHTML = "";
    resultbox.style.visibility = "hidden";

}
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