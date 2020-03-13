$(document).ready(function() {
    var meganImage = $("#megan-teal");
    //importing the audio that's in the assets folder
    var meganAudio = document.createElement("audio");
    meganAudio.setAttribute("src", "assets/MeganTheeStallion/Megan-Thee-Stallion&Normani-Diamonds.mp3");

    //audio play and pause buttons
    $(".play-button").click(function() {
        meganAudio.play();
        console.log("play button was pressed");
    });
    $(".pause-button").click(function() {
        meganAudio.pause();
        console.log("pause button was pressed");
    })

    //Growth, Shrink and Normal buttons
    $(".growth").click(function() {
        meganImage.animate({ height: "60vh" });
        console.log("growth button was pressed");
    });
    $(".shrink").click(function() {
        meganImage.animate({ height: "10vh" });
        console.log("shrink button was pressed");
    });
    $(".normal").click(function() {
        meganImage.animate({ height: "32vh" });
        console.log("normal button was pressed");
    });
    //invisible and visible buttons
    $(".nonvisible").click(function() {
        meganImage.animate({ opacity: "0.1" });
        console.log("invisible button was pressed");
    })
    $(".visible").click(function() {
        meganImage.animate({ opacity: "1" });
        console.log("visible button was pressed");
    })
    // alert("Megan game has started");
    // console.log("page has loaded.");
});