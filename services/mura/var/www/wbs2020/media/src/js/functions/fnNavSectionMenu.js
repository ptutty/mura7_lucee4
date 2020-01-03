/**************************************************************
* Section navigation menu
**************************************************************/

function fnNavSectionMenu( i, oSection ) {

    var oSection                = $( oSection ),
        oToggleButton           = $( '.top', oSection ),
        oMenu                   = $( 'ul', oSection );

    /**
    * Sticky
    */
    var $oSection               = oSection;

    //store the initial position of the element
    var vTop                    = $oSection.offset().top - parseFloat( $oSection.css( 'margin-top' ).replace( /auto/, 0 ) );
    $( window ).scroll( function ( event ) {

        var iNavToTop           = $( this ).scrollTop() + 70;

        if ( iNavToTop >= vTop) {
            $oSection.addClass( 'sticky' );
        } else {
            $oSection.removeClass( 'sticky' );
        }

    });

    /**
    * Open/click menu
    */
    oToggleButton.on( 'click', function() {

        if ( oMenu.hasClass( 'open' ) ) {

            oMenu
                .removeClass( 'open' )
        			.slideUp( 'slow' )
        			.animate(
        				{ opacity: 0 },
        				{ queue: false, duration: 'slow' }
        			);

        } else {

            oMenu
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
