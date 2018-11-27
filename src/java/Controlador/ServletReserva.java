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
import modelo.Actualizar;
import modelo.Reserva;
import modelo.Reservagetset;

/**
 *
 * @author SENA
 */
@WebServlet(name = "ServletReserva", urlPatterns = {"/ServletReserva"})
public class ServletReserva extends HttpServlet {

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
         
        String ResCodReserva,ResCliId,ResLugCodigo,ResSerCodigo,ResPrecio,ResFHInicio,ResFHFin;
                
        ResCodReserva=request.getParameter("ResCodReserva");
        ResCliId=request.getParameter("ResCliId");
        ResLugCodigo=request.getParameter("ResLugCodigo");
        ResSerCodigo=request.getParameter("ResSerCodigo");
        ResPrecio=request.getParameter("ResPrecio");
        ResFHInicio=request.getParameter("ResFHInicio");
        ResFHFin=request.getParameter("ResFHFin");
           Reservagetset inggs=new Reservagetset(ResCodReserva, ResCliId, ResLugCodigo, ResSerCodigo, ResPrecio, ResFHInicio, ResFHFin);
         Reserva ing=new Reserva();
         ing.IngresarReserva(inggs);
         request.getRequestDispatcher("reservacion.jsp").forward(request,response);
       
       
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
