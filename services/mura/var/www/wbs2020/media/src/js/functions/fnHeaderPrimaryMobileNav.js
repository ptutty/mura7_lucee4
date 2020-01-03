/**************************************************************
* Primary header: Mobile navigation
**************************************************************/

function fnHeaderPrimaryMobileNav( i, oHeader ) {

    var oHeader                 = $( oHeader );

    // Navigation
    var oMenuOpenButton         = $( '.mobile-menu-link-open', oHeader ),
        oMenuCloseButton        = $( '.mobile-menu-link-close', oHeader ),
        oMenuDesktop            = $( 'nav.main-menu-wrap > ul.main-menu' ),
        oMenuMobile             = $( 'nav.mobile-menu', oHeader );

    // Search
    var oSearchButton           = $( 'i.search-toggle', oHeader ),
        oSearchComp             = $( '.search-wrap', oHeader ),
        oSearchExitButton       = oSearchComp.find( 'i.exit' );


    /***************
    * Open/close mobile menu toggle
    ***************/

    /**
    * Open menu
    */
    oMenuOpenButton.on( 'click', function() {

        // Show mobile menu
        oMenuMobile.fadeIn();

        // Hide search
        oSearchComp.fadeOut();

    });

    /**
    * Close menu
    */
    oMenuCloseButton.on( 'click', function() {

        // Hide mobile menu & search
        oMenuMobile.fadeOut();
        oSearchComp.fadeOut();

    });


    /***************
    * Panes
    ***************/

    var 	sCurrentPaneClass			= 'current-pane',
    	 	sParentPaneClass			= 'parent--pane',
    	 	sActivePaneClass			= 'open',
    	 	oPaneParent 				= $( 'li.' + sParentPaneClass, oMenuMobile ),
    		oReturnButton				= $( 'span.return', oMenuMobile ),
    		oBreadcrumb					= $( 'span.breadcrumb', oMenuMobile ),
    	 	oCurrentPane;

    /**
    * Open new pane (click on parent)
    */
    oPaneParent.find( '> a' ).on( 'click', function( e ) {

    	// Prevent default anchor behaviour
    	e.preventDefault();

    	// Update current pane
    	oCurrentPane					= $( this ).parent( oPaneParent );
    	oPaneParent.removeClass( sCurrentPaneClass );
    	oCurrentPane.addClass( sCurrentPaneClass );

    	// Set breadcrumb text (if pane / not accordions)
    	fnUpdateBreadcrumb( $( this ).text() );

    	// Open new pane
    	oCurrentPane.addClass( sActivePaneClass ).siblings( 'li.' + sParentPaneClass ).removeClass( 'open' );

    });


    /**
    * Return (back to previous/parent pane)
    */
    oReturnButton.on( 'click', function() {

    	// Close current pane
    	oCurrentPane.removeClass( sCurrentPaneClass + ' ' + sActivePaneClass );

    	// Update current pane
    	oCurrentPane					= oCurrentPane.closest( 'li.' + sParentPaneClass + '.' + sActivePaneClass );
    	oCurrentPane.addClass( sCurrentPaneClass );

    	// Update breadcrumb text
    	fnUpdateBreadcrumb( oCurrentPane.find( '> a' ).text() );

    });


    /**
    * Pane functions
    */

    /* Update breadcrumb text */
    function fnUpdateBreadcrumb( sText ) {

    	if ( sText.length > 0 ) {

    		oReturnButton.show();
    		oBreadcrumb.text( sText ).show();

    	} else {

    		oReturnButton.hide();
    		oBreadcrumb.empty().hide();

    	}

    }


    /***************
    * Accordions
    ***************/

    var 	sParentAccordionClass	= 'parent--accordion',
    	 	sActiveAccordionClass 	= 'open',
    	 	oAccordionParent 			= $( 'li.' + sParentAccordionClass, oMenuMobile );

    /**
    * Open/close accordions
    */
    oAccordionParent.find( '> a' ).on( 'click', function(e ) {

    	// Prevent default anchor behaviour
    	e.preventDefault();

    	// Current accordion interaction
    	var oThisAccordion			= $( this ).closest( oAccordionParent );

    	// Check if accordion is already open
    	if ( oThisAccordion.hasClass( sActiveAccordionClass ) ) {

    		// Close accordion
    		fnCloseAccordion( oThisAccordion )

    	} else {

    		// Open new accordion
    		fnOpenAccordion( oThisAccordion )

    		// Close sibling accordions
    		fnCloseAccordion( oThisAccordion.siblings( 'li.' + sParentAccordionClass ) )

    	}

    });


    /**
    * Accordion functions
    */

    /* Open accordion */
    function fnOpenAccordion( oAccordion ) {

    	oAccordion
    		.addClass( sActiveAccordionClass )
    			.find( '> ul' )
    				.css( 'opacity', 0 )
    				.slideDown( 'slow' )
    				.animate(
    					{ opacity: 1 },
    					{ queue: false, duration: 'slow' }
    				);

    }

    /* Close accordion */
    function fnCloseAccordion( oAccordion ) {

    	oAccordion
    		.removeClass( sActiveAccordionClass )
    		.find( '> ul' )
    			.slideUp( 'slow' )
    			.animate(
    				{ opacity: 0 },
    				{ queue: false, duration: 'slow' }
    			);

    }


    /***************
    * Scroll functions
    ***************/

    /* Disable body scroll */
    function fnDisableBodyScroll() {

        $( 'html, body' ).css({
            overflow: 'hidden',
            height: '100%'
        });

    }

    /* Restore body scroll */
    function fnRestoreBodyScroll() {

        $( 'html, body' ).css({
            overflow: 'auto',
            height: 'auto'
        });

    }


}



// END OF DOCUMENT
