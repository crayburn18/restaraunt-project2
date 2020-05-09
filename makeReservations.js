$(document).ready(function() {
    $("#submit1").on("click", function(){
        event.preventDefault();

        let newCustomer = {
            name: $("#inputName").val(),
            phone: $("#inputPhone").val(),
            email: $("#inputEmail").val(),
            id: $("#inputID").val()
        };

        $.post("/api/tables", newCustomer)
        .then(function(data){
            alert("Reservation Made");
        });

        console.log("working")
    })
   
});