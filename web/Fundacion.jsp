<%-- 
    Document   : Empleado
    Created on : 14/08/2018, 07:08:39 PM
    Author     : user
--%>

<%@page import="modelo.Consultados"%>
<%@page import="java.util.ArrayList"%>
<%@page import="modelo.Fundacionsetget"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="Fundacion.css"
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Fundacion</title>
    </head>
    <body>
        <header> <h1>Diligencie los datos de la Fundacion</h1></header>
        <div class="c1">         
        <form action="ServletFundacion"  enctype="multipart/form-data" method="post">
            <input class="i1" type="text" name="FunNit" placeholder="Digite el Nit"><br><br>
            <input class="i1" type="text" name="FunTelefono" placeholder="Digite el telefono"><br><br>
            <input class="i1" type="text" name="FunUbicacion" placeholder="Escriba la ubicacion"><br><br>
            <input class="i1" type="text" name="FunNombre"  placeholder="Escriba el nom. fundacion"><br><br>
            <input class="i1" type="text" name="Encargado" placeholder="Nombre del encargado "><br><br>

<input type="file" name="FunFoto" accept="imagen/*" placeholder="Ingrese Imagen"><br><br>

<button type="submit" class="es" name="Guardar">Guardar</button>
        </form>
        
        
        </div>
        <header><h1>Tabla Fundaciones</h1></header>  
        <div class="tabla"> <table border="1">
                <tr>
                    <th>Nit</th>
                    <th>Telefono</th>
                    <th>Ubicacion</th>
                    <th>Fundacion</th>
                    <th>Encargado</th>
                    <th>Foto</th>
                    <th>Actualizar foto</th>
                    <th>Actualizar</th>
                    <th>Eliminar</th>          
                </tr>
                
                <%
       ArrayList <Fundacionsetget> lisdat=new ArrayList<>();
       Consultados con=new Consultados();
       lisdat= con.ConsultaFundacion();
       Fundacionsetget usuget=new Fundacionsetget();
       for (int i=0; i<lisdat.size(); i++){
       usuget=lisdat.get(i);
       String fot=usuget.getFunFoto();  
        
        %>
        
        <tr>
        <form action="Servletmod"enctype="multipart/form-data" method="post"
            <th><input class="i2" type="number" name="FunNit" value="<%=usuget.getFunNit()%>"</th>
            <th><input class="i2" type="text" name="FunTelefono" value="<%=usuget.getFunTelefono()%>"</th>
            <th><input class="i2" type="text" name="FunUbicacion" value="<%=usuget.getFunUbicacion()%>"</th>
            <th><input class="i2" type="text" name="FunNombre" value="<%=usuget.getFunNombre()%>"</th>
            <th><input class="i2" type="text" name="Encargado" value="<%=usuget.getEncargado()%>"</th>
            <th><input class="i2" src="<%=usuget.getFunFoto()%>" width="70" height="70"></th> 
            <th><input class="i2"  type="file" name="FunFoto"   accept="imagen/*" </th>
                         
           <th> <input type="submit" class="mi" name="btnactFun" value="Actualizar"></th>
        
           <th> <input type="submit" class="mi" name="btneliFun" value="Eliminar"></th>              
                        
        </tr>
      </form>
                   
            <%
                }
        %>
                
            </table> 
        </div>
        </body>
</html>