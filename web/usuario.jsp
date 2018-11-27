<%-- 
    Document   : usuario
    Created on : 13/08/2018, 08:02:40 AM
    Author     : user
--%>

<%@page import="modelo.usuariosetgetcombo"%>
<%@page import="modelo.Consultados"%>
<%@page import="modelo.Usuariosetget"%>
<%@page import="java.util.ArrayList"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
         <link rel="stylesheet" type="text/css" href="caddie.css"
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Usuario</title>
    </head>
    <body>
        <header><h1>Diligencie sus Datos en el respectivo campo</h1></header>
        <div class="c1">       
        <form action="Servletusuario">
            <input class="i1" type="text" name="UsuId" placeholder="Digite el Documento del Usuario"><br><br>
<input class="i1" type="text" name="UsuUsuario" placeholder="Digite el Nombre del Usuario"><br><br>
<input class="i1" type="password" name="UsuClave" placeholder="Digite la Clave del Usuario"><br><br>
<input class="i1" type="text" name="UsuRol"  placeholder="Digite su Rol"><br><br>
<input class="i1" type="text" name="UsuNombre" placeholder="Digite su Nombre"><br><br>

<select class="i1" type="tetx" name="UsuCargo" placeholder="Seleccione cargo">
    <option>Seleccione su Cargo </option>              
    <%
                 ArrayList<usuariosetgetcombo> lisdatt=new ArrayList<>();
                 Consultados cons=new Consultados();
                 lisdatt=cons.ConsultaCargoUsuario();                 
                usuariosetgetcombo usucon=new usuariosetgetcombo();
                for(int c=0; c<lisdatt.size(); c++){
                    usucon=lisdatt.get(c);
                   %>
                   <option><%=usucon.getUsuCargo()%></option>
                       <%
                     
                           }                       
                           %>
</select><br><br>
    
<input class="i1" type="file" name="UsuFoto" accept="imagen/*" placeholder="Ingrese la Imagen"><br><br>
<input  type="submit" class="es" name="Guardar" value="guardar">
        </form>
        </div>
        
        <header><h1>Tabla Usuario</h1></header>  
        <div class="tabla"> <table border="1">
                <tr>
                    <th>Documento</th>
                    <th>Usuario</th>
                    <th>Clave</th>
                    <th>Rol</th>
                    <th>Nombre</th>
                    <th>Cargo</th>
                    <th>Foto</th>
                    <th>Estado</th>
                    <th>Actualizar</th>
                    <th>Eliminar</th>
                    
                </tr>
                
                <%
       ArrayList <Usuariosetget> lisdat=new ArrayList<>();
       Consultados con=new Consultados();
       lisdat= con.ConsultaUsuario();
       Usuariosetget usuget=new Usuariosetget();
       for (int i=0; i<lisdat.size(); i++){
       usuget=lisdat.get(i);
        
        %>
        
        <tr>
        <form action="Servletmod" enctype="multipart/form-data" method="post">
            <th><input class="i2" type="text" name="UsuId" value="<%=usuget.getUsuId()%>"</th>
            <th><input class="i2" type="text" name="UsuUsuario" value="<%=usuget.getUsuUsuario()%>"</th>
            <th><input class="i2" type="text" name="UsuClave" value="<%=usuget.getUsuClave()%>"</th>
            <th><input class="i2" type="text" name="UsuRol" value="<%=usuget.getUsuRol()%>"</th>
            <th><input class="i2" type="text" name="UsuNombre" value="<%=usuget.getUsuNombre()%>"</th>
            <th><input class="i2" type="tetx" name="UsuCargo" value="<%=usuget.getUsuCargo()%>">
            <th><img src="<%=usuget.getUsuFoto()%>" width="70" height="70"></th>
            <th><input class="i2" name="UsuEstado" value="<%=usuget.getUsuEstado()%>"></th>      
       
        
                        
                        
           <th> <input type="submit" class="mi" name="btnactusu" value="Actualizar"></th>
        
           <th> <input type="submit" class="mi" name="btneliusu" value="Eliminar"></th>              
                        
        </tr>
      </form>
                   
            <%
                }
        %>
                
            </table> 
             
        </div>
        
        
    </body>
</html>
