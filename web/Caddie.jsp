<%-- 
    Document   : Caddie
    Created on : 15/08/2018, 12:48:32 AM
    Author     : user
--%>

<%@page import="modelo.disposetget"%>
<%@page import="modelo.rankinsetgetcombo"%>
<%@page import="modelo.fundacionsetgetcombo"%>
<%@page import="modelo.caddiesetgetcombo"%>
<%@page import="modelo.Caddiesetget"%>
<%@page import="modelo.Consultados"%>
<%@page import="java.util.ArrayList"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <link rel="stylesheet" type="text/css" href="css/caddie.css">
       <style > 
            .bo{
     background-image: url(css/imgd/holqa.jpg);
    
	background-size:100%;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
	background-attachment:fixed;
        text-align: center;
}
    </style> 
        <title>CADDIE</title>
    </head>
    <body class="bo">
        <header><h1>Diligencie los datos del Caddie</h1></header> 
        <div class="c1">
<form action="ServletCaddie" enctype="multipart/form-data" method="post">
<input  class="i1" type="text" name="CadId" placeholder="Docuemento Caddie"><br><br>
<select class="i1" type="text" name="CadFun" placeholder="caddie Fundacion">
                 <%
                 ArrayList<fundacionsetgetcombo> lisdatt=new ArrayList<>();
                 Consultados cons=new Consultados();
                 lisdatt=cons.ConsultaCaddieFun();                 
                fundacionsetgetcombo usucon=new fundacionsetgetcombo();
                for(int c=0; c<lisdatt.size(); c++){
                    usucon=lisdatt.get(c);
                   %>
                   <option><%=usucon.getCadFun()%></option>
                       <%
                     
                           }                       
                   %>
</select>             <br>                    <br>
  <input class="i1" type="text" name="CadNombre" placeholder="Escriba el Nombre"><br><br>                    <input class="i1" type="text" name="CadRanking"  placeholder="Escriba el Ranking"><br><br>
  <input class="i1" type="text" name="Estado" placeholder="Estado del Caddie"><br><br>
  <input class="i1" type="file" name="CadFoto" accept="imagen/*" placeholder="Ingrese la imagen"><br><br>
  <button  type="submit" class="es" name="Guardar">Guardar</button>
        </form>

        </div>
     <header><h1>Tabla Caddies</h1></header>
      
     <div class="tabla"> <table border="1">
                <tr>
                    <th>Documento</th>
                    <th>Caddie Fundacion</th>
                    <th>Nombre</th>
                    <th>Ranking</th>
                    <th>Estado</th>
                    <th>Foto</th>
                    <th></th>
                    <th>Actualizar</th>
                    <th>Eliminar</th>          
                </tr>
                
                <%
       ArrayList<Caddiesetget> lisdat=new ArrayList<>();
       Consultados con=new Consultados();
       lisdat= con.ConsultaCaddie();
       Caddiesetget usuget=new Caddiesetget();
       for (int i=0; i<lisdat.size(); i++){
       usuget=lisdat.get(i);
        String fot=usuget.getCadFoto();
        %>
        
        <tr>
        <form action="Servletmod"enctype="multipart/form-data" method="post">
            <th><input class="i2" type="text" name="CadId" value="<%=usuget.getCadId()%>"
             <%----
                 ArrayList<caddiesetgetcombo> lisdatto=new ArrayList<caddiesetgetcombo>();
                 Consultados consul=new Consultados();
                 lisdatto=consul.ConsultaCaddieid();                 
                caddiesetgetcombo cadfun=new caddiesetgetcombo();
                for(int c=0; c<lisdatto.size(); c++){
                    cadfun=lisdatto.get(c);
                   %>
                   <option><%=cadfun.getCadId()%></option>
                       <%
                     
                           }                       
                           ----%>
                    </th>
                    <th><select class="i2" type="text" name="CadFun" value="<%=usuget.getCadFun()%>"
             <%
                 ArrayList<fundacionsetgetcombo> lisda=new ArrayList<fundacionsetgetcombo>();
                 Consultados consulta=new Consultados();
                 lisda=consulta.ConsultaCaddieFun();                 
                fundacionsetgetcombo cadfun=new fundacionsetgetcombo();
                for(int c=0; c<lisda.size(); c++){
                    cadfun=lisda.get(c);
                   %>
                   <option><%=cadfun.getCadFun()%></option>
                       <%
                     
                           }                       
                           %>
                </select>     </th>
                    <th><input class="i2" type="text" name="CadNombre" value="<%=usuget.getCadNombre()%>"</th>
                    <th><select class="i2"type="text" name="CadRanking" value="<%=usuget.getCadRanking()%>"</th>
                         <%
                 ArrayList<rankinsetgetcombo> lisdato=new ArrayList<rankinsetgetcombo>();
                 Consultados cosulta=new Consultados();
                 lisdato=consulta.Consultaranking();                 
                rankinsetgetcombo cadran=new rankinsetgetcombo();
                for(int c=0; c<lisdato.size(); c++){
                    cadran=lisdato.get(c);
                   %>
                   <option><%=cadran.getCadRanking()%></option>
                       <%
                     
                           }                       
                           %>
                </select>     </th>
            
            
                    <th><select class="i2"type="text" name="Estado" value="<%=usuget.getEstado()%>"</th>
            
                         <%
                             
                 ArrayList<disposetget> lisdis=new ArrayList<disposetget>();
                 Consultados consult=new Consultados();
                 lisdis=consult.Consultadispo();                 
                disposetget caddis=new disposetget();
                for(int c=0; c<lisdis.size(); c++){
                    caddis=lisdis.get(i);
                   %>
                   <option><%=caddis.getEstado()%></option>
                   
                   
                       <%
                      
                           }                       
                           %>
                </select>     </th>
                    <th><input class="mio" type="text" name="Fotoant" value="<%=usuget.getCadFoto()%>" ></th>
                    <style> 
                        .mio{display:none }
                    </style>
                        <th><div> <img src="<%=usuget.getCadFoto()%>" width="70" height="70"> </div></th>
                    <th><input type="file" name="CadFoto" accept="imagen/*" ></th>    
           <th> <input type="submit" class="mi" name="btnactCad" value="Actualizar"></th>
        
           <th> <input type="submit" class="mi" name="btneliCad" value="Eliminar"></th>              
                        
        </tr>
      </form>
                   
            <%
                }
        %>
                
            </table> 
        </div>
    </body>
</html>