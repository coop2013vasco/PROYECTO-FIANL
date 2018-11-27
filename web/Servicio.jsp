<%-- 
    Document   : Servicio
    Created on : 22/08/2018, 12:41:04 PM
    Author     : user
--%>

<%@page import="modelo.Consultados"%>
<%@page import="modelo.Serviciosetget"%>
<%@page import="java.util.ArrayList"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="caddie.css"
        <meta  http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Servicio</title>
    </head>
 <body>
     <header>  <h1>Diligencie los datos del Servicio</h1> </header>
             <div class="c1">
<form action="ServletServicio" entype="multipart/form-data" method="post">
<input class="i1" type="text" name="SerCodigo" placeholder="Codigo del Servicio"><br><br>
<input class="i1" type="text" name="SerNombre" placeholder="Nombre delServicio"><br><br>
<input class="i1" type="text" name="SerCosto" placeholder="Escriba el Costo"><br><br>
<input class="i1" type="text" name="SerDescripcion"  placeholder="Descripcion del Servicio"><br><br>
<input class="i1" type="text" name="SerEstado" placeholder="Estado del Servicio"><br><br>

<button type="submit" class="es" name="Guardar">Guardar</button>
        </form>
             </div>
        
     <header>    <h1>Tabla  Servicios</h1> </header>
        <div class="tabla"> <table border="1">
                <tr>
                    <th>Codigo</th>
                    <th>Nombre</th>
                    <th>Costo</th>
                    <th>Descripcion</th>
                    <th>Estado</th>
                    
                    <th>Actualizar</th>
                    <th>Eliminar</th>          
                </tr>
                
                <%
       ArrayList<Serviciosetget> lisdat=new ArrayList<>();
       Consultados con=new Consultados();
       lisdat= con.ConsultaServicio();
       Serviciosetget usuget=new Serviciosetget();
       for (int i=0; i<lisdat.size(); i++){
       usuget=lisdat.get(i);
        
        %>
        
        <tr>
        <form action="Servletmod" enctype="multipart/form-data" method="post">
            <th><input class="i2" type="text" name="SerCodigo" value="<%=usuget.getSerCodigo()%>"</th>
            <th><input class="i2" type="text" name="SerNombre" value="<%=usuget.getSerNombre()%>"</th>
            <th><input class="i2" type="text" name="SerCosto" value="<%=usuget.getSerCosto()%>"</th>
            <th><input class="i2" type="text" name="SerDescripcion" value="<%=usuget.getSerDescripcion()%>"</th>
            <th><input class="i2" type="text" name="SerEstado" value="<%=usuget.getSerEstado()%>"</th>
             
                         
           <th> <input type="submit" class="mi" name="btnactSer" value="Actualizar"></th>
        
           <th> <input type="submit" class="mi" name="btneliSer" value="Eliminar"></th>              
                        
        </tr>
      </form>
                   
            <%
                }
        %>
                
            </table> 
        </div>
    </body>
</html>
