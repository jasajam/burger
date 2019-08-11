$(function() {
   
    $("#add-burger").on("submit", function(event) {
        // alert("hello");
        
        event.preventDefault();

        var newBurger = {
            name: $("#user-burger").val().trim()
        };

        // console.log("the new burger is", newBurger.burger_name);

        $.ajax("/api/burgers", {
            type: "POST", 
            data: newBurger
        }).then(
            function() {
                console.log("added new burger from user");
                location.reload();
            }
        );
    });

    $(".getting-eaten").click(function(event) {
        // alert("got eaten!");

        var id = $(this).data("id");
        var changeDevoured = $(this).data("changeDevoured");

        var newDevouredState = {
            devoured: changeDevoured
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
            function() {
                console.log("burger now Devoured");
                location.reload();
            }
        )
    });


    // alert("hello");
});