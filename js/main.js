
         $(document).ready(function(){
           // Initialize image slider
            var scroll_start = 0;
            var startchange = $('#startchange');
            var offset = startchange.offset();
            $(document).scroll(function() { 
               scroll_start = $(this).scrollTop();
               if(scroll_start > offset.top) {
                   $('#navbar').css('background-color', 'green');
                } else {
                   $('#navbar').css('background-color', 'transparent');
                }
            });
         
         // $(function() {
         //   $('a[href*=#]').on('click', function(e) {
         //     e.preventDefault();
         //     $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
         //   });
         // });
         
           $('.bxslider').bxSlider({
           minSlides: 3,
           maxSlides: 5,
           moveSlides: 1
         });
         
         
         // $( window ).resize(function () {
         //   bxSlider.reloadSlider();
         // });
         
         
         
         // video player
         $('.video').parent().click(function () {
             if($(this).children(".video").get(0).paused){
                 $(this).children(".video").get(0).play();
                 $(this).children(".playpause").fadeOut();
             }else{
                $(this).children(".video").get(0).pause();
                 $(this).children(".playpause").fadeIn();
             }
         });
         
         
         
           // Add smooth scrolling to all links in navbar + footer link
           $(".navbar a, footer a[href='#myPage']").on('click', function(event) {
         
             // Make sure this.hash has a value before overriding default behavior
             if (this.hash !== "") {
         
               // Prevent default anchor click behavior
               event.preventDefault();
         
               // Store hash
               var hash = this.hash;
         
               // Using jQuery's animate() method to add smooth page scroll
               // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
               $('html, body').animate({
                 scrollTop: $(hash).offset().top
               }, 900, function(){
            
                 // Add hash (#) to URL when done scrolling (default click behavior) https://codepen.io/nxworld/pen/OyRrGy
                 window.location.hash = hash;
               });
             } // End if
           });
         })
         
         
         
      