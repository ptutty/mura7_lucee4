/**************************************************************
* Sticky header
**************************************************************/

function fnHeaderPrimarySticky( i, oElement ) {

    var oHeader                 = $( oElement ),
        iHeaderHeight           = oHeader.height(),
        iSticky                 = oHeader.offset(),
        oDocMain                = $( 'body > main.base' ),
        oSectionNav             = $( 'nav.section-menu' ),
        iDistanceToTop          = 50;

    if ( oSectionNav.length > 0 ) {

        iDistanceToTop          = iHeaderHeight - oSectionNav.height();

        oHeader.addClass( 'has-section-menu' );

    }

	$( window ).on( 'scroll', function() {
		fnStickyHeader();
	});

    function fnStickyHeader() {

        var iCurrentScroll      = $( window ).scrollTop();

        if ( iCurrentScroll > iDistanceToTop ) {

            oDocMain.addClass( 'header-sticky' );

            oHeader.addClass( 'sticky-header' );

        } else {

            oDocMain.removeClass( 'header-sticky' );

            oHeader.removeClass( 'sticky-header' );

        }

    }

}



// END OF DOCUMENT
