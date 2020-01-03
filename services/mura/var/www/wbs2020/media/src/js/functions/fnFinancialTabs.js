/********************************************
 * Financial tabs (accordions mobile / tabs desktop)
 ********************************************/
function fnFinancialTabs( i, oSection ) {

    /*****************
	* Objects
	*****************/
    var oSection 					= $( oSection ),
        oWrapper                    = $( '.tabbed-content', oSection ),
        oTabs                       = $( 'nav.tabs', oSection ),
        oTabContentItem             = $( '.item', oSection );

    // Initialise
    fnTabControl();

    /*
    We also apply the switch when a viewport change is detected on the fly
    (e.g. when you resize the browser window or flip your device from
    portrait mode to landscape). We set a timer with a small delay to run
    it only once when the resizing ends. It's not perfect, but it's better
    than have it running constantly during the action of resizing.
    */
    var resizeTimer;
    $( window ).on( 'resize', function( e ) {
        clearTimeout( resizeTimer );
        resizeTimer = setTimeout( function() {
            fnTabControl();
        }, 250 );
    });

    /*
    The function below is responsible for switching the tabs when clicked.
    It switches both the tabs and the accordion buttons even if
    only the one or the other can be visible on a screen. We prefer
    that in order to have a consistent selection in case the viewport
    changes (e.g. when you resize the browser window or flip your
    device from portrait mode to landscape).
    */
    function fnTabControl() {

        if ( oTabs.is( ':visible' ) ) {

            oTabs.find( 'a' ).on( 'click', function( event ) {

                if ( $( this ).hasClass( 'link' ) ) return;

				// Prevent default link behaviour
                event.preventDefault();

                var sTarget 		= $( this ).attr( 'href' ),
                    oTabs 			= $( this ).parents( '.tabs' ),
                    oButtons 		= oTabs.find( 'a' ),
                    oItem 			= oTabs.parents( '.tabbed-content' ).find( '.item' );

                oButtons.removeClass( 'active' );
                oItem.removeClass( 'active' );
                $( this ).addClass( 'active' );
                $( sTarget ).addClass( 'active' );

            });

        } else {

            oTabContentItem.on( 'click', function() {

                if ( $( this ).hasClass( 'link' ) ) return;

                var oContainer 		= $( this ).parents( '.tabbed-content' ),
                    iCurrentID 		= $( this ).attr( 'id' ),
                    oItems 			= oContainer.find( '.item' );

                oContainer.find( '.tabs a' ).removeClass( 'active' );
                oItems.removeClass( 'active' );
                $( this ).addClass( 'active' );
                oContainer.find( '.tabs a[href$="#' + iCurrentID + '"]' ).addClass( 'active' );

            });

        }
    }

}


// END OF DOCUMENT
