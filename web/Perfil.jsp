<html lang="en">
<head>
	<title>perfil usuario</title>
        <link rel="stylesheet" type="text/css" href="css/menu.css">
	<link href="css/PERFIL.css" rel='stylesheet' type='text/css'/>
      
        
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
                  
                  
                  <li class="li"><a href="Cliente_Caddie.jsp" class="a"><i class="fa fa-home "></i>Solicitud Caddie</a></li>
                  <li class="li"><a href="Evento.jsp" class="a"><i class="fa fa-home "></i>Eventos</a></li>
                  <li class="li"><a href="FichaPuntuacion.jsp" class="a"><i class="fa fa-user"></i>Ficha de juego</a></li>
                  <li class="li"><a href="preguntaxrespuesta.jsp" class="a"><i class="fa fa-home "></i>pregunta por respuesta</a></li>
                  <li class="li"><a href="clienteficha.jsp" class="a"><i class="fa fa-user"></i>Ficha Cliente</a></li>
                  <li class="li"><a href="usuario.jsp" class="a"><i class="fa fa-home "></i>Usuario</a></li>
                  <li class="li"><a href="PQRS.jsp" class="a"><i class="fa fa-lightbulb-o"></i>PQRS</a></li>
                  <li class="li"><a href="Servicio.jsp" class="a"><i class="fa fa-code"></i>Servicios</a></li>
                  <li class="li"><a href="Lugar.jsp" class="a"><i class="fa fa-envelope-o"></i>Lugares</a></li>
                  <li class="li"><a href="Evento.jsp" class="a"><i class="fa fa-envelope-o"></i>Encuestas</a></li>
                  <li class="li"><a href="Reservas.jsp" class="a"><i class="fa fa-envelope-o"></i>Reservas</a></li>
               </ul>
            </nav>
        </header> 
    
    <main class="profile">
       
  <div class="profile-container">
    <div class="user">
      <div class="image-container">
        <img alt="" class="avatar" src="imagen/PERFIL1.jpg" />
      </div>
      <div class="user-info">
        <p class="user-name">
         Nestor Alexander
        </p>
        <div class="user-subinfo">
          <p class="user-class">
              //falta terminar\\
            String nombre=ings.consultanombreusuario();
                    JOptionPane.showMessageDialog(null,"Nombre " + nombre);
                    HttpSession nom=request.getSession();
                    nom.setAttribute("datonom",nombre);
          </p>
          <div class="separator vertical"></div>
          <p class="user-level">
            Garzon
          </p>
        </div>
      </div>
    </div>
    <div class="info-container">
      <div class="info">
        <div class="title">
          Correo:
        </div>
        <div class="description">
          Alexpoke@hotmail.com
        </div>
      </div>
      <div class="info">
        <div class="title">
          Telefono:
        </div>
        <div class="description">
          319765435
        </div>
      </div>
      <div class="info">
        <div class="title">
          Rol:
        </div>
        <div class="description">
          Socio.
        </div>
      </div>
      
      
          <th><input class="span share-btn" type="submit" name="btnactperf" value="Modificar"></th>
      
    </div>
  </div>
</main>
    


        </div>
        </div> 

</body>
</html>