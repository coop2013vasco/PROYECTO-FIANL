<%@page import="javax.swing.JOptionPane"%>
<%---
  HttpSession nombre=request.getSession();
           String no=(String)nombre.getAttribute("datonom");
           if(no==null){
               response.sendRedirect("index.jsp");
           }
      
---%>
<%@page import="modelo.Consultas"%>
<%@page import="modelo.ingresodatosgetset"%>
<%@page import="java.util.ArrayList"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" type="text/css" href="css/Cliente.css">
        <link rel="stylesheet" type="text/css" href="css/menu.css">
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
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
                   <li class="li"><a href="usuario.jsp" class="a"><i class="fa fa-home "></i>Usuario</a></li>
                   <li class="li"><a href="Evento.jsp" class="a"><i class="fa fa-home "></i>Eventos</a></li>
                   <li class="li"><a href="PQRS.jsp" class="a"><i class="fa fa-lightbulb-o"></i>PQRS</a></li>
                   <li class="li"><a href="Servicio.jsp" class="a"><i class="fa fa-code"></i>Servicios</a></li>
                   <li class="li"><a href="reservacion.jsp" class="a"><i class="fa fa-code"></i>Reservas</a></li>
                   <li class="li"><a href="Encuesta.jsp" class="a"><i class="fa fa-envelope-o"></i>Encuestas</a></li>
                   <li class="li"><a href="FichaPuntuacion.jsp" class="a"><i class="fa fa-user"></i>Ficha de juego</a></li>
                   <li class="li"><a href="clienteficha.jsp" class="a"><i class="fa fa-user"></i>Ficha Cliente</a></li>
               </ul>
            </nav>
         </header>
        </div>
        </div>
        
        
        <header class="h2">
            <h1>Ingreso de datos de Clientes</h1>
        </header>
      
       <%
           HttpSession rnombre=request.getSession();
           String nom=(String)rnombre.getAttribute("datonom");
       %>
       <div class="nom">
       <label>Bienvenido <%=nom%></label>
      
       <form action="Servletcerrar">
       <input type="submit" name="btnsalir" value="Cerrar Sesion">
       </form>
       </div>
         <br><br><br>
        <form action="ServletIngresar" enctype="multipart/form-data" method="post">
              <div class="c1">
                <label>Documento</label><br>
                <input class="i1" type="number" name="cid" placeholder="ingrese el documento del cliente"><br>
                <label>Nombre</label><br>
                <input class="i1" type="text" name="cn" placeholder="ingrese el nombre del cliente"><br>
                <label>Tipo de cliente</label><br>
                <input class="i1" type="text" name="ct" placeholder="ingrese el tipo del cliente"><br>
                <label>Telefono</label><br>
                <input class="i1" type="number" name="ctel" placeholder="ingrese el telefono del cliente"><br>
                <label>Fecha de vinculacion</label><br>
                <input class="i1" type="date" name="cfv" placeholder="elija la fecha de vinculacion del cliente"><br>
                <label>Foto</label><br>
                <input class="i1" type="file" name="cf" accept="imagen/*"><br>
                <input type="submit" name="ingc" value="Guardar"><br><br>
            </form>
        </div>
        <header><h1>Datos de Cliente</h1></header>
        <div class="tabla"><table border="1">
                <tr>
                    <th>Documento</th>
                    <th>Nombre</th>
                    <th>Tipo</th>
                    <th>Telefono</th>
                    <th>Fecha de Vinculacion</th>
                    <th>Foto</th>
                    <th>Modificar</th>
                    <th>Eliminar</th>
                </tr>
                <%
                ArrayList<ingresodatosgetset> lisdat=new ArrayList<>();
                Consultas con=new Consultas();
                lisdat=con.consultaClientes();
                ingresodatosgetset igs=new ingresodatosgetset();
                for(int i=0; i<lisdat.size(); i++){
                    igs=lisdat.get(i);
                    String fot=igs.getCliFoto();
                %>
                <form action="ServletModificar">
                    <tr>
                    <th><input class="i2" type="number" name="cid" value="<%=igs.getCliId()%>"></th>
                    <th><input class="i2" type="text" name="cn" value="<%=igs.getCliNombre()%>"></th>
                    <th><input class="i2" type="text" name="ct" value="<%=igs.getCliTipo()%>"></th>
                    <th><input class="i2" type="number" name="ctel" value="<%=igs.getCliTelefono()%>"></th>
                    <th><input class="i2" type="date" name="cfv" value="<%=igs.getCliFechVinculacion()%>"></th>
                    <th><img class="p1" src="<%=igs.getCliFoto()%>" width="60" height="60"/></th>
                    <th><input type="submit" name="" value="Modificar"></th>
                    <th><input type="submit" name="" value="Eliminar"></th>
                    </tr>
                </form>
                <%
                }
                %>
            </table>
        </div><br>
    </body>
</html>
