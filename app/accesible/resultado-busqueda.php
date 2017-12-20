<?php include'header.php' ?>

	<section id="tramites">
		<div class="container">
			
			<!-- el numero de la cantidad de resultados tiene que ir en el hr y en el aria label -->
			<div aria-label="Se encontraron 55 resultados" id="tramites-consultados">
				<h3>Se encontraron 55 resultados</h3>

				<div><a href="#busqueda" aria-label="Para volver a buscar presioná ENTER, sino avanzar para leer resultados"></a></div>

				<ul role="group">
					<li><a target="_blank" href="http://www.santafe.gov.ar/index.php/tramites/modul1/index?m=descripcion&id=162438">Solicitud de turno para tramitar el DNI</a></li>
					<li><a target="_blank" href="http://www.santafe.gov.ar/index.php/web/guia/portal_compras">Gestiones de compras</a></li>
					<li><a target="_blank" href="http://www.santafe.gov.ar/index.php/tramites/modul1/index?m=descripcion&id=95212">Impuesto Inmobiliario: Impresión de Boletas</a></li>
					<li><a target="_blank" href="http://www.santafe.gov.ar/index.php/web/apps/sie">Sistema de información de expedientes</a></li>
					<li><a target="_blank" href="http://www.santafe.gov.ar/index.php/tramites/modul1/index?m=descripcion&id=95213">Patente Única sobre Vehículos: Impresión de Boletas</a></li>
					<li><a target="_blank" href="http://www.santafe.gov.ar/index.php/web/guia/convocatorias">Concursos y selección de personal</a></li>
					<li><a target="_blank" href="http://www.santafe.gov.ar/index.php/tramites/modul1/index?m=descripcion&id=217165">IAPOS-Órdenes: Impresión de órdenes de consulta y bonos asistenciales sin cargo</a></li>
					<li><a target="_blank" href="http://www.santafe.gov.ar/index.php/tramites/modul1/index?m=descripcion&id=125329">Impuesto de Sellos y Tasas Retributivas de Servicios</a></li>
					<li><a target="_blank" href="http://www.santafe.gov.ar/index.php/tramites/modul1/index?m=descripcion&id=169472">IAPOS: Consulta de cobertura de medicamentos e impresión de recetario</a></li>
				</ul>
			</div>

			<div class="pagination">
                <ul class="page-numbers">
                    <li><a class="prev page-numbers" aria-label="Ir a página anterior" href="#"><i class="icon-left"></i></a></li>
                    <li><a class="page-numbers" href="#">1</a></li>
                    <li><span class="page-numbers current">2</span></li>
                    <li><a class="page-numbers" href="#">3</a></li>
                    <li><span class="page-numbers dots">&hellip;</span></li>
                    <li><a class="page-numbers" href="#">8</a></li>
                    <li><a class="next page-numbers" aria-label="Ir a página siguiente" href="#"><i class="icon-right"></i></a></li>
                </ul>
            </div>
            <!--/pagination-->

			<form class="search-tramites" action="resultado-busqueda.php">
				<input type="text" id="busqueda" class="box" placeholder="Escriba el trámite que está buscando">
				<i class="icon-search"></i>
				<input type="submit" class="submit" aria-label="Buscar trámite" value="">
			</form>
		</div>
	</section>

<?php include'footer.php' ?>