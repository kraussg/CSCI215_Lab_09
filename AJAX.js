//AJAX CALL CODE using jquery

$("#submitButton").click(function(){
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value;

    $.post("/myPost",
        {
            firstname: firstName,
            lastname: lastName
        },
        function(data, status){
            alert("Data: " + data.testdata + "\nStatus: " + status);
        });
});