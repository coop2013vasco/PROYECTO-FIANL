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


public class ClienteCaddie {
Conexion con=new Conexion();
    Connection cnn=con.conexionbd();
    PreparedStatement ps=null;

    public int ingresarClienteCaddie (ClienteCaddiesetget inggs){
       int dato=0;
        try {
            
        
ps=cnn.prepareStatement("INSERT INTO Caddie values(?,?,?,?,?,?)");
ps.setString(1,inggs.getCliCaCodigo());
ps.setString(2,inggs.getCliCaCliId());
ps.setString(3,inggs.getCliCaCaId());
ps.setString(4,inggs.getCliCaFHSer());
ps.setString(5,inggs.getCliCaCalific());
ps.setString(6,inggs.getCliCaTalega());
ps.executeUpdate();
            JOptionPane.showMessageDialog(null,"datos ingresados");
            
    } catch (Exception e) {
        JOptionPane.showMessageDialog(null,"datos no almacenados"+e);
        }
 
    return dato;
    }     

    
}
