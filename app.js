
document.addEventListener("DOMContentLoaded", function(){
    getJobs()
    const dataShow = document.getElementById("Data")

})

async function getJobs(){
    response = await fetch("http://127.0.0.1:5000/output")
    data = await response.json()

    console.log(data)   
}