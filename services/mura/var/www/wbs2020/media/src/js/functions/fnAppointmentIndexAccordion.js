/**************************************************************
* Appointment accordions (mobile)
**************************************************************/

function fnAppointmentAccordion( i, oAccordion ) {

    var oAccordion              = $( oAccordion ),
        oAccordionButton        = $( 'header.toggle', oAccordion ),
        oAccordionContent       = $( 'main.inner', oAccordion );

    /**
    * Open/click menu
    */
    oAccordionButton.on( 'click', function() {

        if ( oAccordion.hasClass( 'open' ) ) {

            oAccordion
                .removeClass( 'open' )

            oAccordionContent
    			.slideUp( 'slow' )
    			.animate(
    				{ opacity: 0 },
    				{ queue: false, duration: 'slow' }
    			);

        } else {

            oAccordion
                .addClass( 'open' )

            oAccordionContent
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
