/**************************************************************
* In-view detection (aesthetic lazy-loading)
**************************************************************/

function fnInViewDetect( ) {

	// Run
	fnApplyClasses();

	// Re-run on-scroll
	$( window ).scroll( function() {
		fnApplyClasses();
	});

	function fnApplyClasses() {

		//	When in view
		$( '.view-detect' ).removeClass( 'in-view' );
		$( '.view-detect:in-viewport' ).addClass( 'in-view' );

		//	If viewed at least once
		$( '.view-detect:in-viewport' ).addClass( 'viewed' );
		$( 'section.programme-animate-section:in-viewport( 220 )' ).addClass( 'viewed' );

	}

}


// END OF DOCUMENT
