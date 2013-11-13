$(document).ready(function() {  
  $(function() {
        $('.direction a').bind('click',function(event){
            var $anchor = $(this);
            
            $('html, body').stop().animate({
                scrollLeft: $($anchor.attr('href')).offset().left
            }, 600);
            event.preventDefault();
        });
  });
  $("#one-page-wrap").onepage_scroll({
     sectionContainer: "section", 
     easing: "ease",
     animationTime: 600,
     pagination: false,
     updateURL: true
   });
   $("h1").fitText(.4);
});