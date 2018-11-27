package modelo;


import Controlador.Conexion;
import java.sql.Connection;
import java.sql.PreparedStatement;
import javax.swing.JOptionPane;


public class Empleado {
    Conexion con=new Conexion();
    Connection cnn=con.conexionbd();
    PreparedStatement ps=null;
    public int ingresarEmpleado (Empleadosetget inggs){
       int dato=0;
        try {
            
        
ps=cnn.prepareStatement("INSERT INTO Empleado values(?,?,?,?,?,?,?)");
ps.setString(1,inggs.getEmId());
ps.setString(2,inggs.getEmNombre());
ps.setString(3,inggs.getEmCargo());
ps.setString(4,inggs.getEmTipo());
ps.setString(5,inggs.getEmEspecialidad());
ps.setString(6,inggs.getEmEstado());
ps.setString(7,inggs.getEmFoto());
ps.executeUpdate();
            JOptionPane.showMessageDialog(null,"datos ingresados");
            
    } catch (Exception e) {
        JOptionPane.showMessageDialog(null,"datos no almacenados"+e);
        }
 
    return dato;
    }
}

  

