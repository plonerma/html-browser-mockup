$(document).ready(function() {
  console.log("Starting...");
  setInterval(function() {
    var w = 300 + Math.random() * 600;
    var h = 100 + Math.random() * 500;

    $(".browser-content").css({
      "width": w,
      "height": h
    });
  }, 3000)
});
