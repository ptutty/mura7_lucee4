<cfoutput>

<!doctype html>
<html lang="en">
<cfinclude template="inc/html_head.cfm" />

<body>

	<main id="top" class="base">


		<!--
		::: Modal
		::: Every modal must have a unique ID.
		-->

		<!-- <div data-partial="div.modal" data-class=""></div> -->
		

		<!--
		::: Header
		-->

		<!-- <div data-partial="header.primary" data-class=""></div> -->
		<cfinclude template="inc/header.primary.cfm" />


		<div class="overlay--search"></div>


		<!--
		::: Template partials
		-->
		
		<main class="base-content">

			<!-- Hero -->
			<!-- <div data-partial="section.home-hero" data-class=""></div> -->
			<cfinclude template="inc/home-hero.cfm" />

			<!-- About -->
			<!-- <div data-partial="section.about-section" data-class=""></div> -->
			<cfinclude template="inc/about-section.cfm" />

			<!-- Ratings -->
			<!-- <div data-partial="section.our-ratings-section" data-class=""></div> -->
			<cfinclude template="inc/our-ratings-section.cfm" />

			<!-- Programmes -->
			<!-- <div data-partial="section.programmes-section" data-class="no-bottom-padding"></div> -->
			<cfinclude template="inc/programmes-section.cfm" />

			<!-- London programme animate -->
			<!-- <div data-partial="section.programme-animate-section" data-class=""></div> -->
			<cfinclude template="inc/programme-animate-section.cfm" />

			<!-- Expertise -->
			<!-- <div data-partial="section.expertise-section" data-class=""></div> -->
			<cfinclude template="inc/expertise-section.cfm" />

			<!-- News/events showcase -->
			<!-- <div data-partial="section.news-events-showcase" data-class=""></div> -->
			<cfinclude template="inc/news-events-showcase.cfm" />

			<!-- Subscribe -->
			<!-- <div data-partial="section.subscribe-section" data-class=""></div> -->
			<cfinclude template="inc/subscribe-section.cfm" />

		</main>


		<!--
		::: Footer
		-->

		<!-- <div data-partial="footer.primary" data-class=""></div> -->
		<cfinclude template="inc/footer.primary.cfm" />


	</main>


	<!-- Social networks (fixed) -->
	<div data-partial="ul.social-networks-fixed" data-class=""></div>


	<!-- jQuery -->
	<script
	src="https://code.jquery.com/jquery-3.4.1.min.js"
	integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
	crossorigin="anonymous"></script>

	<!-- Global javascript  -->
	<script type='text/javascript' src='wbs2020/media/dist/js/global.min.js'></script>
	
</body>

</cfoutput>