function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var key = "http://eepurl.com/gIAK4r";
  if (name == "") {
    alert("please fill in your name");
    return false;
  } else if (email == "") {
    alert("Please fill in your name and email");
    return false;
  } else {
    alert(
      name +
        ", we have received your message. Thank you for reaching out to us."
    );
  }
  event.preventDefault();
}
$(document).ready(function() {
  $("#designImage").click(function() {
    $("#design").toggle("2000");
  });
    $("#developImage").click(function() {
  $("#development").toggle("2000");
    });
        $("#productImage").click(function() {
       $("#product").toggle("2000");
    
  });
  $("#project1").hover(
    function() {
      $("#text1").show("2000");
    },
    function() {
      $("#text1").hide("2000");
    }
  );
  $("#project2").hover(
    function() {
      $("#text2").show("2000");
    },
    function() {
      $("#text2").hide("2000");
    }
  );
  $("#project3").hover(
    function() {
      $("#text3").show("2000");
    },
    function() {
      $("#text3").hide("2000");
    }
  );
  $("#project4").hover(
    function() {
      $("#text4").show("2000");
    },
    function() {
      $("#text4").hide("2000");
    }
  );
  $("#project5").hover(
    function() {
      $("#text5").show("2000");
    },
    function() {
      $("#text5").hide("2000");
    }
  );
  $("#project6").hover(
    function() {
      $("#text6").show("2000");
    },
    function() {
      $("#text6").hide("2000");
    }
  );
  $("#project7").hover(
    function() {
      $("#text7").show("2000");
    },
    function() {
      $("#text7").hide("2000");
    }
  );
  $("#project8").hover(
    function() {
      $("#text8").show("2000");
    },
    function() {
      $("#text8").hide("2000");
    }
  );
});
