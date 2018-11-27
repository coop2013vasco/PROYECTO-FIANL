    <%-- 
    Document   : Evento
    Created on : 29/08/2018, 09:54:31 AM
    Author     : SENA
--%>

<%@page import="modelo.Consultados"%>
<%@page import="java.util.ArrayList"%>
<%@page import="modelo.Eventosetget"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="eventoscss.css"
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>EVENTO</title>
    </head>
 <body>
     <header><h1>Diligencie los datos del Evento</h1></header>
     <div class="c1">
<form action="ServletEventos" enctype="multipart/form-data" method="post">
<input class="i1" type="text" name="Evecodigo" placeholder="Codigo Evento"><br><br>
<input class="i1" type="text" name="EveEmpId" placeholder="ID. empleado"><br><br>
<input class="i1" type="text" name="EveLugCod" placeholder="Cod.Lugar"><br><br>
<input class="i1" type="text" name="EveDescripcion"  placeholder="Descripcion del Evento"><br><br>
<input class="i1" type="file" name="EveFoto" accept="imagen/*" placeholder="ingrese la imagen"><br><br>
<input class="i1" type="datetime-local" name="SerEstado" placeholder="Fecha y Hora"><br><br>

<button type="submit" class="es" name="Guardar">Guardar</button>
        </form>
     </div>
     <header><h1>Tabla Eventos</h1></header>  
        <div class="tabla"> <table border="1">
                <tr>
                    <th>Codigo</th>
                    <th>Id Empleado</th>
                    <th>Cod. Lugar</th>
                    <th>Descripcion</th>
                    <th>Foto</th>
                    <th>Actualizar foto</th>
                    <th>Fecha</th>
                    <th>Actualizar</th>
                    <th>Eliminar</th>          
                </tr>
                
                
                
                
                <%
       ArrayList<Eventosetget> lisdat=new ArrayList<>();
       Consultados con=new Consultados();
       lisdat= con.ConsultaEvento();
       Eventosetget usuget=new Eventosetget();
       for (int i=0; i<lisdat.size(); i++){
       usuget=lisdat.get(i);
        String fot=usuget.getEveFoto();
        %>
        
        <tr>
        <form action="Servletmod" enctype="multipart/form-data" method="post" >
            <th><input class="i2"type="text" name="Evecodigo" value="<%=usuget.getEvecodigo()%>"</th>
            <th><input class="i2" type="text" name="EveEmpId" value="<%=usuget.getEveEmpId()%>"</th>
            <th><input class="i2" type="text" name="EveLugCod" value="<%=usuget.getEveLugCod()%>"</th>
            <th><input class="i2" type="text" name="EveDescripcion" value="<%=usuget.getDescripcion()%>"</th>
            <th><img  class="i2"  src="<%=usuget.getEveFoto()%>" width="70" height="70"></th>
            <th><input class="i2" type="file" name="EveFoto" accept="imagen/*" </th>
            
            <th><input type="text" name="EveFecHo" value="<%=usuget.getEveFecHo()%>"</th>
            
                         
           <th> <input type="submit" class="mi" name="btnactEve" value="Actualizar"></th>
        
           <th> <input type="submit" class="mi" name="btneliEve" value="Eliminar"></th>              
                        
        </tr>
      </form>
                   
            <%
                }
        %>
                
            </table> 
        </div>
    </body>
</html>
