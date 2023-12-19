Fancybox.bind("[data-fancybox]", {
  // Your custom options
});
// $(document).ready(function () {
//   $(".phoneInput").inputmask({
//     mask: "(999) 999-9999",
//     showMaskOnHover: true,
//   });
// });

$(".header-burger").click(function (event) {
  $(".header-nav").toggleClass("active");
});
$(".close-menu").click(function (event) {
  $(".header-nav").toggleClass("active");
});
$(".beforeAfter  .slide").twentytwenty();
$(".faq-item").click(function (event) {
  $(this).toggleClass("open");
});
$(window).scroll(function () {
  let header = $(".header");
  let scrollPosition = $(window).scrollTop();
  if (scrollPosition > 100) {
    header.addClass("header-scroll");
  } else {
    header.removeClass("header-scroll");
  }
});

$(".faq-item").click(function (event) {
  let parentListItem = $(this).closest("li");
  let isPlusOpen = parentListItem.find(".plus").hasClass("open");
  $(".plus").removeClass("open");
  $(".answer").removeClass("open");
  if (isPlusOpen) {
    parentListItem.find(".answer").removeClass("open");
  } else {
    parentListItem.find(".answer").addClass("open");
    parentListItem.find(".plus").addClass("open");
  }
});

//-------------------------_SLIDERS_---------------------------//
$(".hero-slider").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  fade: true,
  cssEase: "ease-in-out",
  pauseOnHover: false,
});

$(window).on("load resize", function () {
  if ($(window).width() < 700) {
    $(".services-list").slick({
      slidesToShow: 1,
      prevArrow: $(".services").find(".prev"),
      nextArrow: $(".services").find(".next"),
    });
  } else {
  }
});
$(".services-list.page").slick({
  slidesToShow: 3,
  prevArrow: $(".services.page").find(".prev"),
  nextArrow: $(".services.page").find(".next"),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".beforeAfter-slider").slick({
  slidesToShow: 1,
  draggable: false,
  swipeToSlide: false,
  swipe: false,
  prevArrow: $(".beforeAfter").find(".prev"),
  nextArrow: $(".beforeAfter").find(".next"),
});
$(".brands-slider").slick({
  slidesToShow: 6,
  autoplay: true,
  autoplaySpeed: 1000,
  prevArrow: $(".sources").find(".prev"),
  nextArrow: $(".sources").find(".next"),
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".gallery-list").slick({
  slidesToShow: 2,
  autoplay: true,
  autoplaySpeed: 3000,
  prevArrow: $(".gallery").find(".prev"),
  nextArrow: $(".gallery").find(".next"),
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(window).on("load resize", function () {
  if ($(window).width() < 1024) {
    $(".count-list").slick({
      rows: 3,
      slidesToShow: 2,
      slidesToScroll: 1,
      prevArrow: $(".windowCount").find(".prev"),
      nextArrow: $(".windowCount").find(".next"),
      responsive: [
        {
          breakpoint: 768,
          settings: {
            rows: 3,
          },
        },
        {
          breakpoint: 744,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });
  }
});

$(document).ready(function () {
  var $phoneInput = $("#tel");
  var $myForm = $("#myForm");

  $phoneInput.on("input", function (e) {
    var x = e.target.value
      .replace(/\D/g, "")
      .match(/(\d{0,3})(\d{0,3})(\d{0,4})/);
    e.target.value = !x[2]
      ? x[1]
      : "(" + x[1] + ") " + x[2] + (x[3] ? "-" + x[3] : "");
  });
});

const validation = new JustValidate("#main-form");

validation
  .addField("#name", [
    {
      rule: "required",
      errorMessage: "Name is required",
    },
    {
      rule: "minLength",
      value: 2,
    },
  ])
  .addField("#tel", [
    {
      rule: "required",
      errorMessage: "Phone number is required",
    },
    {
      rule: "minLength",
      value: 14,
      errorMessage: "The field must contain a minimum of 10 characters",
    },
  ])
  .addField("#email", [
    {
      rule: "required",
      errorMessage: "Email is required",
    },
    {
      rule: "email",
      errorMessage: "Email is invalid!",
    },
  ]);
