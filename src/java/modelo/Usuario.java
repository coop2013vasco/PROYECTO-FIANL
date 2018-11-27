package modelo;


import Controlador.Conexion;
import java.sql.Connection;
import java.sql.PreparedStatement;
import javax.swing.JOptionPane;

/**
 *
 * @author user
 */
public class Usuario {
    Conexion con=new Conexion();
    Connection cnn=con.conexionbd();
    PreparedStatement ps=null;
    public int ingresarUsuario (Usuariosetget inggs){
       int dato=0;
        try {
            
        
ps=cnn.prepareStatement("INSERT INTO usuario values(?,?,?,?,?,?,?,?)");
ps.setString(1,inggs.getUsuId());
ps.setString(2,inggs.getUsuUsuario());
ps.setString(3,inggs.getUsuClave());
ps.setString(4,inggs.getUsuRol());
ps.setString(5,inggs.getUsuNombre());
ps.setString(6,inggs.getUsuCargo());
ps.setString(7,inggs.getUsuFoto());
ps.setString(8,inggs.getUsuEstado());
ps.executeUpdate();
            JOptionPane.showMessageDialog(null,"datos ingresados");
            
    } catch (Exception e) {
        JOptionPane.showMessageDialog(null,"datos no almacenados"+e);
        }
 
    return dato;
    }     
}