var mr_firstSectionHeight,
    mr_nav,
    mr_navOuterHeight,
    mr_navScrolled = false,
    mr_navFixed = false,
    mr_outOfSight = false,
    mr_floatingProjectSections,
    mr_scrollTop = 0;

$(document).ready(function() { 
    "use strict";

    // Smooth scroll to inner links

  if($('.inner-link').length){
    $('.inner-link').smoothScroll({
      offset: -55,
      speed: 800
    });
    }

    // Update scroll variable for scrolling functions

    addEventListener('scroll', function() {
        mr_scrollTop = window.pageYOffset;
    }, false);

    // Append .background-image-holder <img>'s as CSS backgrounds

    $('.background-image-holder').each(function() {
        var imgSrc = $(this).children('img').attr('src');
        $(this).css('background', 'url("' + imgSrc + '")');
        $(this).children('img').hide();
        $(this).css('background-position', 'initial');
    });

    $(function() {
    function backgroundScroll(el, width, speed){        
        el.animate({'background-position' : '-'+width+'px'}, speed, 'linear', function(){
            el.css('background-position','0');                
            backgroundScroll(el, width, speed);
        });
    }
    // 948 represents the width of the image in pixels and 60000 represents the speed it scrolls
    backgroundScroll($('#container-hero'), 1800, 60000); 
})

    // Fade in background images

    setTimeout(function() {
        $('.background-image-holder').each(function() {
            $(this).addClass('fadeIn');
        });
    }, 200);

    // Initialize Tooltips

    $('[data-toggle="tooltip"]').tooltip();

    // Checkboxes

    $('.checkbox-option').click(function() {
        $(this).toggleClass('checked');
        var checkbox = $(this).find('input');
        if (checkbox.prop('checked') === false) {
            checkbox.prop('checked', true);
        } else {
            checkbox.prop('checked', false);
        }
    });

    // Radio Buttons

    $('.radio-option').click(function() {
        $(this).closest('form').find('.radio-option').removeClass('checked');
        $(this).addClass('checked');
        $(this).find('input').prop('checked', true);
    });


    // Accordions

    $('.accordion li').click(function() {
        if ($(this).closest('.accordion').hasClass('one-open')) {
            $(this).closest('.accordion').find('li').removeClass('active');
            $(this).addClass('active');
        } else {
            $(this).toggleClass('active');
        }
    });

    // Tabbed Content

    $('.tabbed-content').each(function() {
        $(this).append('<ul class="content"></ul>');
    });

    $('.tabs li').each(function() {
        var originalTab = $(this),
            activeClass = "";
        if (originalTab.is('.tabs li:first-child')) {
            activeClass = ' class="active"';
        }
        var tabContent = originalTab.find('.tab-content').detach().wrap('<li' + activeClass + '></li>').parent();
        originalTab.closest('.tabbed-content').find('.content').append(tabContent);
    });

    $('.tabs li').click(function() {
        $(this).closest('.tabs').find('li').removeClass('active');
        $(this).addClass('active');
        var liIndex = $(this).index() + 1;
        $(this).closest('.tabbed-content').find('.content>li').removeClass('active');
        $(this).closest('.tabbed-content').find('.content>li:nth-of-type(' + liIndex + ')').addClass('active');
    });

    // Progress Bars

    $('.progress-bar').each(function() {
        $(this).css('width', $(this).attr('data-progress') + '%');
    });

    //Navigation

    if (!$('nav').hasClass('fixed') && !$('nav').hasClass('absolute')) {

        // Make nav container height of nav

        // $('.nav-container').css('min-height', $('nav').outerHeight(true));

        // $(window).resize(function() {
        //     $('.nav-container').css('min-height', $('nav').outerHeight(true));
        //     console.error('nav outerheight: '+$('nav').outerHeight(true));
        // });

        // Compensate the height of parallax element for inline nav

        if ($(window).width() > 768) {
            $('.parallax:nth-of-type(1) .background-image-holder').css('top', -($('nav').outerHeight(true)));
        }

        // Adjust fullscreen elements

        if ($(window).width() > 768) {
            $('section.fullscreen:nth-of-type(1)').css('height', ($(window).height() - $('nav').outerHeight(true)));
        }

    } else {
        $('body').addClass('nav-is-overlay');
    }

    if ($('nav').hasClass('bg-dark')) {
        $('.nav-container').addClass('bg-dark');
    }

    // Fix nav to top while scrolling

    mr_nav = $('body .navbar nav:first');
    mr_navOuterHeight = $('body .navbar nav:first').outerHeight();
    window.addEventListener("scroll", updateNav, false);

    // Menu dropdown positioning

    // $('.menu > li > ul').each(function() {
    //     var menu = $(this).offset();
    //     var farRight = menu.left + $(this).outerWidth(true);
    //     if (farRight > $(window).width() && !$(this).hasClass('mega-menu')) {
    //         $(this).addClass('make-right');
    //     } else if (farRight > $(window).width() && $(this).hasClass('mega-menu')) {
    //         var isOnScreen = $(window).width() - menu.left;
    //         var difference = $(this).outerWidth(true) - isOnScreen;
    //         $(this).css('margin-left', -(difference));
    //     }
    // });

    //Mobile Menu
    //Sub Nav 

    // $('.mobile-toggle').click(function() {
    //     $('.nav-bar').toggleClass('nav-open');
    //     $(this).toggleClass('active');
    // });

    // $('.menu li').click(function(e) {
    //     if (!e) e = window.event;
    //     e.stopPropagation();
    //     if ($(this).find('ul').length) {
    //         $(this).toggleClass('toggle-sub');
    //     } else {
    //         $(this).parents('.toggle-sub').removeClass('toggle-sub');
    //     }
    // });

    // $('.module.widget-handle').click(function() {
    //     $(this).toggleClass('toggle-widget-handle');
    // });

    // Global Nav Overlay
    // $(document).ready(function(){
    //     $(".main-toggle").click(function(){
    //         $(".mobile-overlay").fadeToggle(200);
    //        $(this).toggleClass('btn-open').toggleClass('btn-close');
    //     });
    // });

    // $('.mobile-overlay').on('click', function(){
    //     $(".mobile-overlay").fadeToggle(200);   
    //     $(".main-toggle").toggleClass('btn-open').toggleClass('btn-close');
    //     open = false;
    // });

$(document).ready(function(){
    $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).stop( true, true ).slideDown("fast");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).stop( true, true ).slideUp("fast");
            $(this).toggleClass('open');       
        }
    );
});

$(document).ready(function () {
  $(".icon").click(function () {
    $(".mobile-overlay").fadeToggle(500);
    $(".top-menu").toggleClass("top-animate");
    $(".mid-menu").toggleClass("mid-animate");
    $(".bottom-menu").toggleClass("bottom-animate");
  });

  $('.mobile-overlay').on('click', function(){
        $(".mobilenav").fadeToggle(200);
        $(".top-menu").toggleClass("top-animate");
        $(".mid-menu").toggleClass("mid-animate");
        $(".bottom-menu").toggleClass("bottom-animate");   
        open = false;
    });
});



  $('.foundry_modal[data-time-delay]').each(function(){
    var modal = $(this);
    var delay = modal.attr('data-time-delay');
    modal.prepend($('<i class="ti-close close-modal">'));
      if(typeof modal.attr('data-cookie') != "undefined"){
          if(!mr_cookies.hasItem(modal.attr('data-cookie'))){
                setTimeout(function(){
              modal.addClass('reveal-modal');
              $('.modal-screen').addClass('reveal-modal');
            },delay);
            }
        }else{
            setTimeout(function(){
                modal.addClass('reveal-modal');
                $('.modal-screen').addClass('reveal-modal');
            },delay);
        }
  });
    
    $('.close-modal:not(.modal-strip .close-modal)').click(function(){
      var modal = $(this).closest('.foundry_modal');
        modal.toggleClass('reveal-modal');
        if(typeof modal.attr('data-cookie') != "undefined"){
            mr_cookies.setItem(modal.attr('data-cookie'), "true", Infinity);
        }
      
        $('.modal-screen').toggleClass('reveal-modal');
    });
    
    $('.modal-screen').click(function(){
      $('.foundry_modal.reveal-modal').toggleClass('reveal-modal');
      $(this).toggleClass('reveal-modal');
    });
    
    $(document).keyup(function(e) {
     if (e.keyCode == 27) { // escape key maps to keycode `27`
      $('.foundry_modal').removeClass('reveal-modal');
      $('.modal-screen').removeClass('reveal-modal');
    }
  });
    
    // Modal Strips
    
    $('.modal-strip').each(function(){
      if(!$(this).find('.close-modal').length){
        $(this).append($('<i class="ti-close close-modal">'));
      }
      var modal = $(this);

        if(typeof modal.attr('data-cookie') != "undefined"){
           
            if(!mr_cookies.hasItem(modal.attr('data-cookie'))){
              setTimeout(function(){
                modal.addClass('reveal-modal');
              },1000);
            }
        }else{
            setTimeout(function(){
                    modal.addClass('reveal-modal');
            },1000);
        }
    });
    
    $('.modal-strip .close-modal').click(function(){
        var modal = $(this).closest('.modal-strip');
        if(typeof modal.attr('data-cookie') != "undefined"){
            mr_cookies.setItem(modal.attr('data-cookie'), "true", Infinity);
        }
      $(this).closest('.modal-strip').removeClass('reveal-modal');
      return false;
    });


    // Video Modals
    $('section').closest('body').find('.modal-video[video-link]').remove();

    $('.modal-video-container').each(function(index) {
        $(this).find('.play-button').attr('video-link', index);
        $(this).find('.modal-video').clone().appendTo('body').attr('video-link', index);
    });

    $('.modal-video-container .play-button').click(function() {
        var linkedVideo = $('section').closest('body').find('.modal-video[video-link="' + $(this).attr('video-link') + '"]');
        linkedVideo.toggleClass('reveal-modal');

        if (linkedVideo.find('video').length) {
            linkedVideo.find('video').get(0).play();
        }

        if (linkedVideo.find('iframe').length) {
            var iframe = linkedVideo.find('iframe');
            var iframeSrc = iframe.attr('data-src') + '&autoplay=1';
            iframe.attr('src', iframeSrc);
        }
    });

    $('section').closest('body').find('.close-iframe').click(function() {
        $(this).closest('.modal-video').toggleClass('reveal-modal');
        $(this).siblings('iframe').attr('src', '');
        $(this).siblings('video').get(0).pause();
    });

    // Local Videos

    $('section').closest('body').find('.local-video-container .play-button').click(function() {
        $(this).siblings('.background-image-holder').removeClass('fadeIn');
        $(this).siblings('.background-image-holder').css('z-index', -1);
        $(this).css('opacity', 0);
        $(this).siblings('video').get(0).play();
    });

    // Youtube Videos

    $('section').closest('body').find('.player').each(function() {
        var src = $(this).attr('data-video-id');
        var startat = $(this).attr('data-start-at');
        $(this).attr('data-property', "{videoURL:'http://youtu.be/" + src + "',containment:'self',autoPlay:true, mute:true, startAt:" + startat + ", opacity:1, showControls:false}");
    });

  if($('.player').length){
      $('section').closest('body').find(".player").YTPlayer();
    }

    // Twitter Feed

    $('.tweets-feed').each(function(index) {
        $(this).attr('id', 'tweets-' + index);
    }).each(function(index) {

        function handleTweets(tweets) {
            var x = tweets.length;
            var n = 0;
            var element = document.getElementById('tweets-' + index);
            var html = '<ul class="slides">';
            while (n < x) {
                html += '<li>' + tweets[n] + '</li>';
                n++;
            }
            html += '</ul>';
            element.innerHTML = html;
            return html;
        }

        twitterFetcher.fetch($('#tweets-' + index).attr('data-widget-id'), '', 5, true, true, true, '', false, handleTweets);

    });

    // Instagram Feed
    
    if($('.instafeed').length){
        jQuery.fn.spectragram.accessData = {
            accessToken: '1406933036.fedaafa.feec3d50f5194ce5b705a1f11a107e0b',
            clientID: 'fedaafacf224447e8aef74872d3820a1'
        };  
    }   

    $('.instafeed').each(function() {
        var feedID = $(this).attr('data-user-name') + '-';
        $(this).children('ul').spectragram('getUserFeed', {
            query: feedID,
            max: 12
        });
    });

    // FS Vid Background

    $(window).resize(function() {
        resizeVid();
    });

    // Interact with Map once the user has clicked (to prevent scrolling the page = zooming the map

    $('.map-holder').click(function() {
        $(this).addClass('interact');
    });
    
    if($('.map-holder').length){
      $(window).scroll(function() {
      if ($('.map-holder.interact').length) {
        $('.map-holder.interact').removeClass('interact');
      }
    });
    }
    
    // Countdown Timers

    if ($('.countdown').length) {
        $('.countdown').each(function() {
            var date = $(this).attr('data-date');
            $(this).countdown(date, function(event) {
                $(this).text(
                    event.strftime('%D days %H:%M:%S')
                );
            });
        });
    }

    // Get referrer from URL string 
    if (getURLParameter("ref")) {
        $('form.form-email').append('<input type="text" name="referrer" class="hidden" value="' + getURLParameter("ref") + '"/>');
    }

    function getURLParameter(name) {
        return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null;
    }

    // Disable parallax on mobile

    if ((/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
        $('section').removeClass('parallax');
    }
    

    // Load Google MAP API JS with callback to initialise when fully loaded
    if(document.querySelector('[data-maps-api-key]') && !document.querySelector('.gMapsAPI')){
        if($('[data-maps-api-key]').length){
            var script = document.createElement('script');
            var apiKey = $('[data-maps-api-key]:first').attr('data-maps-api-key');
            script.type = 'text/javascript';
            script.src = 'https://maps.googleapis.com/maps/api/js?key='+apiKey+'&callback=initializeMaps';
            script.className = 'gMapsAPI';
            document.body.appendChild(script);  
        } 
    }

}); 

$(window).load(function() { 
    "use strict";

    // Initialize Masonry

    if ($('.masonry').length) {
        var container = document.querySelector('.masonry');
        var msnry = new Masonry(container, {
            itemSelector: '.masonry-item'
        });

        msnry.on('layoutComplete', function() {

            mr_firstSectionHeight = $('.main-container section:nth-of-type(1)').outerHeight(true);

            // Fix floating project filters to bottom of projects container

            if ($('.filters.floating').length) {
                setupFloatingProjectFilters();
                updateFloatingFilters();
                window.addEventListener("scroll", updateFloatingFilters, false);
            }

            $('.masonry').addClass('fadeIn');
            $('.masonry-loader').addClass('fadeOut');
            if ($('.masonryFlyIn').length) {
                masonryFlyIn();
            }
        });

        msnry.layout();
    }

    // Resize fullscreen video backgrounds to cover parent

    resizeVid();

       // Initialize twitter feed

    var setUpTweets = setInterval(function() {
        if ($('.tweets-slider').find('li.flex-active-slide').length) {
            clearInterval(setUpTweets);
            return;
        } else {
            if ($('.tweets-slider').length) {
                $('.tweets-slider').flexslider({
                    directionNav: false,
                    controlNav: false
                });
            }
        }
    }, 500);

    mr_firstSectionHeight = $('.main-container section:nth-of-type(1)').outerHeight(true);


}); 

    // Image Sliders

    $('.slider-all-controls').flexslider({});
    $('.slider-paging-controls').flexslider({
        animation: "slide",
        directionNav: false
    });
    $('.slider-arrow-controls').flexslider({
        controlNav: false
    });
    $('.slider-thumb-controls .slides li').each(function() {
        var imgSrc = $(this).find('img').attr('src');
        $(this).attr('data-thumb', imgSrc);
    });
    $('.slider-thumb-controls').flexslider({
        animation: "slide",
        controlNav: "thumbnails",
        directionNav: true
    });
    $('.logo-carousel').flexslider({
        minItems: 1,
        maxItems: 4,
        move: 1,
        itemWidth: 200,
        itemMargin: 0,
        animation: "slide",
        slideshow: true,
        slideshowSpeed: 9000,
        directionNav: false,
        controlNav: false
    });

function resizeVid() {

    $('.fs-vid-background video').each(function() {
        var vid = $(this);
        var ratio = (vid.width() / vid.height());
        var section = vid.closest('section');
        if (section.width() > section.outerHeight()) {
            vid.css('width', (section.width() * ratio));
            vid.css('margin-left', -((section.width() * ratio) / 4));
            vid.css('height', 'auto');
        } else {
            vid.css('width', 'auto');
            vid.css('height', (section.outerHeight() * ratio));
            vid.css('margin-left', 0);
        }
    });

}

function updateNav() {

    var scrollY = mr_scrollTop;

    if (scrollY <= 0) {
        if (mr_navFixed) {
            mr_navFixed = false;
            mr_nav.removeClass('fixed');
        }
        if (mr_outOfSight) {
            mr_outOfSight = false;
            mr_nav.removeClass('outOfSight');
        }
        if (mr_navScrolled) {
            mr_navScrolled = false;
            mr_nav.removeClass('scrolled');
        }
        return;
    }

    if (scrollY > mr_firstSectionHeight) {
        if (!mr_navScrolled) {
            mr_nav.addClass('scrolled');
            mr_navScrolled = true;
            return;
        }
    } else {
        if (scrollY > mr_navOuterHeight) {
            if (!mr_navFixed) {
                mr_nav.addClass('fixed');
                mr_navFixed = true;
            }

            if (scrollY > mr_navOuterHeight * 2) {
                if (!mr_outOfSight) {
                    mr_nav.addClass('outOfSight');
                    mr_outOfSight = true;
                }
            } else {
                if (mr_outOfSight) {
                    mr_outOfSight = false;
                    mr_nav.removeClass('outOfSight');
                }
            }
        } else {
            if (mr_navFixed) {
                mr_navFixed = false;
                mr_nav.removeClass('fixed');
            }
            if (mr_outOfSight) {
                mr_outOfSight = false;
                mr_nav.removeClass('outOfSight');
            }
        }

        if (mr_navScrolled) {
            mr_navScrolled = false;
            mr_nav.removeClass('scrolled');
        }

    }
}

function capitaliseFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function masonryFlyIn() {
    var $items = $('.masonryFlyIn .masonry-item');
    var time = 0;

    $items.each(function() {
        var item = $(this);
        setTimeout(function() {
            item.addClass('fadeIn');
        }, time);
        time += 170;
    });
}

function setupFloatingProjectFilters() {
    mr_floatingProjectSections = [];
    $('.filters.floating').closest('section').each(function() {
        var section = $(this);

        mr_floatingProjectSections.push({
            section: section.get(0),
            outerHeight: section.outerHeight(),
            elemTop: section.offset().top,
            elemBottom: section.offset().top + section.outerHeight(),
            filters: section.find('.filters.floating'),
            filersHeight: section.find('.filters.floating').outerHeight(true)
        });
    });
}

function updateFloatingFilters() {
    var l = mr_floatingProjectSections.length;
    while (l--) {
        var section = mr_floatingProjectSections[l];

        if ((section.elemTop < mr_scrollTop) && typeof window.mr_variant == "undefined" ) {
            section.filters.css({
                position: 'fixed',
                top: '16px',
                bottom: 'auto'
            });
            if (mr_navScrolled) {
                section.filters.css({
                    transform: 'translate3d(-50%,48px,0)'
                });
            }
            if (mr_scrollTop > (section.elemBottom - 70)) {
                section.filters.css({
                    position: 'absolute',
                    bottom: '16px',
                    top: 'auto'
                });
                section.filters.css({
                    transform: 'translate3d(-50%,0,0)'
                });
            }
        } else {
            section.filters.css({
                position: 'absolute',
                transform: 'translate3d(-50%,0,0)'
            });
        }
    }
}

window.initializeMaps = function(){
    if(typeof google !== "undefined"){
        if(typeof google.maps !== "undefined"){
            $('.map-canvas[data-maps-api-key]').each(function(){
                    var mapInstance   = this,
                        mapJSON       = typeof $(this).attr('data-map-style') !== "undefined" ? $(this).attr('data-map-style'): false,
                        mapStyle      = JSON.parse(mapJSON) || [{"featureType":"landscape","stylers":[{"saturation":-100},{"lightness":65},{"visibility":"on"}]},{"featureType":"poi","stylers":[{"saturation":-100},{"lightness":51},{"visibility":"simplified"}]},{"featureType":"road.highway","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"road.arterial","stylers":[{"saturation":-100},{"lightness":30},{"visibility":"on"}]},{"featureType":"road.local","stylers":[{"saturation":-100},{"lightness":40},{"visibility":"on"}]},{"featureType":"transit","stylers":[{"saturation":-100},{"visibility":"simplified"}]},{"featureType":"administrative.province","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":-25},{"saturation":-100}]},{"featureType":"water","elementType":"geometry","stylers":[{"hue":"#ffff00"},{"lightness":-25},{"saturation":-97}]}],
                        zoomLevel     = (typeof $(this).attr('data-map-zoom') !== "undefined" && $(this).attr('data-map-zoom') !== "") ? $(this).attr('data-map-zoom') * 1: 17,
                        latlong       = typeof $(this).attr('data-latlong') != "undefined" ? $(this).attr('data-latlong') : false,
                        latitude      = latlong ? 1 *latlong.substr(0, latlong.indexOf(',')) : false,
                        longitude     = latlong ? 1 * latlong.substr(latlong.indexOf(",") + 1) : false,
                        geocoder      = new google.maps.Geocoder(),
                        address       = typeof $(this).attr('data-address') !== "undefined" ? $(this).attr('data-address').split(';'): false,
                        markerTitle   = "We Are Here",
                        map, marker, markerImage,
                        mapOptions = {
                            scrollwheel: false,
                            zoom: zoomLevel,
                            disableDefaultUI: true,
                            styles: mapStyle
                        };

                    if($(this).attr('data-marker-title') != undefined && $(this).attr('data-marker-title') != "" )
                    {
                        markerTitle = $(this).attr('data-marker-title');
                    }

                    if(address != undefined && address[0] != ""){
                            geocoder.geocode( { 'address': address[0].replace('[nomarker]','')}, function(results, status) {
                                if (status == google.maps.GeocoderStatus.OK) {
                                var map = new google.maps.Map(mapInstance, mapOptions); 
                                map.setCenter(results[0].geometry.location);
                                
                                address.forEach(function(address){
                                    var markerGeoCoder = new google.maps.Geocoder();
                                    if(address.indexOf('[nomarker]') < 0){
                                        markerGeoCoder.geocode( { 'address': address.replace('[nomarker]','')}, function(results, status) {
                                            if (status == google.maps.GeocoderStatus.OK) {
                                                markerImage = {url: window.mr_variant == undefined ? 'img/mapmarker.png' : '../img/mapmarker.png', size: new google.maps.Size(50,50), scaledSize: new google.maps.Size(50,50)},
                                                marker = new google.maps.Marker({
                                                    map: map,
                                                    icon: markerImage,
                                                    title: markerTitle,
                                                    position: results[0].geometry.location,
                                                    optimised: false
                                                });
                                            }
                                        });
                                    }
                                });
                            } else {
                                console.log('There was a problem geocoding the address.');
                            }
                        });
                    }
                    else if(latitude != undefined && latitude != "" && latitude != false && longitude != undefined && longitude != "" && longitude != false ){
                        mapOptions.center   = { lat: latitude, lng: longitude};
                        map = new google.maps.Map(mapInstance, mapOptions); 
                        marker              = new google.maps.Marker({
                                                    position: { lat: latitude, lng: longitude },
                                                    map: map,
                                                    icon: markerImage,
                                                    title: markerTitle
                                                });

                    }

                }); 
        }
    }
}
initializeMaps();

// End of Maps


/*\
|*|  COOKIE LIBRARY THANKS TO MDN
|*|
|*|  A complete cookies reader/writer framework with full unicode support.
|*|
|*|  Revision #1 - September 4, 2014
|*|
|*|  https://developer.mozilla.org/en-US/docs/Web/API/document.cookie
|*|  https://developer.mozilla.org/User:fusionchess
|*|
|*|  This framework is released under the GNU Public License, version 3 or later.
|*|  http://www.gnu.org/licenses/gpl-3.0-standalone.html
|*|
|*|  Syntaxes:
|*|
|*|  * mr_cookies.setItem(name, value[, end[, path[, domain[, secure]]]])
|*|  * mr_cookies.getItem(name)
|*|  * mr_cookies.removeItem(name[, path[, domain]])
|*|  * mr_cookies.hasItem(name)
|*|  * mr_cookies.keys()
|*|
\*/

var mr_cookies = {
  getItem: function (sKey) {
    if (!sKey) { return null; }
    return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
  },
  setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
    if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
    var sExpires = "";
    if (vEnd) {
      switch (vEnd.constructor) {
        case Number:
          sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
          break;
        case String:
          sExpires = "; expires=" + vEnd;
          break;
        case Date:
          sExpires = "; expires=" + vEnd.toUTCString();
          break;
      }
    }
    document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
    return true;
  },
  removeItem: function (sKey, sPath, sDomain) {
    if (!this.hasItem(sKey)) { return false; }
    document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
    return true;
  },
  hasItem: function (sKey) {
    if (!sKey) { return false; }
    return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
  },
  keys: function () {
    var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
    for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]); }
    return aKeys;
  }
};

/*\
|*|  END COOKIE LIBRARY
\*/
