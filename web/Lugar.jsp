!<%-- 
    Document   : Lugar
    Created on : 22/08/2018, 09:28:50 AM
    Author     : vasco
--%>

<%@page import="java.util.ArrayList"%>
<%@page import="modelo.Consultados"%>
<%@page import="modelo.Lugarsetget"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="caddie.css"
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Lugar</title>
    </head>
    <body>
        <header> <h1>Diligencie los datos del Lugar</h1> </header>
        <div class="c1">
                 <form action="ServletLugar">
                     <input class="i1" type="text" name="LugCodigo" placeholder="Codigo del lugar"><br><br>
<input class="i1" type="text" name="LugUbicacion" placeholder="Ubicacion del lugar"><br><br>
<input class="i1" type="text" name="LugHorario" placeholder="Horario"><br><br>
<input class="i1" type="text" name="LugCosto"  placeholder="Costo Del Lugar"><br><br>
<input class="i1" type="text" name="LugCapacidad" placeholder="Capacidad del lugar"><br><br>
<input class="i1" type="text" name="LugEstado" placeholder="Estado del Lugar"><br><br>


<button type="submit" class="es" name="Guardar">Guardar</button>
        </form>
        </div>
        
        <header>  <h1>Tabla Lugares</h1> </header> 
        <div class="tabla"> <table border="1">
                <tr>
                    <th>Codigo</th>
                    <th>Ubicacion</th>
                    <th>Horario</th>
                    <th>Costo</th>
                    <th>Capacidad</th>
                    <th>Estado</th>
                    <th>Actualizar</th>
                    <th>Eliminar</th>          
                </tr>
                
                <%
       ArrayList<Lugarsetget> lisdat=new ArrayList<>();
       Consultados con=new Consultados();
       lisdat= con.ConsultaLugar();
       Lugarsetget usuget=new Lugarsetget();    
       for (int i=0; i<lisdat.size(); i++){
       usuget=lisdat.get(i);
        
        %>
        
        <tr>
        <form action="Servletmod">
            <th><input type="number" name="LugCodigo" value="<%=usuget.getLugCodigo()%>"</th>
            <th><input type="text" name="LugUbicacion" value="<%=usuget.getLugUbicacion()%>"</th>
            <th><input type="text" name="LugHorario" value="<%=usuget.getLugHorario()%>"</th>
            <th><input type="text" name="LugCosto" value="<%=usuget.getLugCosto()%>"</th>
            <th><input type="text" name="LugCapacidad" value="<%=usuget.getLugCapacidad()%>"</th>
            <th><input type="text" name="LugEstado"  value="<%=usuget.getLugEstado()%>"</th>  
                         
           <th> <input type="submit" class="mi" name="btnactLug" value="Actualizar"></th>
        
           <th> <input type="submit" class="mi" name="btneliLug" value="Eliminar"></th>              
                        
        </tr>
      </form>
                   
            <%
                }
        %>
                
            </table> 
        </div>
    </body>
</html>