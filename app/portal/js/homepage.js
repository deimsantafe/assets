$(document).ready(function() {

    $('.search-link').on('click', function(ev){

	console.log("click capturado");

      ev.preventDefault();
      $(this).hide();
      $('.search-form').show();
      $('#q').focus();
    });
    $('#q').on('blur', function(){
      $('.search-link').show();
      $('.search-form').hide();
    });
      
    /*
    if($('.alerta_clima').size()> 0 ){
      $('.alerta_clima').fadeIn(1400, function(){
        setTimeout(function(){
          $('.alerta_clima').fadeOut(1400);
        }, 5000);
      });
    }
    */
    //carga de videos que se encuentran transmitiendo para mostrar en la marquesina
    
    $.get("/index.php/guia/vivoTransmision", function(data) {
        
        if (data.estado === true){ //existen transmisiones en vivo
            
            $.each(data.link,function(indice,valor) {
                $(".links-video").append(valor);
              });
              
            $("#transmision_vivo").css("display", "block");
            $("#transmision_vivo").css("visibility", "visible");

            $('.live-legend marquee').marquee('pointer').mouseover(function () {
                $(this).trigger('stop');
            }).mouseout(function () {
                $(this).trigger('start');
            }).mousemove(function (event) {
                if ($(this).data('drag') == true) {
                    this.scrollLeft = $(this).data('scrollX') + ($(this).data('x') - event.clientX);
                }
            }).mousedown(function (event) {
                $(this).data('drag', true).data('x', event.clientX).data('scrollX', this.scrollLeft);
            }).mouseup(function () {
                $(this).data('drag', false);
            });
        }
        else {
            //no existen transmisiones en vivo
            $("#transmision_vivo").css("display", "none");
            $("#transmision_vivo").css("visibility", "hidden");
        }
    }, 'json');
    
  $(".info-slide").owlCarousel({
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 3,
      itemsDesktop : [1199,3],
      itemsDesktopSmall : [1019,2], // betweem 900px and 601px
      itemsMobile: [510,1]  
 
  });
  
  $('.news-slider').owlCarousel({
    navigation : false,
    items:3,
    itemsDesktop : [1200,3], //5 items between 1000px and 901px
    itemsDesktopSmall : [1039,2], // betweem 900px and 601px
    itemsTablet: [768,2],
    itemsMobile: [510,1]
  });

  $("#slider").owlCarousel({
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true,
      navigationText: ['','<i class="icon-flechad"></i>']
  });
  $(".agenda-slider").owlCarousel({
      navigation : false, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 1000,
      singleItem:true,
      autoPlay: 5000
  });
 
});
