$(document).ready(function () {

  /*WOW JS PLUGIN*/
  new WOW().init();

  /*ISOTOP PLUGIN*/
  var $grid = $(".grid").isotope({
    // options
    itemSelector: ".grid_select",
  });

  $(".isotop_button").on("click", "a", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({
      filter: filterValue,
    });
  });

  $(".isotop_button a").on("click", function (event) {
    $(this).siblings(".active").removeClass("active");
    $(this).addClass("active");
  });

  /*FIXED NAVBAR*/
  $(window).scroll(function () {
    var navFixed = $(window).scrollTop();
    if (navFixed > 200) {
      $(".main_nav")
        .removeClass("py-4")
        .addClass("fixed-top bg-white nav-border animated fadeInDown faster");
      $(".navbar-brand img").removeClass("img-fluid").addClass("w-75");
      $(".banner_sec").addClass("mt-105");
    } else {
      $(".main_nav")
        .removeClass("fixed-top bg-white nav-border animated fadeInDown faster")
        .addClass("py-4");
      $(".navbar-brand img").removeClass("w-75").addClass("img-fluid");
      $(".banner_sec").removeClass("mt-105");
    }
  });

  /*OWL CAROUSEL*/
  $(".all_blog").owlCarousel({
    loop: true,
    margin: 10,
    autoplay: true,
    smartSpeed: 1000,
    autoplayHoverPause: true,
    nav: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });

  /*GO TO TOP*/
  $(".go_top").click(function () {
    $("html,body").animate(
      {
        scrollTop: 0,
      },
      1500
    );
  });
  
  /*ONE PAGE NAV*/
  $("#main_nav").onePageNav({
    currentClass: "active",
    changeHash: false,
    scrollSpeed: 750,
    scrollThreshold: 0.5,
    filter: "",
    easing: "swing",
  });

  /*SMOOTH SCROLL*/
  $('a.section-scroll[href*="#"]:not([href="#"])').on("click", function (
    event
  ) {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") ||
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");

      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html,body").animate(
          {
            scrollTop: target.offset().top,
          },
          750
        );
        return false;
      }
    }
  });
});
