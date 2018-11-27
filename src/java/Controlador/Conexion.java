/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package Controlador;

import java.sql.Connection;
import java.sql.DriverManager;
import javax.swing.JOptionPane;

/**
 *
 * @author user
 */
public class Conexion {
    Connection cnn;
  public Connection conexionbd(){
      try {
             Class.forName("com.mysql.jdbc.Driver");
            cnn=DriverManager.getConnection("jdbc:mysql://localhost/serrezuela","root","javiersena");
            //JOptionPane.showMessageDialog(null,"Datos Conectados");
            
        } catch (Exception e) {
            System.out.println("error "+e);
        }
        return cnn;
      
      }
}
