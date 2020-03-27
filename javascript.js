
      // Scrolling Effect

      $(window).on("scroll", function() {
            if($(window).scrollTop()) {
                  $('nav').addClass('navbar-dark bg-dark');

            }

            else {
                  $('nav').removeClass('navbar-dark bg-dark');
                  //alert("got");
            }
      })