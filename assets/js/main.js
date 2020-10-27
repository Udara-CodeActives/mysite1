$(function() {

    // Cache the window objest
    var $window = $(window);

    // parallax background effect
    $('section[data-type="background"]').each(function() {

        var $bgobj = $(this); //assigning the object
        
        $(window).scroll(function() {

            //scoll the background at var speed
            //the yPos is a nagative value because we'are scollin it UP!

            var yPos = -($window.scolltop() / $bgobj.data('speed'));

            //put together our final background position
            var coords = '50% '+ yPos +'px';

            //move the background
            $bgobj.css({backgroundposition: coords});

        }); // end window scroll

    });
});