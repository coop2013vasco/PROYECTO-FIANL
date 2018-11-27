<%-- 
    Document   : Cliente_Caddie
    Created on : 22/08/2018, 09:13:49 AM
    Author     : user
--%>

<%@page import="modelo.caddiesetgetcombo"%>
<%@page import="modelo.idclientecombo"%>
<%@page import="modelo.Consultados"%>
<%@page import="modelo.ClienteCaddiesetget"%>
<%@page import="java.util.ArrayList"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="ClienteCaddiecss.css"
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>CADDIE-CLIENTE</title>
    </head>
    <body>
        <header><h1>Seleccione los Datos Correspondientes</h1></header>
            
        <div class="c1">
<form action="ServletCliente_Caddie" enctype="multipart/form-data" method="post">
    <input class="i1"type="number" name="CliCaCodigo"  placeholder="Codiog"> <br><br>
<select class="i1"type="text" name="CliCaCliId"   placeholder="Seleccione cc Cliente">
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
</select> <br><br>
<select class="i1" type="text" name="CliCaCaid"    placeholder="Seleccione cod.Caddie"> <br><br>
<option>Seleccione CC. Caddie</option> 
    <%
                 ArrayList<caddiesetgetcombo> lisdato=new ArrayList<caddiesetgetcombo>();
                 Consultados consulta=new Consultados();
                 lisdato=cosulta.ConsultaCaddieid();                 
                caddiesetgetcombo cadieid=new caddiesetgetcombo();
                for(int c=0; c<lisdto.size(); c++){
                    cadieid=lisdato.get(c);
                   %>
                   
                   <option><%=cadieid.getCadId()%></option>
                   
                   <%
                       }                       
                           %>
</select> <br><br>

<input class="i1" type="date" name="CliCaFHSer"   placeholder="año/mes/dia/hora"><br><br>
<input class="i1" type="text" name="CliCaCalific" placeholder="Digite la Calificacion"> <br><br>
<input class="i1" type="text" name="CliCaTalega"  placeholder="Contenido de la talega"> <br><br>
<br><br>
<button class="i1" type="submit" class="es" name="Guardar">Guardar</button>
        </form>
        </div>
        
<header><h1>Tabla Caddies</h1></header>  
        <div class="tabla"> <table border="1">
                <tr>
                    <th>Codigo</th>
                    <th>Id Cliente</th>
                    <th>Id Caddie</th>
                    <th>Fecha-Hora</th>
                    <th>Calificacion</th>
                    <th>Cont. Talega</th>
                    
                    <th>Actualizar</th>
                    <th>Eliminar</th>          
                </tr>
                
                <%
       ArrayList<ClienteCaddiesetget> lisdat=new ArrayList<>();
       Consultados con=new Consultados();
       lisdat= con.ConsultaClienteCaddie();
       ClienteCaddiesetget usuget=new ClienteCaddiesetget();
       for (int i=0; i<lisdat.size(); i++){
       usuget=lisdat.get(i);
        
        %>
        
        <tr>
        <form action="Servletmod">           
            <th><input class="i2" type="number" name="CliCaCodigo" value="<%=usuget.getCliCaCodigo()%>"</th>
            <th><input class="i2" type="text" name="CliCaCliId" value="<%=usuget.getCliCaCliId()%>"</th>
            <th><input class="i2" type="text" name="CliCaCaId" value="<%=usuget.getCliCaCaId()%>"</th>
            <th><input class="i2" type="text" name="CliCaFHSer" value="<%=usuget.getCliCaFHSer()%>"</th>
            <th><input class="i2" type="text" name="CliCaCalific" value="<%=usuget.getCliCaCalific()%>"</th>
            <th><input class="i2" type="text" name="CliCaTalega"  value="<%=usuget.getCliCaTalega()%>"</th>  
                         
           <th> <input type="submit" class="mi" name="btnactCliCad" value="Actualizar"></th>
        
           <th> <input type="submit" class="mi" name="btneliCliCad" value="Eliminar"></th>              
                        
        </tr>
      </form>
                   
            <%
                }
        %>
                
            </table> 
        </div>
    </body>
</html>
