  
package modelo;
 
        import Controlador.Conexion;
import java.sql.Connection;
import java.sql.PreparedStatement;
import javax.swing.JOptionPane;
import modelo.Lugarsetget;

public class Lugar {
    Conexion con=new Conexion();
    Connection cnn=con.conexionbd();
    PreparedStatement ps=null;
    public int ingresarLugar (Lugarsetget inggs){
       int dato=0;
        try {
            
        
ps=cnn.prepareStatement("INSERT INTO Lugar values(?,?,?,?,?,?)");
ps.setString(1,inggs.getLugCodigo());
ps.setString(2,inggs.getLugUbicacion());
ps.setString(3,inggs.getLugHorario());
ps.setString(4,inggs.getLugCosto());
ps.setString(5,inggs.getLugCapacidad());
ps.setString(6,inggs.getLugEstado());
ps.executeUpdate();
            JOptionPane.showMessageDialog(null,"datos ingresados");
            
    } catch (Exception e) {
        JOptionPane.showMessageDialog(null,"datos no almacenados"+e);
        }
 
    return dato;
    }
}
