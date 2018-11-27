package Controlador;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.swing.JOptionPane;
import modelo.consultalog;
import modelo.ingresodatosgetset4;

@WebServlet(name = "Servletlogin", urlPatterns = {"/Servletlogin"})
public class Servletlogin extends HttpServlet {
    String use,pas,u,c,r,d;
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            
        if(request.getParameter("btnl")!=null){
            use=request.getParameter("use");
            pas=request.getParameter("pas");
            ingresodatosgetset4 inggs=new ingresodatosgetset4(use, pas);
            consultalog ings=new consultalog();
            ArrayList<ingresodatosgetset4> arreglo=new ArrayList<>();
            arreglo=ings.consultaloginempleado(inggs);
            for(int i=0; i<arreglo.size();i++){
                inggs=arreglo.get(i);
                u=inggs.getUsuUsuario();
                c=inggs.getUsuClave();
                r=inggs.getUsuRol();
                d=inggs.getUsuId();
                JOptionPane.showMessageDialog(null,u);
            }
                if(u.equals(use) && (c.equals(pas))){
                    if(r.equals("1")){
                    JOptionPane.showMessageDialog(null,"Bienvenido Admin");
                    request.getRequestDispatcher("ADMON.jsp").forward(request, response);
                    }
                     if(r.equals("2")){
                    JOptionPane.showMessageDialog(null,"Bienvenido Cliente");
                    request.getRequestDispatcher("InicioCliente.jsp").forward(request, response);
                    }
                    if(r.equals("3")){
                    JOptionPane.showMessageDialog(null,"Bienvenido Empleado");
                    request.getRequestDispatcher("InicioEmpleado.jsp").forward(request, response);
                    }
                    if(r.equals("4")){
                    JOptionPane.showMessageDialog(null,"Bienvenido Caddie");
                    request.getRequestDispatcher("InicioCaddie.jsp").forward(request, response);
                    }
                    String nombre=ings.consultanombreusuario();
                    JOptionPane.showMessageDialog(null,"Nombre " + nombre);
                    HttpSession nom=request.getSession();
                    nom.setAttribute("datonom",nombre);
                }
                else{
                        JOptionPane.showMessageDialog(null,"DATOS NO VALIDOS");
                        request.getRequestDispatcher("index.jsp").forward(request, response);
                    }
            }
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