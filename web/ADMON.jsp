<%-- 
    Document   : ADMON
    Created on : 8/11/2018, 07:42:30 AM
    Author     : SENA
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="css/admon.css">
        <link rel="stylesheet" type="text/css" href="css/menu.css">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
           <style > 
            .bo{
     background-image: url(css/imgd/holqa.jpg);
    
	background-size:100%;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
	background-attachment:fixed;
        text-align: center;
}
    </style> 
    </head>
    <body class="bo"> 
        <div class="cont">
        <div class="content col-xs-12 div">
         <header class="topo header">
            <h1 class="alinhaLeft h1">
                <div class="logo"></div>
                <a href="index.html" class="a"><i class="fa fa-code"></i>CLUB SERREZUELA</a>
            </h1>
            <input type="checkbox" id="control-nav" class="input"/>
            <label for="control-nav" class="control-nav label"></label>
            <label for="control-nav" class="control-nav-close label"></label>

            <nav class="alinhaRight nav">
               <ul class="list-auto ul">
                  <li class="li"><a href="Caddie.jsp" class="a"><i class="fa fa-home "></i>Caddie</a></li>
                   <li class="li"><a href="Cliente.jsp" class="a"><i class="fa fa-home "></i>Cliente</a></li>
                  <li class="li"><a href="Cliente_Caddie.jsp" class="a"><i class="fa fa-home "></i>Solicitud Caddie</a></li>
                  <li class="li"><a href="Empleado.jsp" class="a"><i class="fa fa-home "></i>Empleado</a></li>
                  <li class="li"><a href="Evento.jsp" class="a"><i class="fa fa-home "></i>Eventos</a></li>
                  <li class="li"><a href="PreguntaxEncuesta.jsp" class="a"><i class="fa fa-home "></i>Pregunta por Encuesta</a></li>
                  <li class="li"><a href="Roles.jsp" class="a"><i class="fa fa-home "></i>Roles</a></li>
                  <li class="li"><a href="ServicioEmpleado.jsp" class="a"><i class="fa fa-home "></i>Servicios De Empleados</a></li>
                  <li class="li"><a href="FichaPuntuacion.jsp" class="a"><i class="fa fa-user"></i>Ficha de juego</a></li>
                  <li class="li"><a href="preguntaxrespuesta.jsp" class="a"><i class="fa fa-home "></i>pregunta por respuesta</a></li>
                  <li class="li"><a href="clienteficha.jsp" class="a"><i class="fa fa-user"></i>Ficha Cliente</a></li>
                  <li class="li"><a href="tipoPQRS.jsp" class="a"><i class="fa fa-home "></i>Tipo PQRS</a></li>
                  <li class="li"><a href="usuario.jsp" class="a"><i class="fa fa-home "></i>Usuario</a></li>
                  <li class="li"><a href="PQRS.jsp" class="a"><i class="fa fa-lightbulb-o"></i>PQRS</a></li>
                  <li class="li"><a href="Servicio.jsp" class="a"><i class="fa fa-code"></i>Servicios</a></li>
                  <li class="li"><a href="Lugar.jsp" class="a"><i class="fa fa-envelope-o"></i>Lugares</a></li>
                  <li class="li"><a href="Evento.jsp" class="a"><i class="fa fa-envelope-o"></i>Encuestas</a></li>
               </ul>
            </nav>
         </header>
        </div>
        </div>
        
        <br><br>
        <header class="mo">Noticias</header>


<div id="slider">
  <div class="slides">
      
      
    <div class="slider">
      <div class="legend"></div>
      <div class="contento">
        <div class="content-txt">
              <h1>Serrezuela Country Club</h1>
          <h2>El Serrezuela Country Club ofrece  a sus clientes  la mejor calidad de vida  Brinfdando bienestar, comodidad, descanso y privacidad en medio de la naturaleza contamos con 635.000 metros cuadrados, Prestando los mejores Servicios.</h2>
        </div>
      </div>
      <div class="image">
          <img class="um" src="imagen/INICIO.jpg">
      </div>
    </div>
      
     <div class="slider">
      <div class="legend"></div>
      <div class="contento">
        <div class="content-txt">
          <h1>UMB GOLF</h1>
          <h2>Tercer Torneo de SCRAMBLE (por parejas)Valor de Inscripcion 260.000 Incluye: Almuerzo, Refrigerio, Premiacion.</h2>
        </div>
      </div>
      <div class="image">
        <img class="um" src="imagen/slider2.jpg">
      </div>
    </div>
      
    <div class="slider">
      <div class="legend"></div>
      <div class="contento">
          <div class="content-txt">
          <h1>Torneo Selectivo Kids</h1>
          <h2>El Selectivo entregará 19 cupos para los equipos que representarán a Colombia en el U.S. Kids Golf World Championship 2018, evento que se jugará en Pinehurst (Carolina del Norte, Estados Unidos) entre el 2 y el 4 de agosto de 2018, y la categoría Teen World que se realizará entre el 26 y 28 de julio de 2018. </h2>
          </div>
         </div>
      <div class="image">
        <img class="um" src="imagen/Selectivo-UsKids-18-Afiche01.jpg">
      </div>
    </div>
      
    <div class="slider">
      <div class="legend"></div>
      <div class="contento">
        <div class="content-txt">
        <h1>Torneo Internacional de Golf</h1>
          <h2>El Venezolano Alejandro Restrepo y la Peruana Micaela farah se quedaron con los titulos de la segunda edicion del torneo Internacional Aficionado dfel Golf que se llevo acabo del 9 al 12 de Agosto del 2018.</h2>
      </div>
      </div>
       <div class="image">
        <img class="um" src="imagen/AficheSerrezuela.jpg">
      </div>
    </div>
</div>
</div>
            
    
  
</body>
</html>
