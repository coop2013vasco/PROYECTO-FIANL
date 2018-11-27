<%-- 
    Document   : index
    Created on : 13/08/2018, 04:35:45 PM
    Author     : ALEXPOKE9
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
         <link rel="stylesheet" type="text/css" href="css/login.css">
         <script src="css_browser_selector.js" type="text/javascript"></script>
         <script src="jquery-1.2.6.min.js" type="text/javascript"></script>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
    <body>
        <header><img src=""><h1>Iniciar Sesion</h1></header>
        <div class="log1">
         <form action="Servletlogin" method="post">
                <label class="label1" for="lname">USUARIO</label><br><br><br>
                <input class="i1" type="text" name="use" placeholder="USUARIO" ><br><br><br>
                <label class="label1" for="lname">CONTRASEÑA</label><br><br><br>
                <input class="i1" type="password" name="pas" placeholder="CONTRASEÑA" ><br><br><br>
                <button class="btn purple" type="submit" name="btnl" value="Aceptar">Ingresar</button>
                
   	</form>
            </div>
    </body>
</html>
