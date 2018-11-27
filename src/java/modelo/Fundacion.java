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

/**
 *
 * @author user
 */
public class Fundacion {
    Conexion con=new Conexion();
    Connection cnn=con.conexionbd();
    PreparedStatement ps=null;
    public int ingresarFundacion (Fundacionsetget inggs){
       int dato=0;
        try {
            
        
ps=cnn.prepareStatement("INSERT INTO Fundacion values(?,?,?,?,?,?)");
ps.setString(1,inggs.getFunNit());
ps.setString(2,inggs.getFunTelefono());
ps.setString(3,inggs.getFunUbicacion());
ps.setString(4,inggs.getFunNombre());
ps.setString(5,inggs.getEncargado());
ps.setString(6,inggs.getFunFoto());

ps.executeUpdate();
            JOptionPane.showMessageDialog(null,"datos ingresados");
            
    } catch (Exception e) {
        JOptionPane.showMessageDialog(null,"datos no almacenados"+e);
        }
 
    return dato;
    }     
}
