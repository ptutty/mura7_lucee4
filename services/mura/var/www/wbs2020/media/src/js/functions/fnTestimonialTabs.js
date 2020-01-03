/********************************************
 * Testimonial tabs
 ********************************************/
function fnTestimonialTabs( i, oSection ) {

    /*****************
	* Objects
	*****************/
    var oSection 					= $( oSection ),
        oCarouselThumbnails         = $( '.logos-carousel', oSection ),
        oCarouselContent            = $( '.content-carousel', oSection );

    // Logos
    oCarouselThumbnails.slick({
        infinite:                   false,
        slidesToShow:               4,
        slidesToScroll:             1,
        asNavFor:                   oCarouselContent,
        arrows:                     false,
        focusOnSelect:              true,
        dots:                       false,
        swipe:                      false,
        swipeToSlide:               false,
        centerMode:                 false,
        touchMove:                  false,
        speed:                      100,
        vertical:                   true,
        verticalSwiping:            true,
        responsive:                 [
                                        {
                                            breakpoint: 768,
                                            settings: {
                                                infinite:                   true,
                                                slidesToShow:               1,
                                                swipe:                      true,
                                                swipeToSlide:               true,
                                                touchMove:                  true,
                                                speed:                      300,
                                                centerMode:                 true,
                                                vertical:                   false,
                                                verticalSwiping:            false
                                            }
                                        }
                                    ]
    });

    // Content
    oCarouselContent.slick({
        infinite:                   false,
        adaptiveHeight:             false,
        slidesToShow:               1,
        slidesToScroll:             1,
        asNavFor:                   oCarouselThumbnails,
        arrows:                     false,
        dots:                       false,
        fade:                       true,
        swipe:                      false,
        swipeToSlide:               false,
        touchMove:                  false,
        centerMode:                 false,
        speed:                      100,
        focusOnSelect:              true,
        responsive:                 [
                                        {
                                            breakpoint: 768,
                                            settings: {
                                                infinite:                   true,
                                                adaptiveHeight:             true,
                                                dots:                       true,
                                                fade:                       false,
                                                swipe:                      true,
                                                swipeToSlide:               true,
                                                touchMove:                  true,
                                                speed:                      300,
                                                centerMode:                 true
                                            }
                                        }
                                    ]
    });

}


// END OF DOCUMENT
