// exLink();
// function exLink() {
//   const http = document.querySelectorAll("a[href^=http]");
//   http
//     .not('[href*="' + location.hostname + '"]')
//     .getAttribute({ target: "_blank" })
//     .classList("ex_link");
// }

// smoothScroll();
// function smoothScroll() {
//   const headerHeight = document.getElementById("header").offsetHeight;
//   const urlHash = location.hash;

//   document.querySelectorAll('a[href^="#"]').on("click", function () {
//     const href = this.getAttribute("href");
//     const target = document.getElementById(href.replace("#", ""));
//     const position = target.offset().top - headerHeight;
//     window.scrollTo({
//       top: targetPosition,
//       behavior: "smooth",
//     });
//   });

//   document.querySelectorAll('a[href*="#"]').on("click", function () {
//     const href = this.getAttribute("href");
//     url = href.match(/http/)
//       ? location.protocol + "//" + location.hostname + location.pathname
//       : location.pathname;
//     href = href.replace(url, "");
//     const target = document.getElementById(href.replace("#", ""));
//     if (target.size() < 1) return true;
//     const position = target.offset().top - headerHeight;
//     $("html, body").animate({ scrollTop: position }, 1000);
//     window.scrollTo({
//       top: targetPosition,
//       behavior: "smooth",
//     });
//     return false;
//   });

//   if (urlHash) {
//     setTimeout(function () {}, 1000);
//   }
// }

animationScrollTrigger();
function animationScrollTrigger() {
  const tgts = document.querySelectorAll(".bg-slide-trigger,.fadein-trigger");
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-active");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      rootMargin: "10%",
      threshold: 0,
    }
  );
  tgts.forEach((target) => {
    observer.observe(target);
  });
}

// headerFadeIn();
function headerFadeIn() {
  $(window).scroll(function () {
    var tgt = document.getElementById("#header");
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (windowHeight * 0.5 < scroll) {
      tgt.addClass("is-active");
    } else {
      tgt.removeClass("is-active");
    }
  });
}

// tabChange();
function tabChange() {
  $(".tab").click(function () {
    $(".tab.is-active").removeClass("is-active");
    $(this).addClass("is-active");
    $(".panel.is-show").removeClass("is-show");
    const index = $(this).index();
    $(".panel").eq(index).addClass("is-show");
  });
}

// jQuery(document).ready(function ($) {
//   matchHeight();
//   applySpMenu();

//   function matchHeight() {
//     $(".m-example-container .item-box .txt-area").matchHeight();
//   }

//   function applySpMenu() {
//     var $menuBtn = $("#btn-hamburger");
//     var $spMenu = $("#sp-menu");
//     var $spMenuItem = $("#sp-menu .menu-item a");
//     $menuBtn.on("click", function () {
//       $menuBtn.toggleClass("is-active");
//       $spMenu.toggleClass("is-active");
//     });

//     $spMenuItem.on("click", function () {
//       $menuBtn.toggleClass("is-active");
//       $spMenu.toggleClass("is-active");
//     });

//     $(".btn-open").on("click", function () {
//       $(this).toggleClass("is-active");
//       $(this).siblings(".sub-menu").toggleClass("is-active");
//     });
//   }

// });
