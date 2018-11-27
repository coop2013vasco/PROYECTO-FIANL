<%-- 
    Document   : Iniciocaddie
    Created on : 6/11/2018, 09:19:40 AM
    Author     : SENA
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
           <script type="text/javascript" src="js/jquery-3.3.1.min.js"></script>
	<script type="text/javascript" src="js/botones.js"></script>
        <link rel="stylesheet" type="text/css" href="css/admon.css">
        <link rel="stylesheet" type="text/css" href="css/menu.css">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Caddie</title>
        <meta charset="utf-8" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="Content-Language" content="en-GB" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="author" content="Adam Nicholson, Cobham plc" />
    <meta name="title" content="Archer Policy Dashboard" />
    <meta name="Description" content='Embedded webpage for the Policy dashboard in RSA Archer.' />
<!--
    <link rel="stylesheet" type="text/css" href="/RSAArcher/company_files/50000/HTML/Policy_webpage/archer-files">
    <script type="text/javascript" src="/RSAArcher/company_files/50000/HTML/Policy_webpage/archer-files"></script>
-->
    <link rel="stylesheet" href="/RSAArcher/company_files/50000/HTML/Policy_webpage/archer-files/styles/styles.min.css?v=20150410124654" />
    <link rel="stylesheet" href="/RSAArcher/company_files/50000/HTML/Policy_webpage/archer-files/styles/print.min.css?v=20150410124654" media="print" />
    <script type="text/javascript" src="/RSAArcher/company_files/50000/HTML/Policy_webpage/archer-files/scripts/scripts.min.js?v=20150410124654">¬</script>

    <style type="text/css">
        .home-page .Article__wrapper {
            padding: 40px 0 0;
        }
        /**/

        .Domains-sections__panel ._body {
            width: 100%;
        }
        .Nav__item > ._link .icon {
            font-size: 11px;
            font-size: 0.6875rem;
            margin-left: 3px;
        }
    </style>
    <style type="text/css" media="all">
        .Domains-sections__panel ._body ._title:after {
            font-family: 'icomoon';
            content: "\e603";
            font-size: 16px;
            font-size: 1rem;
            text-align: center;
            position: absolute;
            left: 0;
            right: 0;
            color: #00a4f2;
            top: 117px;
            top: 69px;
            top: 269px;
            opacity: 0; /*opacity: 1;*/
            font-size: 20px;
            font-size: 1.2rem;
        }

        @media (max-width: 1024px) and (min-width: 991px) {
            .Domains-sections__panel ._body ._title:after {
                top: 117px;
                top: 69px;
                opacity: 1;
            }
        }

        @media (max-width: 1024px) and (min-width: 991px) {
            .Domains-sections__panel ._body--active ._title:after {
                top: 309px;
                top: 259px;
                -webkit-transform: rotate(180deg);
                -ms-transform: rotate(180deg);
                transform: rotate(180deg);
            }
        }

        @media (max-width: 991px) {
            .Domains-sections__panel ._body ._title:after {
                top: 117px;
                top: 69px;
                opacity: 1;
            }

            .Domains-sections__panel ._body--active ._title:after {
                top: 325px;
                top: 275px;
                -webkit-transform: rotate(180deg);
                -ms-transform: rotate(180deg);
                transform: rotate(180deg);
            }
        }

        @media (max-width: 768px) {
            .Domains-sections__panel ._body ._title:after {
                top: 137px;
                top: 77px;
                opacity: 1;
            }

            .Domains-sections__panel ._body--active ._title:after {
                top: 345px;
                top: 285px;
                -webkit-transform: rotate(180deg);
                -ms-transform: rotate(180deg);
                transform: rotate(180deg);
            }
        }
    </style>

        
    </head>
    
    <body> 
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
                  
                  <li class="li"><a href="Cliente_Caddie.jsp" class="a"><i class="fa fa-home "></i>Solicitud Caddie</a></li>
                  <li class="li"><a href="Evento.jsp" class="a"><i class="fa fa-home "></i>Eventos</a></li>
                  <li class="li"><a href="FichaPuntuacion.jsp" class="a"><i class="fa fa-user"></i>Ficha de juego</a></li>
                  <li class="li"><a href="usuario.jsp" class="a"><i class="fa fa-home "></i>Usuario</a></li>
                  <li class="li"><a href="PQRS.jsp" class="a"><i class="fa fa-lightbulb-o"></i>PQRS</a></li>
                  <li class="li"><a href="Servicio.jsp" class="a"><i class="fa fa-code"></i>Servicios</a></li>
                  
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
            
    
     <!-- START - Domain links -->
                <div class="Domains-sections">
                    <div class="Domains-sections__panel Domains-sections__panel--space" style="background-image:url(imagen/EVENTOS.jpg)">
                        <div class="_body">
                            <div class="_icon"><img src="imagen/calendar (1).png" alt="Policy Icon" /></div>
                            <h3 class="_title">Eventos</h3>
                            <p class="_text" style="display:none;"><span>INSERT WORDS HERE<br /></span></p>
                            <ul class="_button-list">
                                <li><a href="/RSAArcher/company_files/50000/HTML/Policy_webpage/Demo_PDF/demo-policy-candc.pdf" target="_blank" class="_button">Eventos del Club</a></li>
                                <li><a href="/space/security/" class="_button">Solicitar Evento</a></li>
                                <li><a href="/space/defence/" class="_button">Mis Eventos</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="Domains-sections__panel Domains-sections__panel--air Domains-sections__panel--grey" style="background-image:url(imagen/newsport.jpg);background-position: top center;">
                        <div class="_body">
                            <div class="_icon _icon--grey"><img src="imagen/news (2).png" alt="Local Controls Icon" /></div>
                            <h3 class="_title">Noticias</h3>
                            <p class="_text" style="display:none;"><span>INSERT WORDS HERE<br /></span></p>
                            <ul class="_button-list">
                                <li><a href="Noticias.jsp" class="_button">Ver Noticias</a></li>
                                <li><a href="/air/security/" class="_button">.</a></li>
                                <li><a href="/air/defence/" class="_button">.</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="Domains-sections__panel Domains-sections__panel--land" style="background-image:url(imagen/area.jpg);background-position: top center;">
                        <div class="_body">
                            <div class="_icon"><img src="imagen/mapa.png" alt="maritime Domain Icon" /></div>
                            <h3 class="_title">Area Social</h3>
                            <p class="_text" style="display:none;"><span>INSERT WORDS HERE<br /></span></p>
                            <ul class="_button-list">
                                <li><a href="/land/commercial/" class="_button">Lugares</a></li>
                                <li><a href="/land/security/" class="_button">Reservar Lugar</a></li>
                                <li><a href="/land/defence/" class="_button">Mis Reservas</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="Domains-sections__panel Domains-sections__panel--maritime Domains-sections__panel--grey" style="background-image:url(imagen/PQRS3.png)">
                        <div class="_body">
                            <div class="_icon _icon--grey"><img src="https://cdn1.iconfinder.com/data/icons/black-easy/512/535106-user_512x512.png" alt="Applicability Icon" /></div>
                            <h3 class="_title">PQR'S</h3>
                            <p class="_text" style="display:none;"><span>INSERT WORDS HERE<br /></span></p>
                            <ul class="_button-list">
                                <li><a href="/maritime/commercial/" class="_button">Crear PQR'S</a></li>
                                <li><a href="/maritime/security/" class="_button">MIS PQR'S</a></li>
                                <li><a href="/Rsaarcher/default.aspx?requestUrl=..%2Ffoundation%2FWorkspace.aspx%3FworkspaceId%3D13%26dashboardId%3D88" class="_button">.</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!-- END - Domain links -->
                <!-- START - end -->
                <div class="Article__wrapper -grey">
                    <div class="container" style="/*border:#00a4f2 1px dashed;*/">
                        <div class="Article__content rich-text">
                        </div>
                    </div>
                </div>
                <!-- content ends -->
</body>
</html>
