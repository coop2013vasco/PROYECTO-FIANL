/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package modelo;

import Controlador.Conexion;
import java.sql.Connection;
import java.sql.PreparedStatement;
import javax.swing.JOptionPane;

public class Caddie {
    Conexion con=new Conexion();
    Connection cnn=con.conexionbd();
    PreparedStatement ps=null;

 public int ingresarCaddie (Caddiesetget inggs){
       int dato=0;
        try {
            
        
ps=cnn.prepareStatement("INSERT INTO Caddie values(?,?,?,?,?,?)");
ps.setString(1,inggs.getCadId());
ps.setString(2,inggs.getCadFun());
ps.setString(3,inggs.getCadNombre());
ps.setString(4,inggs.getCadRanking());
ps.setString(5,inggs.getEstado());
ps.setString(6,inggs.getCadFoto());
ps.executeUpdate();
            JOptionPane.showMessageDialog(null,"datos ingresados");
            
    } catch (Exception e) {
        JOptionPane.showMessageDialog(null,"datos no almacenados"+e);
        }
 
    return dato;
    }     
    


}
