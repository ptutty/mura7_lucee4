/**************************************************************
* Temp function to load partials into templates
**************************************************************/

function fnLoadPartials() {

    var oPartials                   = $( '[data-partial]' ),
        iCountPartials              = oPartials.length;

    oPartials.each( function() {

        var sPartial                = $( this ).attr( 'data-partial' );

        if ( sPartial.length > 0 ) {

            $( this ).load( '/templates/partials/' + sPartial + '.html', function() {

                var sContent        = $( this ).html(),
                    oTarget         = $( sContent ),
                    classes         = oTarget.attr( 'class' ) + " " + $( this ).attr( 'data-class' );

                oTarget.attr( 'class', classes );
                $( this ).after( oTarget ).remove();

                if (!--iCountPartials) {
                    window.init();
                }

            });

        }

    });
}



// END OF DOCUMENT
