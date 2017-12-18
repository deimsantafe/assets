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
    
    //carga de videos que se encuentran transmitiendo para mostrar en la marquesina
    
    $.get("/index.php/section_home/get_links_vivo", function(data) {
        if (data.url.length > 0 ) { //solo hay una transmision en vivo
                $('body').addClass('en-vivo-page');
                if (data.url.length === 1 ) { //solo hay una transmision en vivo
                    $("#site-header").prepend(
                        "<a href="+ data.url[0]['href'] +" id='transmision_vivo' target='_blank' title='"+data.url[0]['title']+"' class='transmision-vivo'>"+
                            "<div class='container'>" +
                                    "<div class='transmision-table'>" +
                                        "<div class='transmision-col'><p class='en-vivo'>En vivo</p></div>" +
                                        "<div class='transmision-col'><strong class='ver-ahora'>Ver ahora <i class='icon-right'></i></strong></div>" +
                                        "<div class='transmision-col'>" +
                                                "<ul>" +
                                                        "<li><p class='transmision-legend'><i class='icon-youtube'></i><span>"+ data.url[0]['titulo'] + "</span></p></li>" +
                                                "</ul>" +
                                        "</div>" +
                                    "</div>" +
                            "</div>" +
                        "</a>");
                } else { //existe mas de una transmision en vivo a la vez
                      var listLinks="";
                      $.each(data.url, function (indice) {
                               listLinks += "<li><a href=" + data.url[indice]['href'] + " target='_blank' title='"+data.url[indice]['title']+"' class='transmision-legend'><i class='icon-youtube'></i><span>"+ data.url[indice]['titulo'] + "</a></li>" ;
                        });  
                     $("#site-header").prepend(
                        "<div class='transmision-vivo'>" +
                                "<div class='container'>" +
                                        "<div class='transmision-table'>" +
                                                "<div class='transmision-col'><p class='en-vivo'>En vivo</p></div>" +
                                                "<div class='transmision-col'><strong class='ver-ahora'>Ver ahora <i class='icon-right'></i></strong></div>" +
                                                "<div class='transmision-col'>" +
                                                        "<ul>" +
                                                        listLinks +
                                                        "</ul>" +
                                                "</div>" +
                                        "</div>" +
                                "</div>" +                                
                        "</div>");
                }                
        }else {
            //no existen transmisiones en vivo
            $("#transmision_vivo").addClass('transmision-vivo-hide');

        }
    }, 'json');
    

 
});
