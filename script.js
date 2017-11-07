$(document).ready(function() {
    $("#ask-content").hide();
    $("#give-content").hide();
});

$(".ask-link").click(function() {
    $("#give-content").hide();
    $("#ask-content").show();
    $("#home-content").hide();
})

$(".give-link").click(function() {
    $("#ask-content").hide();
    $("#give-content").show();
    $("#home-content").hide();
})

$(".home-link").click(function() {
    $("#ask-content").hide();
    $("#give-content").hide();
    $("#home-content").show();
})

function addHelp() {
    var firstName = "Susie";
    var lastName = "Riley";
    var distance = "2 miles";
    var description = "I have 2 L of water to spare, and would like to share";

}
