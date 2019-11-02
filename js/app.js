let submit = function() {
    var name=document.getElementById("name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");
    var display=document.getElementById("display").innerHTML;

    if (name ==" " );  (email== " "); (message == ""); {
     alert("Please enter valid information");
    }
    else {
        display.style.background="green"
        display.style.color="white"
display.innerHTML="Hey " + name + " your message has been received ." + " Thank you!"
    }
};