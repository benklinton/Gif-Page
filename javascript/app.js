var topics = ["Danny Davito", "Dule Hill", "Nicolas Cage", "Keanu Reeves", "Ryan Reynolds", "Morgan Freeman", "Jake Gyllenhaal"]
for (var i = 0; i < topics.length; i++) {
    var button = $("<button></button>").text(topics[i]);
    button.addClass("gif-button")
    button.appendTo(".button-dump");

}
$(".gif-button").click(function () {
    $(".gifs-here").empty()
    var person = $(this).text()
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        person + "&api_key=8HJuKUCDAa8EzuT4PXU9e7pIp2gHXhGv";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {
            var results = response.data;
            console.log(results)
            for (var i = 0; i < results.length; i++) {
                gifDiv = $("<div>");
                var rate = results[i].rating;
                var rating = $("<p>").text("Rating: " + rate);
                clebImage = $("<img>").attr("src", results[i].images.fixed_height_still.url);
                clebImage.addClass("gif");
                clebImage.attr("data-still", results[i].images.fixed_height_still.url);
                clebImage.attr("data-animate", results[i].images.fixed_height.url);
                clebImage.attr("data-state", "still")
                gifDiv.prepend(rating);
                gifDiv.append(clebImage);
                $(".gifs-here").prepend(gifDiv);

            }
            $(document).on("click", ".gif", function () {
                var imageState = $(this).attr("data-state");
                if (imageState === "still") {
                  var stateAnimate =  $(this).attr("data-animate")
                  $(this).attr("src",stateAnimate);
                  $(this).attr("data-state", "animate");
                }
                else if (imageState === "animate") {
                    var stateAnimate =  $(this).attr("data-still")
                    $(this).attr("src",stateAnimate);
                    $(this).attr("data-state", "still");
                }
            })
        })
        })