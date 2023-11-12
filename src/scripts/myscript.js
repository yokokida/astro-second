document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM END");
});

ApplySpMenu();
function ApplySpMenu() {
  var menuBtn = document.getElementById("btn-hamburger");
  var spMenu = document.getElementById("sp-menu");
  menuBtn.addEventListener("click", function () {
    menuBtn.classList.toggle("is-active");
    spMenu.classList.toggle("is-active");
  });
  spMenu.addEventListener("click", function () {
    menuBtn.classList.toggle("is-active");
    spMenu.classList.toggle("is-active");
  });
}

ViewTransitions();
function ViewTransitions() {
  var body = document.querySelector("body");
  body.setAttribute("transition:animate", "slide");
}

exLink();
function exLink() {
  var anchorTag = document.querySelectorAll("a[href^=http]")[0];
  var sameDomainLink = anchorTag.href.includes(location.hostname);
  if (!sameDomainLink) {
    anchorTag.setAttribute("target", "_blank");
  }
}

// smoothScroll();
// function smoothScroll() {
//   var headerHeight = document.getElementById("header").offsetHeight;
//   var anchorTags = document.querySelectorAll('a[href^="#"]');
//   anchorTags.forEach((tag) => {
//     tag.addEventListener("click", function () {
//       // var tagHref = this.getAttribute("href");
//       // var tgt = tagHref ? "html" : "";
//       var position = 0;
//       console.log(position);
//       window.scrollTo({
//         top: position,
//         behavior: "smooth",
//       });
//     });
//   });

// $('a[href^="#"]').click(function () {
//   var href = $(this).attr("href");
//   var target = $(href == "#" || href == "" ? "html" : href);
//   var position = target.offset().top - headerHeight;
//   $("body,html").stop().animate({ scrollTop: position }, 800);
//   return false;
// });

// var urlHash = location.hash;
// document.querySelectorAll('a[href*="#"]').on("click", function () {
//   var href = this.getAttribute("href");
//   url = href.match(/http/)
//     ? location.protocol + "//" + location.hostname + location.pathname
//     : location.pathname;
//   href = href.replace(url, "");
//   var target = document.getElementById(href.replace("#", ""));
//   if (target.size() < 1) return true;
//   var position = target.offset().top - headerHeight;
//   $("html, body").animate({ scrollTop: position }, 1000);
//   window.scrollTo({
//     top: targetPosition,
//     behavior: "smooth",
//   });
//   return false;
// });
// }

animationScrollTrigger();
function animationScrollTrigger() {
  var tgts = document.querySelectorAll(".bg-slide-trigger,.fadein-trigger");
  var observer = new IntersectionObserver(
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
    var index = $(this).index();
    $(".panel").eq(index).addClass("is-show");
  });
}

// jQuery(document).ready(function ($) {
//   matchHeight();

//   function matchHeight() {
//     $(".m-example-container .item-box .txt-area").matchHeight();
//   }

// });
