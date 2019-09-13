// JavaScript source code
$(function () {

    $("#booking").submit(function (event) {

        let seats = $("#seats").val();
        let name = $('#name').val();
        let street = $("#street").val();
        let state = $('#state').val();
        let zip = $("#zip").val();
        let extra = $('input[name = "extra"]').val();
        let taxi = $('input[name = "taxi"]').val();

        event.preventDefault();
        $('#errors').empty();
        let submitCheck = true;

        if (seats > 200) {
            $('#errors').append($("<p>", { "text": "You cannot book more than 200 seats" }));
            submitCheck = false;
        }
        else if (seats <= 0) {
            $('#errors').append($("<p>", { "text": "Number of seats cannot be less than one" }));
            submitCheck = false;
        }

        if (street === "" || street === " ") {
            $('#errors').append($("<p>", { "text": "You must Enter a street" }));
            submitCheck = false;
        }

        console.log(taxi);
        if (taxi === undefined) {
            $('#errors').append($("<p>", { "text": "You must select a taxi type" }));
            submitCheck = false;
        }

        if (extra === undefined) {
            $('#errors').append($("<p>", { "text": "You must check one extra" }));
            submitCheck = false;
        }


        if (state === "Select One") {
            $('#errors').append($("<p>", { "text": "You must select a state" }));
            submitCheck = false;
        }

        if (name === "") {
            $('#errors').append($("<p>", { "text": "Name cannot be an empty String" }));
            submitCheck = false;
        }

        if (zip === "") {
            $('#errors').append($("<p>", { "text": "Zip cannot be an empty String" }));
            submitCheck = false;
        }
        console.log(submitCheck);
        if (submitCheck) {
            this.submit();
        }
    });
});
