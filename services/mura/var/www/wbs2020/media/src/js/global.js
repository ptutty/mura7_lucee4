( function( $ ) {
    'use strict';

    // Loads in the template partials & components
    fnLoadPartials();

    // Bind events to the loaded template files
    window.init = function() {

        // Remove "L Sep" (line seperator) symbol (bug)
        $( "body" ).children().each( function() {
            $( this ).html( $( this ).html().replace(/&#8232;/g," ") );
        });

        // In-view detection (visual lazy-loading)
        fnInViewDetect();

    	// Header: Primary navigation
		$( 'header.primary' ).each( fnHeaderPrimaryDesktopNav );
		$( 'header.primary' ).each( fnHeaderPrimaryMobileNav );

    	// Header: Search
		$( 'header.primary' ).each( fnHeaderPrimarySearch );

    	// Header: Sticky (on-scroll)
		$( 'header.primary' ).each( fnHeaderPrimarySticky );

    	// Expertise section
		$( 'section.expertise-section' ).each( fnExpertise );

    	// Section navigation menu
		$( 'nav.section-menu' ).each( fnNavSectionMenu );

    	// Sticky call-to-action buttons
		$( 'nav.sticky-cta' ).each( fnNavStickyCta );

    	// Programme index
		$( 'section.programme-index' ).each( fnProgrammesIndex );

    	// Events index
		$( 'section.events-index' ).each( fnEventsIndex );

    	// Team index
		$( 'section.team-index' ).each( fnTeamIndex );

    	// Tile call-to-action accordions (mobile)
		$( 'section.tile-ctas article.tile' ).each( fnTileCtaAccordion );

    	// Appointment accordions (mobile)
		$( 'article.appointment' ).each( fnAppointmentAccordion );

    	// Financial tabs (accordions mobile / tabs desktop)
		$( 'section.financial-tabs' ).each( fnFinancialTabs );

    	// Timeline tabs (accordions mobile / tabs desktop)
		$( 'section.timeline-tabs' ).each( fnTimelineTabs );

    	// Application steps (masonry)
		$( 'section.application-steps' ).each( fnApplicationSteps );

    	// Testimonial tabs
		$( 'section.testimonial-tabs' ).each( fnTestimonialTabs );

    	// Case study carousel
		$( 'section.case-study-carousel' ).each( fnCaseStudyCarousel );

		// Smooth hash anchors
		$( 'body' ).on( 'click', '.hash-link', fnScrollToID );

        // Add class to body when page is loaded
        $( 'body' ).addClass( 'page-loaded' );

	}

} ( jQuery ) );



// END OF DOCUMENT
