/**************************************************************
* Scroll to ID (hash links)
**************************************************************/

function fnScrollToID( oEvent ) {

	// Prevent default anchor behaviour
	oEvent.preventDefault();

	// Get offset value (optional)
 	var iOffset 			= $( this ).attr( 'data-scroll-offset' );

	// Animate to new location on-click
	$( 'html, body' ).animate({
        scrollTop: $( $( oEvent.currentTarget ).attr( 'href' ) ).offset().top - ( iOffset ? iOffset : '0' )
    }, 1500 );

}


// END OF DOCUMENT
