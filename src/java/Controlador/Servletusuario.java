package controlador;

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
import modelo.Usuario;
import modelo.Usuariosetget;

/**
 *
 * @author user
 */
@WebServlet(name = "Servletusuario", urlPatterns = {"/Servletusuario"})
@MultipartConfig
public class Servletusuario extends HttpServlet {

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
      
        String UsuId,UsuUsuario,UsuClave,UsuRol,UsuNombre,UsuCargo,UsuFoto,UsuEstado;
         if( request.getParameter("Guardar")!=null){ 
        UsuId=request.getParameter("UsuId");
         UsuUsuario=request.getParameter("UsuUsuario");
         UsuClave=request.getParameter("UsuClave");
         UsuRol=request.getParameter("UsuRol");
         UsuNombre=request.getParameter("UsuNombre");
         UsuCargo=request.getParameter("UsuCargo");
                
             Part foto= request.getPart("UsuFoto");
        String UsuIdfoto=foto.getSubmittedFileName();
        String nombre= UsuId+"_"+UsuIdfoto;
        String Url="E:\\prueba\\web\\imagen\\"+nombre;
        String Url2="imagen/"+nombre;
             InputStream file=foto.getInputStream();
             File f=new File(Url);
             FileOutputStream sal=new FileOutputStream(f);
        int num=file.read();
        while(num !=-1){
            sal.write(num);
            num=file.read();
        }
         
         
         UsuEstado=request.getParameter("UsuEstado");
             Usuariosetget  inggs=new  Usuariosetget(UsuId, UsuUsuario, UsuClave, UsuRol, UsuNombre, UsuCargo, Url2 ,UsuEstado);
             Usuario ing=new Usuario();
        ing.ingresarUsuario(inggs);  
        response.sendRedirect("usuario.jsp");    
        }
        
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
