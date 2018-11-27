/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Controlador;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import modelo.Lugar;
import modelo.Lugarsetget;

/**
 *
 * @author SENA
 */
@WebServlet(name = "ServletLugar", urlPatterns = {"/ServletLugar"})
public class ServletLugar extends HttpServlet {

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
       
       
       String LugCodigo,LugUbicacion,LugHorario,LugCosto,LugCapacidad,LugEstado;
                
         LugCodigo=request.getParameter("LugCodigo");
         LugUbicacion=request.getParameter("LugUbicacion");
         LugHorario=request.getParameter("LugHorario");
         LugCosto=request.getParameter("LugCosto");
         LugCapacidad=request.getParameter("LugCapacidad");
         LugEstado=request.getParameter("LugEstado");
         
           Lugarsetget inggs=new Lugarsetget(LugCodigo, LugUbicacion, LugHorario, LugCosto, LugCapacidad, LugEstado);
           Lugar ing=new Lugar();
         ing.ingresarLugar(inggs);
         request.getRequestDispatcher("Lugar.jsp").forward(request,response);
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
