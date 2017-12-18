<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <meta name="theme-color" content="#e6e6e6" />    
	<title>Gobierno de Santa Fe - Portal</title>
    <link rel="icon" href="favicon.ico" />
    <link rel="stylesheet" media="all" href="css/screen.css?v=1" />
    <link rel="stylesheet" media="all" href="css/weather-icons.min.css" />
</head>
<body class="en-vivo-page">

<header id="site-header">

	<!-- Este bloque va si hay una sola transmisión en vivo-->
	<!--<a href="#" target="_blank" class="transmision-vivo">
	  	<div class="container">
	  		<div class="transmision-table">
				<div class="transmision-col"><p class="en-vivo">En vivo</p></div>
				<div class="transmision-col"><strong class="ver-ahora">Ver ahora <i class="icon-right"></i></strong></div>
				<div class="transmision-col">
					<ul>
						<li><p class="transmision-legend"><i class="icon-youtube"></i><span>Conferencia de prensa del Gobernador Miguel Lifschitz</span></p></li>
					</ul>
				</div>
			</div>
		</div>
	</a>-->	

	<!--Este bloque va si hay mas de una transmision en vivo al mismo tiempo-->
	<div class="transmision-vivo">
	  	<div class="container">
	  		<div class="transmision-table">
				<div class="transmision-col"><p class="en-vivo">En vivo</p></div>
				<div class="transmision-col"><strong class="ver-ahora">Ver ahora <i class="icon-right"></i></strong></div>
				<div class="transmision-col">
					<ul>
						<li><a href="#" target="_blank" class="transmision-legend"><i class="icon-youtube"></i><span>Conferencia de prensa del Gobernador Miguel Lifschitz</span></a></li>
						<li><a href="#" target="_blank" class="transmision-legend"><i class="icon-youtube"></i><span>La provincia entreg&oacute; anticipos financieros a 35 localidades para la construcción</span></a></li>
						<li><a href="#" target="_blank" class="transmision-legend"><i class="icon-youtube"></i><span>Analizan el estado de las obras escolares en ejecuci&oacute;n que dependen de la Naci&oacute;n</span></a></li>
					</ul>
				</div>
				<!--/transmision-col-->
			</div>
			<!--/transmision-table-->
		</div>
		<!--/container-->
	</div>
	<!--/transmision-vivo-->

	<div class="header-bar">
		<div class="container">
			<h1 class="site-logo logo-header"><a href="#">Portal del Gobierno de Santa Fe</a></h1>	    
		    <ul class="nav-icons-mobile">
	            <li><a class="search-link" href="#"><i class="icon-search"></i></a></li>
	            <li><a href="#" class="btn-hamburger"><span>&nbsp;</span></a></li>
	        </ul>
			<!--/nav-icons-mobile-->
	        <form action="#" class="search-form">
				<input type="text" name="q" id="q" placeholder="Buscar..." />
				<span class="btn-search"><i class="icon-search"></i></span>
				<input type="submit" class="submit-search" value="" />
			</form>
			<!--/search-form-->
	        <div class="nav-mobile">
	        	<div class="nav-mobile-content">
					<div class="options-nav">
						<ul class="social-header">
							<li><a href="http://google.com" lang="es" tabindex="1" aria-label="Hola! Presioná ENTER si querés acceder al portal accesible de santafe.gob.ar" class="link"><i class="icon-accesibilidad"></i></a></li>
							<li><a href="#" class="divider-link"><i class="icon-mail"></i></a></li>
							<li><a href="#" class="search-link"><i class="icon-search"></i></a></li>
							<li><a href="https://www.facebook.com/GobSantaFe" target="_blank"><i class="icon-facebook"></i></a></li>
							<li><a href="https://twitter.com/GobSantaFe" target="_blank"><i class="icon-twitter"></i></a></li>
							<li><a href="https://www.youtube.com/user/GobSantaFe" target="_blank"><i class="icon-youtube"></i></a></li>
						</ul>
						<!--/social-header-->
						<div class="weather-dropdown btn-submenu">
							<!--<a href="#"><i class="wi wi-day-cloudy"></i></a>-->
							<a href="#" class="icon-weather-alert"><i class="wi wi-night-lightning"></i></a>							
							<div class="weather-alert">Alerta metereol&oacute;gica</div>
							<div class="weather submenu">
								<div class="header-clima"> 
									<p class="current-day">Lunes 1 de agosto de 2016</p>
									<a href="#" class="clima-details">Estaciones Agrometeorológicas</a>
									<span class="clima-updated">Datos actualizados a las 18:40hs</span>
								</div>
								<!--/header-clima-->
								<ul class="list-clima-region">
									<li class="item-clima-region region-1">
										<p class="title-region">Region 1</p>
										<div class="clima-details">
											<h4 class="clima-title">Reconquista</h4>
											<div class="current-day-box">
												<div class="clima-icon-state">
													<i class="wi wi-day-sunny"></i>
												</div>
												<!--/clima-icon-state-->
												<div class="clima-current-temp">
													<p class="apparent">18 °</p>
													<p class="current-summary">11 ° / 21°</p>
												</div>
												<!--/clima-current-temp-->
												<p class="current-summary">Despejado</p>
											</div>
											<!--/current-day-->
										</div>
										<!--/clima-details-->
										<div class="clima-next">
											<p>Martes <span>7 ° / 22° </span></p>
										</div>
										<!--/clima-next-->
										<div class="clima-next">
											<p>Miercoles <span>7 ° / 22° </span></p>
										</div>
										<!--/clima-next-->
									</li>
									<!--/item-clima-region-->
									<li class="item-clima-region region-2">
										<p class="title-region">Region 2</p>
										<div class="clima-details">
											<h4 class="clima-title">Rafaela</h4>
											<div class="current-day-box">
												<div class="clima-icon-state">
													<i class="wi wi-day-cloudy"></i>
												</div>
												<!--/clima-icon-state-->
												<div class="clima-current-temp">
													<p class="apparent">18 °</p>
													<p class="current-summary">11 ° / 21°</p>
												</div>
												<!--/clima-current-temp-->
												<p class="current-summary">Despejado</p>
											</div>
											<!--/current-day-->
										</div>
										<!--/clima-details-->
										<div class="clima-next">
											<p>Martes <span>7 ° / 22° </span></p>
										</div>
										<!--/clima-next-->
										<div class="clima-next">
											<p>Miercoles <span>7 ° / 22° </span></p>
										</div>
										<!--/clima-next-->
									</li>
									<!--/item-clima-region-->
									<li class="item-clima-region region-3">
										<p class="title-region">Region 3</p>
										<div class="clima-details">
											<h4 class="clima-title">Santa Fe</h4>
											<div class="current-day-box">
												<div class="clima-icon-state">
													<i class="wi wi-day-rain"></i>
												</div>
												<!--/clima-icon-state-->
												<div class="clima-current-temp">
													<p class="apparent">18 °</p>
													<p class="current-summary">11 ° / 21°</p>
												</div>
												<!--/clima-current-temp-->
												<p class="current-summary">Despejado</p>
											</div>
											<!--/current-day-->
										</div>
										<!--/clima-details-->
										<div class="clima-next">
											<p>Martes <span>7 ° / 22° </span></p>
										</div>
										<!--/clima-next-->
										<div class="clima-next">
											<p>Miercoles <span>7 ° / 22° </span></p>
										</div>
										<!--/clima-next-->
									</li>
									<!--/item-clima-region-->
									<li class="item-clima-region region-4">
										<p class="title-region">Region 4</p>
										<div class="clima-details">
											<h4 class="clima-title">Rosario</h4>
											<div class="current-day-box">
												<div class="clima-icon-state">
													<i class="wi wi-day-storm-showers"></i>
												</div>
												<!--/clima-icon-state-->
												<div class="clima-current-temp">
													<p class="apparent">18 °</p>
													<p class="current-summary">11 ° / 21°</p>
												</div>
												<!--/clima-current-temp-->
												<p class="current-summary">Despejado</p>
											</div>
											<!--/current-day-->
										</div>
										<!--/clima-details-->
										<div class="clima-next">
											<p>Martes <span>7 ° / 22° </span></p>
										</div>
										<!--/clima-next-->
										<div class="clima-next">
											<p>Miercoles <span>7 ° / 22° </span></p>
										</div>
										<!--/clima-next-->
									</li>
									<!--/item-clima-region-->
									<li class="item-clima-region region-5">
										<p class="title-region">Region 5</p>
										<div class="clima-details">
											<h4 class="clima-title">Venado Tuerto</h4>
											<div class="current-day-box">
												<div class="clima-icon-state">
													<i class="wi wi-day-cloudy"></i>
												</div>
												<!--/clima-icon-state-->
												<div class="clima-current-temp">
													<p class="apparent">18 °</p>
													<p class="current-summary">11 ° / 21°</p>
												</div>
												<!--/clima-current-temp-->
												<p class="current-summary">Despejado</p>
											</div>
											<!--/current-day-->
										</div>
										<!--/clima-details-->
										<div class="clima-next">
											<p>Martes <span>7 ° / 22° </span></p>
										</div>
										<!--/clima-next-->
										<div class="clima-next">
											<p>Miercoles <span>7 ° / 22° </span></p>
										</div>
										<!--/clima-next-->
									</li>
									<!--/item-clima-region-->
								</ul>
								<!--/list-clima-region-->
								<div class="footer-clima">
									<a href="#" class="btn-weather-alert"><i class="wi wi-night-lightning"></i>Alerta metereol&oacute;gica <span>Ver mas informaci&oacute;n</span></a>
								</div>
							</div>
						</div>
						<!--/weather-dropdown-->
						<div class="select-language btn-submenu">
							<a href="#">Es<span class="hide-mobile">pa&ntilde;ol</span></a>			
							<ul class="submenu">
								<li><a href="#">En<span class="hide-mobile">glish</span></a></li>
								<li><a href="#">Po<span class="hide-mobile">rtugu&eacute;s</span></a></li>
							</ul>
							<!--/submenu-->
						</div>
						<!--/select-langueage-->
					</div>
					<!--/options-nav-->
					<nav class="main-nav">
						<ul>
							<li class="btn-submenu">Provincia
								<ul class="submenu">
									<li><a href="#">Información básica</a></li>
									<li><a href="#">Organización del Estado</a></li>
									<li><a href="#">Municipios y Comunas</a></li>
									<li><a href="#">Turismo</a></li>
									<li><a href="#">Estadísticas</a></li>
								</ul>
								<!--/submenu-->
							</li>
							<li class="btn-submenu">Gobierno
								<ul class="submenu">
									<li><a href="#">Ambiente</a></li>
									<li><a href="#">Ciencia y Tecnología</a></li>
									<li><a href="#">Cultura</a></li>
									<li><a href="#">Desarrollo Social</a></li>
									<li><a href="#">Economía y Finanzas</a></li>
									<li><a href="#">Educación</a></li>
									<li><a href="#">Energía</a></li>
									<li><a href="#">Hábitat y Vivienda</a></li>
									<li><a href="#"> Infraestructura y Obras</a></li>
									<li><a href="#">Justicia y Derechos Humanos</a></li>
									<li><a href="#">Modernización del Estado</a></li>
									<li><a href="#">Producción</a></li>
									<li><a href="#">Salud</a></li>
									<li><a href="#">Seguridad</a></li>
									<li><a href="#">Trabajo</a></li>
								</ul>
								<!--/submenu-->
							</li>
							<li class="btn-submenu">Ejes
								<ul class="submenu">
									<li><a href="#">Plan estratégico provincial</a></li>
									<li><a href="#">Plan de obras</a></li>
									<li><a href="#">Plan Abre Familia</a></li>
									<li><a href="#">Plan del Norte</a></li>
									<li><a href="#">Acuerdo Capital</a></li>
									<li><a href="#">Bases para la reforma</a></li>
									<li><a href="#">Transparencia</a></li>
									<li><a href="#">Plan Abre Vida</a></li>
								</ul>
								<!--/submenu-->                                        
							</li>
							<li class="btn-submenu">Servicios
								<ul class="submenu">
									<li><a href="#">Portal de Trámites</a></li>
									<li><a href="#">Búsqueda de normativa</a></li>
									<li><a href="#">Información sobre impuestos</a></li>
									<li><a href="#">Concurso y selección de personal</a></li>
									<li><a href="#">Expedientes</a></li>
									<li><a href="#">Santa Fe Responde</a></li>
									<li><a href="#">Reportes Ciudadanos</a></li>
									<li><a href="#">Jubilaciones y Pensiones</a></li>
									<li><a href="#">Intranet</a></li>
									<li><a href="#">Personal del estado</a></li>
								</ul>
								<!--/submenu-->
							</li>
						</ul>
					</nav>
					<!--/main-nav-->
				</div>
				<!--/nav-mobile-content-->
			</div>
			<!--/nav-mobile-->
		</div>
		<!--/container-->
	</div>
</header>
<!--/site-header-->
