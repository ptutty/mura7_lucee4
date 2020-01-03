/**************************************************************
* Events index
**************************************************************/

function fnEventsIndex( i, oSection ) {

    var oSection                = $( oSection ),
        oToggleButton           = $( 'aside.filters header.mobile-toggle', oSection ),
        oFilters                = $( 'main.form', oSection ),
        oEvent                  = $( 'article.event', oSection ),
        oModal                  = $( '.modal .filters' ),
        oModalFilterGroup       = $( '.input-group > .title', oModal );

    /**
    * Open/click modal accordions
    */
    oModalFilterGroup.on( 'click', function() {

        var oParentGroup        = $( this ).closest( '.input-group' );

        if ( oParentGroup.hasClass( 'open' ) ) {

            oParentGroup.removeClass( 'open' );

            oParentGroup
                .find( '.group-list' )
                    .removeClass( 'open' )
            			.slideUp( 'slow' )
            			.animate(
            				{ opacity: 0 },
            				{ queue: false, duration: 'slow' }
            			);

        } else {

            oParentGroup.addClass( 'open' );

            oParentGroup
                .find( '.group-list' )
                    .addClass( 'open' )
        				.css( 'opacity', 0 )
        				.slideDown( 'slow' )
        				.animate(
        					{ opacity: 1 },
        					{ queue: false, duration: 'slow' }
        				);

        }

    });

    /**
    * Open/click menu
    */
    oToggleButton.on( 'click', function() {

        if ( oFilters.hasClass( 'open' ) ) {

            oToggleButton.removeClass( 'open' );

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

    /**
    * More info accordions
    */
    oEvent.each( function() {

        var oThisEvent          = $( this ),
            oAccordionToggle    = $( '.more-info', oThisEvent ),
            oAccordionContent   = $( '.description', oThisEvent );

        // Hide content
        oAccordionContent.hide();

        // Click to hide/show content
        oAccordionToggle.on( 'click', function() {

            if ( $( this ).hasClass( 'expanded' ) ) {

                $( this ).removeClass( 'expanded' );
                $( this ).find( 'span' ).text( 'More info' );
                oAccordionContent.fadeOut();

            } else {

                $( this ).addClass( 'expanded' );
                $( this ).find( 'span' ).text( 'Less info' );
                oAccordionContent.fadeIn();

            }

        });

    });


}



// END OF DOCUMENT
