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

public class Reserva {

    Conexion con=new Conexion();
    Connection cnn=con.conexionbd();
    PreparedStatement ps=null; 

    
    public int IngresarReserva(Reservagetset inggs){
    int dato=0;
        try {
            
        
ps=cnn.prepareStatement("INSERT INTO Reservacion values(?,?,?,?,?,?,?)");
ps.setString(1,inggs.getResCodReserva());
ps.setString(2,inggs.getResCliId());
ps.setString(3,inggs.getResLugCodigo());
ps.setString(4,inggs.getResSerCodigo());
ps.setString(5,inggs.getResPrecio());
ps.setString(6,inggs.getResFHInicio());
ps.setString(7,inggs.getResFHFin());
ps.executeUpdate();
            JOptionPane.showMessageDialog(null,"datos ingresados");
            
    } catch (Exception e) {
        JOptionPane.showMessageDialog(null,"datos no almacenados"+e);
        }
 
    return dato;
    }
}
