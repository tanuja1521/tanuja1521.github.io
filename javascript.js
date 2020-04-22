
      // Scrolling Effect
      $(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});

      $(window).on("scroll", function() {
            if($(window).scrollTop()) {
                  $('nav').addClass('navbar-dark bg-dark');

            }

            else {
                  $('nav').removeClass('navbar-dark bg-dark');
                  //alert("got");
            }
      })

