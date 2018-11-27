
package modelo;

import Controlador.Conexion;
import java.sql.Connection;
import java.sql.PreparedStatement;
import javax.swing.JOptionPane;


public class Servicio {
Conexion con=new Conexion();
    Connection cnn=con.conexionbd();
    PreparedStatement ps=null;    

  public int ingresarservicio(Serviciosetget inggs){
        int dato=0;
        try {
            
        
ps=cnn.prepareStatement("INSERT INTO Servicio values(?,?,?,?,?)");
ps.setString(1,inggs.getSerCodigo());
ps.setString(2,inggs.getSerNombre());
ps.setString(3,inggs.getSerCosto());
ps.setString(4,inggs.getSerDescripcion());
ps.setString(5,inggs.getSerEstado());
ps.executeUpdate();
            JOptionPane.showMessageDialog(null,"datos ingresados");
            
    } catch (Exception e) {
        JOptionPane.showMessageDialog(null,"datos no almacenados"+e);
        }
 
    return dato;
  }


}
