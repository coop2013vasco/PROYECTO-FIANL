<%-- 
    Document   : Empleado
    Created on : 14/08/2018, 07:08:39 PM
    Author     : user
--%>

<%@page import="modelo.tipoempleado"%>
<%@page import="modelo.cargocombo"%>
<%@page import="modelo.estadoempleadocombo"%>
<%@page import="modelo.Consultados"%>
<%@page import="modelo.Empleadosetget"%>
<%@page import="java.util.ArrayList"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <link rel="stylesheet" type="text/css" href="Empleadocss.css"
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>EMPLEADO</title>
    </head>
    <body>
        <header><h1>Diligencie los datos del empleado</h1></header>
        <div class="c1">
            <form action="ServletEmpleado" enctype="multipart/form-data" method="post">
<input class="i1" type="text" name="EmId" placeholder="Digite Documento Empleado"><br><br>
<input class="i1" type="text" name="EmNombre" placeholder="Digite Nombre de Empleado"><br><br>
<input class="i1" type="text" name="EmCargo" placeholder="Escriba el cargo"><br><br>
<input class="i1" type="text" name="EmTipo"  placeholder="Digite tipo de empleado"><br><br>
<input class="i1" type="text" name="EmEspecialidad" placeholder="Digite Especialidad"><br><br>
<select class="i1" type="text" name="EmEstado"  placeholder="selecione el estado">
 <%
     ArrayList<estadoempleadocombo> listadatt=new ArrayList<>();
     Consultados cons=new Consultados();
     listadatt=cons.Consultaestadoempleado();                 
     estadoempleadocombo usucon=new estadoempleadocombo();
     for(int c=0; c<listadatt.size(); c++){
        usucon=listadatt.get(c);
                   %>
                   <option><%=usucon.getEmEstado()%></option>
                       <%
                     
                           }                       
                   %>
    
  </select><br><br>

  <input type="file" name="EmFoto" accept="imagen/*" placeholder="Ingrese la imagen"><br><br>
<button type="submit" class="es" name="Guardar">Guardar</button>
        </form>
        </div>
        
        
        <header><h1>Tabla Usuario</h1></header>  
        <div class="tabla"> <table border="1">
                <tr>
                    <th>Documento</th>
                    <th>Empleado</th>
                    <th>Cargo</th>
                    <th>Tipo Empleado</th>
                    <th>Especialidad</th>
                    <th> </th>
                    <th>Foto Empleado</th>
                    <th>Actualizar</th>
                    <th>Estado</th>
                    <th>Actualizar</th>
                    <th>Eliminar</th>
                     
                              
                </tr>
                
                <%
       ArrayList<Empleadosetget> lisdat=new ArrayList<>();
       Consultados con=new Consultados();
       lisdat= con.ConsultaEmpleado();
       Empleadosetget  usuget=new Empleadosetget();
       for (int i=0; i<lisdat.size(); i++){
       usuget=lisdat.get(i);
       String fot=usuget.getEmFoto();
        %>
        
        <tr>
        <form action="Servletmod" enctype="multipart/form-data" method="post">
            
            <th><input class="i2" type="text" name="EmId" value="<%=usuget.getEmId()%>"</th>
            <th><input class="i2" type="text" name="EmNombre" value="<%=usuget.getEmNombre()%>"</th>
            <th><select class="i2" type="tetx" name="EmCargo" value="<%=usuget.getEmCargo()%>"</th>
                <%
                 ArrayList<cargocombo> listda=new ArrayList<cargocombo>();
                 Consultados consulta=new Consultados();
                 listda=consulta.Consultacargo();                 
                cargocombo cadfun=new cargocombo();
                for(int c=0; c<listda.size(); c++){
                    cadfun=listda.get(c);
                   %>
                   <option><%=cadfun.getEmCargo()%></option>
                       <%
                     
                           }                       
                           %>
                </select>     </th>
            
            
            <th><select class="i2" type="text" name="EmTipo" value="<%=usuget.getEmTipo()%>">
           
              <%
                 ArrayList<tipoempleado> listadat=new ArrayList<tipoempleado>();
                 Consultados consu=new Consultados();
                 listadat=consulta.ConsultaTipo();                 
                tipoempleado tp=new tipoempleado();
                for(int c=0; c<listda.size(); c++){
                    tp=listadat.get(c);
                   %>
                   <option><%=tp.getEmTipo()%></option>
                       <%
                     
                           }                       
                           %>
                </select>     </th>
                    
            <th><input class="i2" type="text" name="EmEspecialidad" value="<%=usuget.getEmEspecialidad()%>" ></th>
           <th><input class="mior" type="text" name="Fotoant" value="<%=usuget.getEmFoto()%>" ></th>
            <style> 
                        .mior{display:none }
                    </style>
            
            <th><img class="i2" src="<%=usuget.getEmFoto()%>" width="70" height="70"></th>
            <th><input class="i2" type="file" name="EmFoto" accept="imagen/*"></th>
            <th><input class="i2" type="text" name="EmEstado" value="<%=usuget.getEmEstado()%>"></th>      
                        
                        
           <th> <input type="submit" class="mi" name="btnactEmp" value="Actualizar"></th>
        
           <th> <input type="submit" class="mi" name="btneliEmp" value="Eliminar"></th>              
                        
        </tr>
      </form>
                   
            <%
                }
        %>
                
            </table>      
        
        
    </body>
</html>
