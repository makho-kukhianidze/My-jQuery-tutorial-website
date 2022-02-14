$(document).ready(function () {
  $("#btnOne").click(function () {
    $(".paraOne").hide();
  });
});

$(document).ready(function () {
  $(".paraTwo").click(function () {
    $(this).hide();
  });
});

$(document).ready(function () {
  $(".paraThree").on({
    mouseenter: function () {
      $(this).css("background-color", "lightgray");
    },
    mouseleave: function () {
      $(this).css("background-color", "lightblue");
    },
    click: function () {
      $(this).css("background-color", "yellow");
    }
  });
});

$(document).ready(function () {
  $("#btnSix").click(function () {
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
  });
});

$(document).ready(function () {
  $("#btnSeven").click(function () {
    $("#div4").fadeTo("slow", 0.4);
    $("#div5").fadeTo("slow", 0.7);
    $("#div6").fadeTo("slow", 0.15);
  });
});

$(document).ready(function () {
  $("#btnAnimation").click(function () {
    $(".animation").animate({ left: '250px' });
  });
});

$(document).ready(function () {
  $("#btnAnime").click(function () {
    $("#anime").animate({
      height: 'toggle',
      width: 'toggle'
    });
  });
});