let searchButton = document.querySelector("#search")
let searchTerm = "";

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", ()=>{
  console.log("button pressed")
  // sendApiRequest()
  searchTerm = document.getElementById("searchTerm").value;
  // search();
})


//An asynchronous function to fetch data from the API.
async function sendApiRequest(){
    let API_KEY = "qcG7XWAb04f9S5OfCHU9XnAIqbYWxkVU8CN84nDZ";
    let response = await fetch(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=${API_KEY}`);
    console.log(response)
    let data = await response.json();
    console.log(data);
    useApiData(data);
}


//function that does something with the data received from the API. The name of the function should be customized to whatever you are doing with the data
function useApiData(data){
    document.querySelector("#content").innerHTML += data.explanation;
    document.querySelector("#content").innerHTML += `<img src="${data.photos[2].img_src}">`;
}

async function search() {
  let API_KEY = "qcG7XWAb04f9S5OfCHU9XnAIqbYWxkVU8CN84nDZ";
  let response = await fetch(`https://api.nasa.gov/search?q=${searchTerm}`);
  console.log(response)
    let data = await response.json();
    console.log(data);
}