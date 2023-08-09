$(document).ready(function() {
    $("#menu1Button").click(function () {
      loadDoc("menu1");
    });
    $("#menu2Button").click(function () {
      loadDoc("menu2");
    });
  });

  function loadDoc(endpoint) {
    $.ajax({
      url: "/" + endpoint,
      type: "GET",
      dataType: "html",
      success: function(data) {
        $(".content").html(data);
      },
      error: function(error) {
        console.error("Error fetching menu content:", error);
      }
    });
  }