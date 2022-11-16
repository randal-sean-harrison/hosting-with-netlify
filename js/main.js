// Dynamically load the footer -------------------------------------------------
$("#footer").load("footer.html", function() {

  console.log("Footer loaded.");
  // Enable popovers -------------------------------------------------
  $('[data-toggle="popover"]').popover();

  // Enable tooltips
  $('[data-toggle="tooltip"]').tooltip();

});

// In-page sccroll-to links
$("a.scroll-link").click(function(event) {
  event.preventDefault();
  $("html, body").animate({
    scrollTop: $($(this).attr("href")).offset().top - 130
  }, 400);
});

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("topper").style.display = "block";
  } else {
    document.getElementById("topper").style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

$("#topper").on("click", function() {
  $("html").animate({
    scrollTop: 0
  }, 400);
});

// Redirect to URL on data-url attr ---------------------------------
$(document).on("click", "[data-url]", function() {
  var url = $(this).data("url");
  window.open(url);
});


// Append the copy button ----------------------------------------
$(".copy-util").prepend("<i class='bi bi-clipboard-plus'></i>");

new Clipboard('.copy-util', {
  target: function(trigger) {
    return trigger;
  }
});

$(".utility-list-items .copy-util").on("click", function() {

  // set this to a global variable to preserve scope
  var uberThis = $(this);

  // temporarily set the copy icon to checked and green
  $(uberThis).find("i").removeClass("bi-clipboard-plus bright-blue").addClass("bi-clipboard-check text-success").addClass();

  // get the utility clicked on
  var utility = $(uberThis).text();
  // remove the period
  utility = utility.substring(1, utility.length);

  setTimeout(function() {

    $(uberThis).find("i").removeClass("bi-clipboard-check text-success").addClass("bi-clipboard-plus bright-blue");

  }, 1500);

});

$("#update-button").on("click", function(){

  var boxMargin = $("#input-margin").val() + "px";
  var boxPadding = $("#input-padding").val() + "px";
  var boxBorder = $("#input-border").val() + "px";
  var boxBorderType = $("#border-type").val();
  var boxBackgroundType = $("#background-type").val();
  var boxDisplayType = $("#display-type").val();

  $(".box-model-paragraph").css("margin", boxMargin);
  $(".box-model-paragraph").css("padding", boxPadding);
  $(".box-model-paragraph").css("border", boxBorderType + " " + boxBorder + " #007bff");
  $(".box-model-paragraph").css("background", boxBackgroundType);
  $(".box-model-paragraph").css("display", boxDisplayType);

});

$("#reset").on("click", function(){
  location.reload(true);
});
