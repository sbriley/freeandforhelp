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

$("#submit-give").click(function() {
    addHelp();
})

function addHelp() {
    var firstName = $("#give-first-name").val();
    var lastName = $("#give-last-name").val();
    var category = "";
    var description = $("#give-description").val();
    if($("#give-cat-labor").is(':checked')) {
        category = "Labor";
    } else if($("#give-cat-food-water").is(':checked')) {
        category = "Food/Water";
    } else if($("#give-cat-transport").is(':checked')) {
        category = "Transportation";
    } else if($("#give-cat-other").is(':checked')) {
        category = "Other";
    } else if($("#give-cat-shelter").is(':checked')) {
        category = "Shelter";
    }

    var newEntry = "";
    newEntry += "<li> <h4> <b class=\"name\">" + firstName + "</b>";
    newEntry += " offers <b class=\"category\">" + category + "</b></h4>";
    newEntry += "<p class=\"description\">" + description + "</p></li>";

    $("#give-list").prepend(newEntry);

}
