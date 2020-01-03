/**************************************************************
* Application steps (masonry)
**************************************************************/

function fnApplicationSteps( i, oSection ) {

    var oSection                = $( oSection ),
        oList                   = $( 'main.list', oSection );

    /**
    * Masonry layout
    * https://masonry.desandro.com
    */
    oList.masonry({
        columnWidth:            '.grid-sizer',
        gutter:                 '.gutter-sizer',
        itemSelector:           'article.item',
        percentPosition:        true,
        fitWidth:               true,
    });

}



// END OF DOCUMENT
