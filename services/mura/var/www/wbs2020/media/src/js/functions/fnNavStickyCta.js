/********************************************
 * Sticky call-to-action buttons
 ********************************************/
function fnNavStickyCta( i, oStickyBar ) {

    var oStickyBar 					= $( oStickyBar ),
        oSideProgramme              = $( 'aside.sidebar section.programme-table-steps' ),
        iSideProgrammeToTop,
        iSideHeight;

    // Store distance of sidebar to top
    iSideProgrammeToTop             = oSideProgramme.offset().top;

    // Check sidebar exists
    if ( oSideProgramme.length > 0 && iSideProgrammeToTop > 0 ) {

        // Store distance of sidebar to top
        iSideProgrammeToTop         = oSideProgramme.offset().top,
        iSideHeight                 = oSideProgramme.outerHeight();

        // Resize
        $( window ).on( 'resize', function( e ) {

            // Store distance of sidebar to top
            iSideProgrammeToTop         = oSideProgramme.offset().top,
            iSideHeight                 = oSideProgramme.outerHeight();

        });

        // On-scroll
        $( document ).scroll( function() {

    		var iViewToTop 			= $( this ).scrollTop();

    		if ( iViewToTop >= ( iSideProgrammeToTop + iSideHeight ) ) {

    			oStickyBar.addClass( 'on-scroll' );

    		} else {

    			oStickyBar.removeClass( 'on-scroll' );

            }

        });

    }

}


// END OF DOCUMENT
