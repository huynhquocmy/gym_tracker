jQuery(document).ready(function() {		
		jQuery('.nav li.dropdown').click(function() { jQuery(this).addClass('open');   }}); 
		jQuery('ul.dropdown li.dropdown-submenu').click(function() { jQuery(this).addClass('open');	} });	
	   var bMobile;  // true if in mobile mode
		// Initiate event handlers
		function init() {
		  // .navbar-toggle is only visible in mobile mode
		  bMobile = jQuery('.navbar-toggle').is(':visible');
		  var oMenus = jQuery('.navbar-nav  .dropdown'),
			nTimer;
		  if (bMobile) {
			// Disable hover events for mobile
			oMenus.off();
		  } else {		  
			if(jQuery(window).width() > 1000) {
			// Set up menu hover for desktop mode
			oMenus.on({
			  'mouseenter touchstart': function(event) {
				event.preventDefault();
				clearTimeout(nTimer);
				oMenus.removeClass('open');
				jQuery(this).addClass('open').slideDown();
			  },
			  'mouseleave': function() {
				nTimer = setTimeout(function() {
				  oMenus.removeClass('open');
				}, 500);
			  }
			});
		  }
		}
		}
		jQuery(document).ready(function() {
		  // Your other code to run on DOM ready...
		  init();
		});
		jQuery(window).resize(init);
	});  