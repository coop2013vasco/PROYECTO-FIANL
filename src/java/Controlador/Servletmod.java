package Controlador;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;
import javax.swing.JOptionPane;
import modelo.Actualizar;
import modelo.Caddiesetget;
import modelo.ClienteCaddiesetget;
import modelo.Empleadosetget;
import modelo.Eventosetget;
import modelo.Fundacionsetget;
import modelo.Lugarsetget;
import modelo.Reservagetset;
import modelo.Serviciosetget;
import modelo.Usuariosetget;
import modelo.editarperfilcliente;

/**
 *
 * @author user
 */
@WebServlet(name = "Servletmod", urlPatterns = {"/Servletmod"})
@MultipartConfig
public class Servletmod extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
   
        if(request.getParameter("btnactusu")!=null){
            this.ActualizarUsuario(request,response);
        }        
             if (request.getParameter("btneliusu")!=null){
                  this.EliminarUsuario(request,response);
              }
       
        if(request.getParameter("btnactEmp")!=null){
             this.ActualizarEmpleado(request, response);
        }   
             if (request.getParameter("btneliEmp")!=null){
                  this.EliminarEmpleado(request, response);
              }
           
        if(request.getParameter("btnactFun")!=null){
             this.ActualizarFundacion(request, response);
        }   
             if (request.getParameter("btneliFun")!=null){
                  this.EliminarFundacion(request, response);
              }
        if(request.getParameter("btnactCad")!=null){
             this.ActualizarCaddie(request, response);
        }   
             if (request.getParameter("btneliCad")!=null){
                  this.EliminarCaddie(request, response);
              }      
    
        if(request.getParameter("btnactCliCad")!=null){
             this.ActualizarClienteCaddie(request, response);
        }   
             if (request.getParameter("btneliCliCad")!=null){
                  this.EliminarClienteCaddie(request, response);
              } 
        
        if(request.getParameter("btnactSer")!=null){
             this.ActualizarServicio(request, response);
        }   
             if (request.getParameter("btneliSer")!=null){
                  this.EliminarServicio(request, response);
              }  
        if(request.getParameter("btnactLug")!=null){
             this.ActualizarServicio(request, response);
        }   
             if (request.getParameter("btneliLug")!=null){
                  this.EliminarServicio(request, response);
              }
        if(request.getParameter("btnactRes")!=null){
             this.ActualizarReserva(request, response);
        }   
             if (request.getParameter("btneliRes")!=null){
                  this.EliminarReserva(request, response);
              }  
        if(request.getParameter("btnactEve")!=null){
             this.ActualizarEvento(request, response);
        }   
             if (request.getParameter("btneliEve")!=null){
                  this.EliminarEvento(request, response);
              }         
             
     if(request.getParameter("btnactperf")!=null){
             this.ActualizarPerfil(request, response);
        }
             
             
             
    }

     protected void ActualizarUsuario(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
            
        String UID,UUSUARIO,UCLAVE,UROL,UNOMBRE,UCARGO,UFOTO,UESTADO;
                
                UID=request.getParameter("UsuId");
         UUSUARIO=request.getParameter("UsuUsuario");
         UCLAVE=request.getParameter("UsuClave");
         UROL=request.getParameter("UsuRol");
         UNOMBRE=request.getParameter("UsuNombre");
         UCARGO=request.getParameter("UsuCargo");
         UFOTO=request.getParameter("UsuFoto");
         UESTADO=request.getParameter("UsuEstado");
    
         Usuariosetget inggs=new Usuariosetget(UID, UUSUARIO, UCLAVE, UROL, UNOMBRE, UCARGO, UFOTO, UESTADO);
         Actualizar act=new Actualizar();
         act.modificarusuario(inggs);
         request.getRequestDispatcher("usuario.jsp").forward(request,response);
     }
    
 protected void EliminarUsuario(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
            
        String UID,UUSUARIO,UCLAVE,UROL,UNOMBRE,UCARGO,UFOTO,UESTADO;
                
                UID=request.getParameter("UsuId");
         UUSUARIO=request.getParameter("UsuUsuario");
         UCLAVE=request.getParameter("UsuClave");
         UROL=request.getParameter("UsuRol");
         UNOMBRE=request.getParameter("UsuNombre");
         UCARGO=request.getParameter("UsuCargo");
         UFOTO=request.getParameter("UsuFoto");
         UESTADO=request.getParameter("UsuEstado");
    
         Usuariosetget inggs=new Usuariosetget(UID, UUSUARIO, UCLAVE, UROL, UNOMBRE, UCARGO, UFOTO, UESTADO);
         Actualizar act=new Actualizar();
         act.EliminarUsuario(   inggs);
         request.getRequestDispatcher("usuario.jsp").forward(request,response);
     }    
 
 
 
      protected void ActualizarEmpleado(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
            
          String EID,ENOM,ECARGO,ETIPO,EESPECIALIDAD,EESTADO,EmFoto;
                
         EID=request.getParameter("EmId");
         ENOM=request.getParameter("EmNombre");
         ECARGO=request.getParameter("EmCargo");
         ETIPO=request.getParameter("EmTipo");
         EESPECIALIDAD=request.getParameter("EmEspecialidad");
         EESTADO=request.getParameter("EmEstado");
         
         EmFoto=request.getParameter("EmFoto");
         Part foto= request.getPart("EmFoto");
        String Emidcodigofoto=foto.getSubmittedFileName();
        String Url2="";
        if(!Emidcodigofoto.equals("")){
        String nombre= EID+"_"+Emidcodigofoto;
        //JOptionPane.showMessageDialog(null,"foto1");
        String Url="E:\\Drive\\prueba\\build\\web\\imagen\\"+nombre;
        //JOptionPane.showMessageDialog(null,Url);
        Url2="imagen/"+nombre;
        InputStream file=foto.getInputStream();
        File f=new File(Url);
        FileOutputStream sal=new FileOutputStream(f);
        int num=file.read();
        while(num !=-1){
            sal.write(num);
            num=file.read();
        } 
        }
         else{
            Url2=request.getParameter("Fotoant");
        }
          Empleadosetget inggs=new Empleadosetget(EID, ENOM, ECARGO, ETIPO, EESPECIALIDAD, EESTADO, Url2);
         Actualizar act=new Actualizar();
         act.modificarEmpleado(inggs);
         request.getRequestDispatcher("Empleado.jsp").forward(request,response);
     }
    
 protected void EliminarEmpleado(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
            
        String EID,ENOM,ECARGO,ETIPO,EESPECIALIDAD,EESTADO,EFOTO;
                
         EID=request.getParameter("EmId");
         ENOM=request.getParameter("EmNombre");
         ECARGO=request.getParameter("EmCargo");
         ETIPO=request.getParameter("EmTipo");
         EESPECIALIDAD=request.getParameter("EmEspecialidad");
         EESTADO=request.getParameter("EmEstado");
         EFOTO=request.getParameter("UsuFoto"); 
        
         
         
         
          Empleadosetget inggs=new Empleadosetget(EID, ENOM, ECARGO, ETIPO, EESPECIALIDAD, EESTADO, EFOTO);
         Actualizar act=new Actualizar();
         act.EliminarEmpleado(inggs);
         request.getRequestDispatcher("Empleado.jsp").forward(request,response);
     }    

       protected void ActualizarFundacion(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
            
        String FNIT,FTELEFONO,FUBICACION,FNOMBRE,ENCARGADO,FFOTO;
                
         FNIT=request.getParameter("FunNit");
         FTELEFONO=request.getParameter("FunTelefono");
         FUBICACION=request.getParameter("FunUbicacion");
         FNOMBRE=request.getParameter("FunNombre");
         ENCARGADO=request.getParameter("Encargado");
         FFOTO=request.getParameter("FunFoto");
                  
           Fundacionsetget inggs=new Fundacionsetget(FNIT, FTELEFONO, FUBICACION, FNOMBRE, ENCARGADO, FFOTO);
         Actualizar act=new Actualizar();
         act.modificarFundacion(inggs);
         request.getRequestDispatcher("Fundacion.jsp").forward(request,response);
     }
    
 protected void EliminarFundacion(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
     String FNIT,FTELEFONO,FUBICACION,FNOMBRE,ENCARGADO,FFOTO;
                
         FNIT=request.getParameter("FunNit");
         FTELEFONO=request.getParameter("FunTelefono");
         FUBICACION=request.getParameter("FunUbicacion");
         FNOMBRE=request.getParameter("FunNombre");
         ENCARGADO=request.getParameter("Encargado");
         FFOTO=request.getParameter("FunFoto");
                  
           Fundacionsetget inggs=new Fundacionsetget(FNIT, FTELEFONO, FUBICACION, FNOMBRE, ENCARGADO, FFOTO);
         Actualizar act=new Actualizar();
         act.modificarFundacion(inggs);
         request.getRequestDispatcher("Fundacion.jsp").forward(request,response);
     }   

 protected void ActualizarCaddie(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
            
        String CadId,CadFun,CadNombre,CadRanking,Estado,CadFoto;
                
        
         CadId=request.getParameter("CadId");
         CadFun=request.getParameter("CadFun");
         CadNombre=request.getParameter("CadNombre");
         CadRanking=request.getParameter("CadRanking");
         Estado=request.getParameter("Estado");
         CadFoto=request.getParameter("CadFoto");
         
        Part foto= request.getPart("CadFoto");
        String caddcodigofoto=foto.getSubmittedFileName();
        String Url2="";
        if(!caddcodigofoto.equals("")){
        String nombre= CadId+"_"+caddcodigofoto;
        String Url="E:\\Drive\\prueba\\build\\web\\imagen\\"+nombre;
      
        Url2="imagen/"+nombre;
        InputStream file=foto.getInputStream();
        File f=new File(Url);
        FileOutputStream sal=new FileOutputStream(f);
        int num=file.read();
        while(num !=-1){
            sal.write(num);
            num=file.read();
        }
        }
        else{
            Url2=request.getParameter("Fotoant");
        }
           Caddiesetget inggs=new Caddiesetget(CadId, CadFun, CadNombre, CadRanking, Estado, Url2);
         Actualizar act=new Actualizar();
         act.modificarCaddie(inggs);
         request.getRequestDispatcher("Caddie.jsp").forward(request,response);
     }
    
 protected void EliminarCaddie(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
            
        String CadId,CadFun,CadNombre,CadRanking,Estado,CadFoto;
                
         CadId=request.getParameter("CadId");
         CadFun=request.getParameter("CadFun");
         CadNombre=request.getParameter("CadNombre");
         CadRanking=request.getParameter("CadRanking");
         Estado=request.getParameter("Estado");
         CadFoto=request.getParameter("CadFoto");
                  
           Caddiesetget inggs=new Caddiesetget(CadId, CadFun, CadNombre, CadRanking, Estado, CadFoto);
         Actualizar act=new Actualizar();
         act.EliminarCaddie(inggs);
         request.getRequestDispatcher("Caddie.jsp").forward(request,response);
     }    



 protected void ActualizarClienteCaddie(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
            
        String CliCaCodigo,CliCaCliId,CliCaCaId,CliCaFHSer,CliCaCalific,CliCaTalega;
                
        CliCaCodigo=request.getParameter("CliCaCodigo");
         CliCaCliId=request.getParameter("CliCaCliId");
         CliCaCaId=request.getParameter("CliCaCaId");
         CliCaFHSer=request.getParameter("CliCaFHSer");
         CliCaCalific=request.getParameter("CliCaCalific");
         CliCaTalega=request.getParameter("CliCaTalega");
                  
           ClienteCaddiesetget inggs=new ClienteCaddiesetget(CliCaCodigo, CliCaCliId, CliCaCaId, CliCaFHSer, CliCaCalific, CliCaTalega);
         Actualizar act=new Actualizar();
         act.modificarClienteCaddie(inggs);
         request.getRequestDispatcher("Cliente_Caddie.jsp").forward(request,response);
     }
    
 protected void EliminarClienteCaddie(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
            
         String CliCaCodigo,CliCaCliId,CliCaCaId,CliCaFHSer,CliCaCalific,CliCaTalega;
                
        CliCaCodigo=request.getParameter("CliCaCodigo");
         CliCaCliId=request.getParameter("CliCaCliId");
         CliCaCaId=request.getParameter("CliCaCaId");
         CliCaFHSer=request.getParameter("CliCaFHSer");
         CliCaCalific=request.getParameter("CliCaCalific");
         CliCaTalega=request.getParameter("CliCaTalega");
                  
           ClienteCaddiesetget inggs=new ClienteCaddiesetget(CliCaCodigo, CliCaCliId, CliCaCaId, CliCaFHSer, CliCaCalific, CliCaTalega);
         Actualizar act=new Actualizar();
         act.EliminarClienteCaddie(inggs);
         request.getRequestDispatcher("Cliente_Caddie.jsp").forward(request,response);
     }    


  protected void ActualizarServicio(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
            
        String SerCodigo,SerNombre,SerCosto,SerDescripcion,SerEstado;
                
        SerCodigo=request.getParameter(" SerCodigo");
         SerNombre=request.getParameter("SerNombre");
         SerCosto=request.getParameter("SerCosto");
         SerDescripcion=request.getParameter("SerDescripcion");
         SerEstado=request.getParameter("SerEstado");
                           
           Serviciosetget inggs=new Serviciosetget(SerCodigo, SerNombre, SerCosto, SerDescripcion, SerEstado);
         Actualizar act=new Actualizar();
         act.modificarServico(inggs);
         request.getRequestDispatcher("Servicio.jsp").forward(request,response);
     }
    
 protected void EliminarServicio(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
            
        String SerCodigo,SerNombre,SerCosto,SerDescripcion,SerEstado;
                
        SerCodigo=request.getParameter(" SerCodigo");
         SerNombre=request.getParameter("SerNombre");
         SerCosto=request.getParameter("SerCosto");
         SerDescripcion=request.getParameter("SerDescripcion");
         SerEstado=request.getParameter("SerEstado");
                           
           Serviciosetget inggs=new Serviciosetget(SerCodigo, SerNombre, SerCosto, SerDescripcion, SerEstado);
         Actualizar act=new Actualizar();
         act.EliminarServicio(inggs);
         request.getRequestDispatcher("Servicio.jsp").forward(request,response);
     }  

 
 

 
 protected void ActualizarLugar(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
            
        String LugCodigo,LugUbicacion,LugHorario,LuCosto,LugCapacidad,LugEstado;
                
        LugCodigo=request.getParameter("LugCodigo");
        LugUbicacion=request.getParameter("LugUbicacion");
        LugHorario=request.getParameter("LugHorario");
        LuCosto=request.getParameter("LuCosto");
        LugCapacidad=request.getParameter("LugCapacidad");
        LugEstado=request.getParameter("CliCaTalega");
                  
           Lugarsetget inggs=new Lugarsetget(LugCodigo, LugUbicacion, LugHorario, LuCosto, LugCapacidad, LugEstado);
         Actualizar act=new Actualizar();
         act.modificarLugar(inggs);
         request.getRequestDispatcher("Lugar.jsp").forward(request,response);
     }
    
 protected void EliminarLugar(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
            
        String LugCodigo,LugUbicacion,LugHorario,LuCosto,LugCapacidad,LugEstado;
                
        LugCodigo=request.getParameter("LugCodigo");
        LugUbicacion=request.getParameter("LugUbicacion");
        LugHorario=request.getParameter("LugHorario");
        LuCosto=request.getParameter("LuCosto");
        LugCapacidad=request.getParameter("LugCapacidad");
        LugEstado=request.getParameter("CliCaTalega");
                  
           Lugarsetget inggs=new Lugarsetget(LugCodigo, LugUbicacion, LugHorario, LuCosto, LugCapacidad, LugEstado);
         Actualizar act=new Actualizar();
         act.EliminarLugar(inggs);
         request.getRequestDispatcher("Lugar.jsp").forward(request,response);
     }
 
 protected void ActualizarReserva(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
            
        String ResCodReserva,ResCliId,ResLugCodigo,ResSerCodigo,ResPrecio,ResFHInicio,ResFHFin;
                
        ResCodReserva=request.getParameter("ResCodReserva");
        ResCliId=request.getParameter("ResCliId");
        ResLugCodigo=request.getParameter("ResLugCodigo");
        ResSerCodigo=request.getParameter("ResSerCodigo");
        ResPrecio=request.getParameter("ResPrecio");
        ResFHInicio=request.getParameter("ResFHInicio");
        ResFHFin=request.getParameter("ResFHFin");
           Reservagetset inggs=new Reservagetset(ResCodReserva, ResCliId, ResLugCodigo, ResSerCodigo, ResPrecio, ResFHInicio, ResFHFin);
         Actualizar act=new Actualizar();
         act.modificarResserva(inggs);
         request.getRequestDispatcher("Reserva.jsp").forward(request,response);
     }
    
 protected void EliminarReserva(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
            
        String ResCodReserva,ResCliId,ResLugCodigo,ResSerCodigo,ResPrecio,ResFHInicio,ResFHFin;
                
        ResCodReserva=request.getParameter("ResCodReserva");
        ResCliId=request.getParameter("ResCliId");
        ResLugCodigo=request.getParameter("ResLugCodigo");
        ResSerCodigo=request.getParameter("ResSerCodigo");
        ResPrecio=request.getParameter("ResPrecio");
        ResFHInicio=request.getParameter("ResFHInicio");
        ResFHFin=request.getParameter("ResFHFin");
           Reservagetset inggs=new Reservagetset(ResCodReserva, ResCliId, ResLugCodigo, ResSerCodigo, ResPrecio, ResFHInicio, ResFHFin);
         Actualizar act=new Actualizar();
         act.EliminarReserva(inggs);
         request.getRequestDispatcher("Reserva.jsp").forward(request,response);
     }
 
 protected void ActualizarEvento(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
            
        String Evecodigo,EveEmpId,EveLugCod,EveDescripcion,EveFoto,EveFecHo;
                
        Evecodigo=request.getParameter("Evecodigo");
        EveEmpId=request.getParameter("EveEmpId");
        EveLugCod=request.getParameter("EveLugCod");
        EveDescripcion=request.getParameter("EveDescripcion");
        EveFoto=request.getParameter("EveFoto");
        EveFecHo=request.getParameter("EveFecHo");
           Eventosetget inggs=new Eventosetget(Evecodigo, EveEmpId, EveLugCod, EveDescripcion, EveFoto, EveFecHo);
         Actualizar act=new Actualizar();
         act.modificarEvento(inggs);
         request.getRequestDispatcher("Evento.jsp").forward(request,response);
     }
    
 protected void EliminarEvento(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
            
          String Evecodigo,EveEmpId,EveLugCod,EveDescripcion,EveFoto,EveFecHo;
                
        Evecodigo=request.getParameter("Evecodigo");
        EveEmpId=request.getParameter("EveEmpId");
        EveLugCod=request.getParameter("EveLugCod");
        EveDescripcion=request.getParameter("EveDescripcion");
        EveFoto=request.getParameter("EveFoto");
        EveFecHo=request.getParameter("EveFecHo");
           Eventosetget inggs=new Eventosetget(Evecodigo, EveEmpId, EveLugCod, EveDescripcion, EveFoto, EveFecHo);
         Actualizar act=new Actualizar();
         act.EliminarEvento(inggs);
         request.getRequestDispatcher("Evento.jsp").forward(request,response);
     }
 
 
  protected void ActualizarPerfil(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        PrintWriter out = response.getWriter();
            
                 String CliId,CliNombre,CliTipo,CliTelefono,CliFechVinculacion,CliFoto;
                
         CliId=request.getParameter("CliId");
         CliNombre=request.getParameter("CliNombre");
         CliTipo=request.getParameter("CliTipo");
         CliTelefono=request.getParameter("CliTelefono");
         CliFechVinculacion=request.getParameter("CliFechVinculacion");
         CliFoto=request.getParameter("CliFoto");
         
        Part foto= request.getPart("CliFoto");
        String clicodigofoto=foto.getSubmittedFileName();
        String nombre= CliId+"_"+clicodigofoto;
        JOptionPane.showMessageDialog(null,"foto1");
        String Url="E:\\Drive\\prueba\\build\\web\\imagen\\"+nombre;
        JOptionPane.showMessageDialog(null,Url);
         String Url2="imagen/"+nombre;
        InputStream file=foto.getInputStream();
        File f=new File(Url);
        FileOutputStream sal=new FileOutputStream(f);
        int num=file.read();
        while(num !=-1){
            sal.write(num);
            num=file.read();
        }
        editarperfilcliente inggs=new editarperfilcliente(CliId, CliNombre, CliTipo, CliTelefono, CliFechVinculacion, Url2);
         Actualizar act=new Actualizar();
         act.modificarPerfil(inggs);
         request.getRequestDispatcher("Perfil.jsp").forward(request,response);
    }
    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
