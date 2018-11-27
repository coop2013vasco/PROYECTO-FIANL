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
 * @author SENA
 */
public class Evento {
    Conexion con=new Conexion();
    Connection cnn=con.conexionbd();
    PreparedStatement ps=null;
 
public int IngresarEvento(Eventosetget inggs){
    int dato=0;
    try {
    ps=cnn.prepareStatement("INSERT INTO Evento values(?,?,?,?,?,?)");
ps.setString(1,inggs.getEvecodigo());
ps.setString(2,inggs.getEveEmpId());
ps.setString(3,inggs.getEveLugCod());
ps.setString(4,inggs.getDescripcion());
ps.setString(5,inggs.getEveFoto());
ps.setString(6,inggs.getEveFecHo());
ps.executeUpdate();
            JOptionPane.showMessageDialog(null,"datos ingresados");
            
    } catch (Exception e) {
 JOptionPane.showMessageDialog(null,"datos no almacenados"+e);
    }
return dato;
}    

}
