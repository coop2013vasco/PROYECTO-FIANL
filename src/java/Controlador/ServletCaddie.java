/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
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
import modelo.Caddie;
import modelo.Caddiesetget;

/**
 *
 * @author user
 */
@WebServlet(name = "ServletCaddie", urlPatterns = {"/ServletCaddie"})
@MultipartConfig
public class ServletCaddie extends HttpServlet {

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
     
        String CadId,CadFun,CadNombre,CadRanking,Estado,CadFoto;
                
         CadId=request.getParameter("CadId");
         CadFun=request.getParameter("CadFun");
         CadNombre=request.getParameter("CadNombre");
         CadRanking=request.getParameter("CadRanking");
         Estado=request.getParameter("Estado");
         CadFoto=request.getParameter("CadFoto");
         
        Part foto= request.getPart("CadFoto");
        String caddcodigofoto=foto.getSubmittedFileName();
        String nombre= CadId+"_"+caddcodigofoto;
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

         
           Caddiesetget inggs=new Caddiesetget(CadId, CadFun, CadNombre, CadRanking, Estado, Url2);
         Caddie ing=new Caddie();
         ing.ingresarCaddie(inggs);
         request.getRequestDispatcher("Caddie.jsp").forward(request,response);
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
