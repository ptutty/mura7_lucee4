/**************************************************************
* Primary header: Desktop navigation
**************************************************************/

function fnHeaderPrimaryDesktopNav( i, oHeader ) {

    var oHeader                 = $( oHeader );

    /***************
    * Dropdown menus
    ***************/
    $( 'li.has-submenu .submenu-parent-anchor', oHeader ).each( function( index ) {

        var oThisAnchor         = $( this ),
        	oThisItem			= $( this ).parent( 'li.has-submenu' );

        oThisAnchor.click( function( e ) {
        
            // Prevent default behaviour
            e.preventDefault();

            // Hide other sub-menus
            oThisItem.siblings( 'li.has-submenu' ).removeClass( 'active' );
            oThisItem.siblings( 'li.has-submenu' ).find( '.sub-pane' ).fadeOut();
            
            // Show sub-menu
            oThisItem.addClass( 'active' );
            oThisItem.find( '.sub-pane' ).fadeIn();

        });

    });

    // Exit sub-menus
    $( 'html' ).click( function( e ) {                    
		if ( ! $( e.target ).hasClass( 'submenu-parent-anchor' ) ) {
		
            $( 'li.has-submenu', oHeader ).removeClass( 'active' );
            $( 'li.has-submenu', oHeader ).find( '.sub-pane' ).fadeOut();

		}
	}); 


    /***************
    * Programme tabs
    ***************/

    // Each sub-menu
	$( 'ul.main-menu li .sub-pane.has-tabs', oHeader ).each( function( index ) {

        var oTabLink            = $( this ).find( 'aside li' ),
            oTabs               = $( this ).find( 'main.body' );

        // Each tab
        oTabLink.hover( function() {

            // Get ID of tab
            var iTabId          = $( this ).attr( 'data-id' );

            // Check tab has an ID
            if ( iTabId.length ) {

                // Locate new tab content
                oNewTab         = oTabs.find( '.tab[data-tab="' + iTabId + '"]' );

                // Update active tab
                oNewTab.addClass( 'active' ).siblings( '.tab' ).removeClass( 'active' );
                $( this ).addClass( 'active' ).siblings( 'li' ).removeClass( 'active' );

            }

        });

    });

}



// END OF DOCUMENT
