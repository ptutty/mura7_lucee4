/**************************************************************
* Team index
**************************************************************/

function fnTeamIndex( i, oSection ) {

    var oSection                = $( oSection ),
        oFeatured               = $( '.featured', oSection ),
        oListItem               = $( 'li.person', oSection );

    /**
    * Get height from top (for scroll hijacking)
    */
    var iFeaturedToTop          = oSection.offset().top;
    $( window ).resize( function () {
        iFeaturedToTop          = oSection.offset().top;
    });

    /**
    * Click person in list
    */
    oListItem.on( 'mousedown touchstart', function() {

        // Collect data of person
        var oThisPerson         = $( this ),
            sName               = oThisPerson.find( '.name' ).text(),
            sJob                = oThisPerson.find( '.job' ).text(),
            sBio                = oThisPerson.find( '.bio' ).html(),
            sLink               = oThisPerson.find( '.bio' ).attr( 'data-more' ),
            sPhotoUrl           = oThisPerson.find( 'figure.photo .src' ).attr( 'data-photo' );

        // Update featured with new data
        fnUpdateFeatured( sName, sJob, sBio, sLink, sPhotoUrl )

    });

    /**
    * Functions
    */
    function fnUpdateFeatured( sName, sJob, sBio, sLink, sPhotoUrl ) {

        // Get objects that need to be updated
        var oNames              = oFeatured.find( '.name' ),
            oJobs               = oFeatured.find( '.job' ),
            oBio                = oFeatured.find( '.bio' ),
            oLink               = oFeatured.find( '.permalink a' ),
            oPhoto              = oFeatured.find( 'aside.photo figure.image .src' );

        // Update objects
        oNames.text( sName );
        oJobs.text( sJob );
        oBio.html( sBio );
        oLink.attr( 'href', sLink );
        oPhoto.css( 'background-image','url(' + sPhotoUrl + ')' );

        // Scroll to featured
        // $( 'html, body' ).animate({
        //     scrollTop: iFeaturedToTop - 90
        // }, 400 );

    }

}



// END OF DOCUMENT
