var topics = ["Danny Davito", "Dule Hill", "Bill Murray", "Nicolas Cage", "Keanu Reeves"]
for (var i = 0; i < topics.length; i++) {
    var button = $("<button></button>").text(topics[i]);
    button.addClass("gif-button")
    button.appendTo(".button-dump");

}
$(".gif-button").click(function() {
var person = $(this).text()
var queryURL =  "https://api.giphy.com/v1/gifs/search?q=" +
person + "&api_key=8HJuKUCDAa8EzuT4PXU9e7pIp2gHXhGv";

$.ajax({
    url: queryURL,
    method: "GET"
})
.then(function(response){
    var results = response.data;
    for (var i = 0; i <results.length; i++) {
        gifDiv = $("<div>");
        var r = results[i].rating;
       var rating = $("<p>").text("Rating: " + r);
       clebImage = $("<img>").attr("src", results[i].images.fixed_height_still.url);
       gifDiv.prepend(rating);
       gifDiv.append(clebImage);
       $(".gifs-here").prepend(gifDiv);

    }
})
})