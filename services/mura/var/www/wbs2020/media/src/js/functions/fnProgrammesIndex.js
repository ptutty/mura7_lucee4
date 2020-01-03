/**************************************************************
* Programme index
**************************************************************/

function fnProgrammesIndex( i, oSection ) {

    var oSection                = $( oSection ),
        oToggleButton           = $( 'aside.filters header.mobile-toggle', oSection ),
        oFilters                = $( 'main.form', oSection );

    /**
    * Open/click menu
    */
    oToggleButton.on( 'click', function() {

        oToggleButton.removeClass( 'open' );

        if ( oFilters.hasClass( 'open' ) ) {

            oFilters
                .removeClass( 'open' )
        			.slideUp( 'slow' )
        			.animate(
        				{ opacity: 0 },
        				{ queue: false, duration: 'slow' }
        			);

        } else {

            oToggleButton.addClass( 'open' );

            oFilters
                .addClass( 'open' )
    				.css( 'opacity', 0 )
    				.slideDown( 'slow' )
    				.animate(
    					{ opacity: 1 },
    					{ queue: false, duration: 'slow' }
    				);

        }

    });


}



// END OF DOCUMENT
