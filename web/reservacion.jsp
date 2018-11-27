<%-- 
    Document   : reservacion
    Created on : 29/08/2018, 07:53:25 AM
    Author     : SENA
--%>

<%@page import="modelo.idclientecombo"%>
<%@page import="modelo.Consultados"%>
<%@page import="modelo.Reservagetset"%>
<%@page import="java.util.ArrayList"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
         <link rel="stylesheet" type="text/css" href="caddie.css"
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Reserva</title>
    </head>
    <body>
        <header><h1>Diligencie los Datos de Reserva</h1></header>
        <div class="c1">
        <form action="ServletReserva" enctype="multipart/form-data" method="post">
<input class="i1" type="text" name="ResCodReserva" placeholder="Digite el Cod. Reserva"><br><br>
<select class="i1" type="text" name="ResCliId" placeholder="Digite Id.Cliente">
    <option>Seleccione CC. cliente</option> 
    <%
                 ArrayList<idclientecombo> lisdto=new ArrayList<idclientecombo>();
                 Consultados cosulta=new Consultados();
                 lisdto=cosulta.Consultaidcliente();                 
                idclientecombo cadran=new idclientecombo();
                for(int c=0; c<lisdto.size(); c++){
                    cadran=lisdto.get(c);
                   %>
                   
                   <option><%=cadran.getCliId()%></option>
                   
                   <%
                     
                           }                       
                           %>    
</select><br><br>

<input class="i1" type="text" name="ResLugCodigo" placeholder="Cod.Lugar"><br><br>
<input class="i1" type="text" name="ResSerCodigo"  placeholder="Cod Servicio"><br><br>
<input class="i1" type="text" name="ResPrecio" placeholder="Respuesta Precio  "><br><br>
<input class="i1" type="datetime-local" name="ResFHInicio" placeholder="Fecha Hora Inicio"><br><br>
<input class="i1" type="datetime-local" name="ResFHFin" placeholder="Fecha Hora Final"><br><br>


<button type="submit" class="es" name="Guardar">Guardar</button>
        </form>
        </div>        
        
        
        <header><h1>Tabla Reservas</h1></header>  
       
        <div class="tabla"> <table border="1">
                <tr>
                    <th>Cod. Reservat</th>
                    <th>Id. Cliente</th>
                    <th>Cod. Lugar</th>
                    <th>Cod. Servicio</th>
                    <th>Precio</th>
                    <th>Fecha y hora de Inicio</th>
                    <th>Fecha y Hora Final</th>
                    <th>Actualizar</th>
                    <th>Eliminar</th>          
                </tr>
                
                <%
       ArrayList <Reservagetset> lisdat=new ArrayList<>();
       Consultados con=new Consultados();
       lisdat= con.ConsultaReserva();
       Reservagetset usuget=new Reservagetset();
       for (int i=0; i<lisdat.size(); i++){
       usuget=lisdat.get(i);
        
        %>
        
        <tr>
        <form  action="Servletmod" enctype="multipart/form-data" method="post" >
            <th><input class="i2" type="text" name="ResCodReserva" value="<%=usuget.getResCodReserva()%>"</th>
            <th><input class="i2" type="text" name="ResCliId" value="<%=usuget.getResCliId()%>"</th>
            <th><input class="i2" type="text" name="ResLugCodigo" value="<%=usuget.getResLugCodigo()%>"</th>
            <th><input class="i2" type="text" name="ResSerCodigo" value="<%=usuget.getResSerCodigo()%>"</th>
            <th><input class="i2" type="text" name="ResPrecio" value="<%=usuget.getResPrecio()%>"</th>
            <th><input class="i2" type="text" name="ResFHInicio"  value="<%=usuget.getResFHInicio()%>"</th>  
            <th><input class="i2" type="text" name="ResFHFin" value="<%=usuget.getResFHFin()%>"</th>              
           <th> <input class="i2" type="submit" class="mi" name="btnactRes" value="Actualizar"></th>
        
           <th> <input type="submit" class="mi" name="btneliRes" value="Eliminar"></th>              
                        
        </tr>
      </form>
                   
            <%
                }
        %>
                
            </table> 
        </div>
        </body>
</html>