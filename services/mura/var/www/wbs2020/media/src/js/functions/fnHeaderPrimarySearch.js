/**************************************************************
* Primary header: Search
**************************************************************/

function fnHeaderPrimarySearch( i, oHeader ) {

    var oHeader                 = $( oHeader );

    // Navigation
    var oMenuOpenButton         = $( '.mobile-menu-link-open', oHeader ),
        oMenuCloseButton        = $( '.mobile-menu-link-close', oHeader ),
        oMenuDesktopWrap        = $( 'nav.main-menu-wrap' ),
        oMenuDesktop            = oMenuDesktopWrap.find( '> ul.main-menu' ),
        oMenuMobile             = $( 'nav.mobile-menu', oHeader );

    // Search
    var oSearchButton           = $( 'i.search-toggle', oHeader ),
        oSearchComp             = $( '.search-wrap', oHeader ),
        oSearchExitButton       = oSearchComp.find( 'i.exit' ),
        oSearchOverlay          = $( '.overlay--search' );


    /***************
    * Search
    ***************/

    /**
    * Open search
    */
    oSearchButton.on( 'click', function() {

        // Hide desktop menu
        oMenuDesktop.fadeOut();
        oMenuMobile.fadeOut();

        // Show search
        oSearchComp.fadeIn();
        oMenuDesktopWrap.addClass( 'search-visible' );

        // Display overlay
        oSearchOverlay.fadeIn();

    });

    /**
    * Close search
    */
    oSearchExitButton.on( 'click', function() {

        // Show desktop menu
        oMenuDesktop.fadeIn();

        // Hide search
        oSearchComp.fadeOut();
        oMenuDesktopWrap.removeClass( 'search-visible' );

        // Hide overlay
        oSearchOverlay.fadeOut();

    });


}



// END OF DOCUMENT
