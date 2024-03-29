$(function(){
	function timeConverter(UNIX_timestamp, format){
	 var a = new Date(UNIX_timestamp*1000);
	 var months = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
	 var days = ['Domingo', 'Lunes', 'Martes','Miercoles','Jueves','Viernes','Sabado']
	     var year = a.getFullYear();
	     var month = months[a.getMonth()];
	     var date = a.getDate();
	     var day = days[a.getDay()];
	     var hour = a.getHours();
	     var min = a.getMinutes();
	     var sec = a.getSeconds();
	     if (format == 1){
	     	var time = day + ' '+ date + ' de ' + month + '  de ' + year ;
	     }
	     if(format == 2){
	     	var time = hour + ':' + min + '' ;
	     }
	     if(format == 3){
	     	var time = day ;
	     }
	     
	     return time;
	 }

	var url = "/design/plain2/services/ClienteApiClima.php"; //'clima.json';
	var regiones = ['RECONQUISTA','RAFAELA','SANTAFE','ROSARIO','VENADOTUERTO'];
	var regiones_nombre = ['RECONQUISTA','RAFAELA','SANTA FE','ROSARIO','VENADO TUERTO'];

	$.ajax(url,{
		dataType: 'json',
		method:'get',
		success: function(data){

			var html = '';
			for(var i = 0 ;  i < regiones.length ; i++){
				var json = $.parseJSON(data[regiones[i]]);
				//console.log(json);
					html  += '<div class="box-clima"><div class="clima-region region-'+(i+1)+'">Region '+(i+1)+'</div><div class="clima-details"><h4 class="clima-title">'+regiones_nombre[i]+'</h4>'
					html += '<div class="current"><div class="pull-left clima-icon-state"><div class="'+json.currently.icon+'"></div></div><div class="pull-right clima-current-temp"><div class="apparent">'+Math.ceil(json.currently.apparentTemperature)+' &deg;</div><p class="current-summary">'+ Math.floor(json.daily.data[0].temperatureMin) + ' &deg; / '+ Math.ceil(json.daily.data[0].temperatureMax) + '&deg;</p></div><p class="current-summary">'+json.currently.summary+'</p></div>';

					html += '<div class="clima-next"><p>'+timeConverter(json.daily.data[1].time,3)+' <span class="pull-right">'+ Math.floor(json.daily.data[1].temperatureMin) + ' &deg; / '+ Math.ceil(json.daily.data[1].temperatureMax) + '&deg; </span></p></div>';
					html += '<div class="clima-next"><p>'+timeConverter(json.daily.data[2].time,3)+' <span class="pull-right">'+ Math.floor(json.daily.data[2].temperatureMin) + ' &deg; / '+ Math.ceil(json.daily.data[2].temperatureMax) + '&deg; </span></p></div>';
					html += '</div></div>';

			}
			var output = '<div class="header-clima"> <h2 class="pull-left">'+timeConverter(json.currently.time,1)+'</h2> <span class="clima-updated pull-right">Datos actualizados a las '+timeConverter(json.currently.time,2)+'hs</span></div>' + html;
                           

                        //verifico si hay alerta para agregar otro bloque                                                    
                        output = output + '<br><a style="display:inline" href="//santafe.gob.ar/index.php/content/view/full/154569">Ver m\u00e1s datos...</a>';
                        

			$('.weather').html(output);			
                        
                        
                        
		}
	});
});
