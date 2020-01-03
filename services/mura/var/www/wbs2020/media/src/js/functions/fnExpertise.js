/**************************************************************
* Handles all code relating to the expertise partial
**************************************************************/

function fnExpertise( i, oPartial ) {

    $( '.expertise-caption-items li', oPartial ).hover( function() {

        var iId                 = $( this ).attr( 'id' ),
            oElement            = $( '#item' + iId );

        $( '.expertise-content-item', oPartial ).removeClass( 'active' );
        oElement.addClass( 'active' );

    });

}


// END OF DOCUMENT
