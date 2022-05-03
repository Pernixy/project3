let searchButton = document.querySelector("#search")
let searchTerm = "";

//Add an event listener to the button that runs the function sendApiRequest when it is clicked
searchButton.addEventListener("click", ()=>{
  console.log("button pressed")
  // sendApiRequest()
  searchTerm = document.getElementById("searchTerm").value;
  search(searchTerm);
})

function search(q) {
    $.ajax({
        url:"https://images-api.nasa.gov/search?q"+q,
        success: function(data) {
            document.querySelector("#content").innerHTML = "<img src="+data.collection.items[0].links[0].href+"/>";
        }
    })
}