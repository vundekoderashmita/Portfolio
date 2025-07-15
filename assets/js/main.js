(function($) {
  var $window = $(window),
      $body = $('body'),
      $header = $('#header'),
      $footer = $('#footer'),
      $main = $('#main'),
      settings = {
        parallax: true,
        parallaxFactor: 20
      };

  // Breakpoints
  breakpoints({
    xlarge:  [ '1281px',  '1800px' ],
    large:   [ '981px',   '1280px' ],
    medium:  [ '737px',   '980px'  ],
    small:   [ '481px',   '736px'  ],
    xsmall:  [ null,      '480px'  ],
  });

  // Initial animations
  $window.on('load', function() {
    window.setTimeout(function() {
      $body.removeClass('is-preload');
    }, 100);
  });

  // Touch?
  if (browser.mobile) {
    $body.addClass('is-touch');
    window.setTimeout(function() {
      $window.scrollTop($window.scrollTop() + 1);
    }, 0);
  }

  // Footer position
  breakpoints.on('<=medium', function() {
    $footer.insertAfter($main);
  });

  breakpoints.on('>medium', function() {
    $footer.appendTo($header);
  });

  // Parallax
  if (browser.name == 'ie' || browser.mobile)
    settings.parallax = false;

  if (settings.parallax) {
    breakpoints.on('<=medium', function() {
      $window.off('scroll.strata_parallax');
      $header.css('background-position', '');
    });

    breakpoints.on('>medium', function() {
      $header.css('background-position', 'left 0px');
      $window.on('scroll.strata_parallax', function() {
        $header.css('background-position', 'left ' + (-1 * (parseInt($window.scrollTop()) / settings.parallaxFactor)) + 'px');
      });
    });

    $window.on('load', function() {
      $window.triggerHandler('scroll');
    });
  }

  // Lightbox gallery
  $window.on('load', function() {
    $('#two').poptrox({
      caption: function($a) { return $a.next('h3').text(); },
      overlayColor: '#2c2c2c',
      overlayOpacity: 0.85,
      popupCloserText: '',
      popupLoaderText: '',
      selector: '.work-item a.image',
      usePopupCaption: true,
      usePopupDefaultStyling: false,
      usePopupEasyClose: false,
      usePopupNav: true,
      windowMargin: (breakpoints.active('<=small') ? 0 : 50)
    });
  });

})(jQuery);
document.addEventListener("DOMContentLoaded", function () {
  // Modal logic
  window.openModal = function (modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.style.display = 'block';

    const slides = modal.querySelectorAll('.modal-slide');
    slides.forEach(slide => slide.classList.remove('show'));
    if (slides[0]) slides[0].classList.add('show');
  };

  window.closeModal = function (modalId) {
    const modal = document.getElementById(modalId);
    if (!modal) return;
    modal.style.display = 'none';
  };

  window.showSlide = function (slideId) {
    const allSlides = document.querySelectorAll('.modal-slide');
    allSlides.forEach(slide => slide.classList.remove('show'));
    const targetSlide = document.getElementById(slideId);
    if (targetSlide) targetSlide.classList.add('show');
  };

  // Sidebar toggle (click-based)
  

  
});


document.addEventListener('click', (e) => {
  const dropdown = document.getElementById('dropdown');
  const button = document.getElementById('menu-button');

  if (!button.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.classList.add('hidden');
  }
});
