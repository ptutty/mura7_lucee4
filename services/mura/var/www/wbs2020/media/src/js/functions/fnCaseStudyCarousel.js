/**************************************************************
* Case Study Carousel
**************************************************************/

function fnCaseStudyCarousel( i, oSection ) {

    var oSection                    = $( oSection ),
        oCarousel                   = $( 'ul.slider', oSection );

    oCarousel.slick({
        infinite:                   false,
        dots:                       true,
        arrows:                     false,
        fade:                       true,
        swipe:                      false,
        swipeToSlide:               false,
        centerMode:                 false,
        touchMove:                  false,
        adaptiveHeight:             true,
        speed:                      300,
        customPaging:               function( slick, index ) {
                                        var sImageUrl = slick.$slides.eq( index ).find( 'aside.image .src' ).attr( 'data-image' );
                                        return '<div class="thumbnail" style="background-image: url(' + sImageUrl + ');"></div>';
                                    },
        responsive:                 [
                                        {
                                            breakpoint: 1024,
                                            settings: {
                                                infinite:                   true,
                                                slidesToShow:               1,
                                                fade:                       false,
                                                swipe:                      true,
                                                swipeToSlide:               true,
                                                touchMove:                  true,
                                                centerMode:                 true,
                                                customPaging:               function (slider, i) {
                                                                                return $( '<button type="button" />' ).text( i + 1 );
                                                                            }
                                            }
                                        }
                                    ]
    });


}



// END OF DOCUMENT
