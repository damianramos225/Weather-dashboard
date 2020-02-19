$(document).on("click", "#searchCity", function () {

    var city = $(this).attr("id", "searchCity");
    console.log(city);


    // convert to an array


    // push new city into that array

    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=Houston,us&appid=ea1ee909c94c46ccd1e4885c0e999ea2";


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        $("#weatherfore").text(JSON.stringify(response.list[0].weather));
    });




    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=Boston,us&appid=ea1ee909c94c46ccd1e4885c0e999ea2";


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)
        $("#weatherfore").text(JSON.stringify(response.list[0].weather));
    });


})

// retreive infor from local storage
var storedHistory = localStorage.getItem('weatherfore')
// convert data to a obj or array JSON.parse()

// put info from localstorage onto the page

console.log("hello world")




