(function($) {

 /**
* Copyright 2012, Digital Fusion
* Licensed under the MIT license.
* http://teamdf.com/jquery-plugins/license/
*
* @author Sam Sehnert
* @desc A small plugin that checks whether elements are within
*     the user visible viewport of a web browser.
*     only accounts for vertical position, not horizontal.
*/

  $.fn.visible = function(partial) {
    let $t = $(this),
      $w = $(window),
      viewTop = $w.scrollTop(),
      viewBottom = viewTop + $w.height(),
      _top = $t.offset().top,
      _bottom = _top + $t.height(),
      compareTop = partial === true ? _bottom : _top,
      compareBottom = partial === true ? _top : _bottom;

    return compareBottom <= viewBottom && compareTop >= viewTop;
  };
})(jQuery);

/** End of Digital Fusion plugin **/


/* Animates selected elements into the page when scrolling to them */

$(".animateIn").each(function(i, el) {
  /* if the element is visible on page load */
  if ($(el).visible(true)) {
    $(el).removeClass("animateIn");
    $(el).addClass("already-visible");
  } else {
    $(window).scroll(function(event) {
      $(".animateIn").each(function(i, el) {
        if ($(el).visible(true)) {
          $(el).addClass("slide-in");
        }
      });
    });
  }
});

$(".fadeAni").each(function(i, el) {
  /* if the element is visible on page load */
  if ($(el).visible(true)) {
    $(el).removeClass("fadeAni");
    $(el).addClass("already-visible");
  } else {
    $(window).scroll(function(event) {
      $(".fadeAni").each(function(i, el) {
        if ($(el).visible(true)) {
          $(el).addClass("fadeInNow");
        }
      });
    });
  }
});

//add styling to mobile navigation

$("#mobile-nav-btn").on("click", function () {
  if ($('.navbar-collapse').hasClass('in')) {
    $('.navbar-default').removeClass('on-collapse');
  } else {
    $('.navbar-default').slideDown("slow", function () {
      $(this).addClass('on-collapse');
    });
  }
});


let modal = $('#myModal');
let img = $(".myImg");
let modalImg = $("#img01");
let captionText = $("#caption");

img.on('click', function(){
    modal.css('display', 'block');
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
});

// Get the <span> element that closes the modal
let span = $(".close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.css('display', 'none');
}

// if ($('.navbar-collapse ul li.dropdown').hasClass('open')) {
//   $(".navbar-default .navbar-nav>.open>a").css("color", "#262626 !important");
// }