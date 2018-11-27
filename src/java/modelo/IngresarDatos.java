
package modelo;


import Controlador.Conexion;
import java.sql.Connection;
import java.sql.PreparedStatement;
import javax.swing.JOptionPane;

public class IngresarDatos {
    
    Conexion con=new Conexion();
    Connection cnn=con.conexionbd();
    PreparedStatement ps=null;
    
    public void ingresarRoles(ingresodatosgetset inggs){
        try {
            ps=cnn.prepareStatement("insert into Roles values (?,?)");
            ps.setString(1,inggs.getRolCodigo());
            ps.setString(2,inggs.getRolNombre());
            ps.executeUpdate();
            JOptionPane.showMessageDialog(null,"Datos Registrados");
        } catch (Exception e) {
            JOptionPane.showMessageDialog(null,"ERROR DE ROLES" +e);
        }
}
     

    
     public void ingresarCliente(ingresodatosgetset inggs){
        try {
            ps=cnn.prepareStatement("insert into Cliente values (?,?,?,?,?,?)");
            ps.setString(1,inggs.getCliId());
            ps.setString(2,inggs.getCliNombre());
            ps.setString(3,inggs.getCliTipo());
            ps.setString(4,inggs.getCliTelefono());
            ps.setString(5,inggs.getCliFechVinculacion());
            ps.setString(6,inggs.getCliFoto());
            ps.executeUpdate();
            JOptionPane.showMessageDialog(null,"Datos Registrados");
        } catch (Exception e) {
            JOptionPane.showMessageDialog(null,"ERROR DE CLIENTE" +e);
        }
}
      public void ingresarEncuesta(ingresodatosgetset inggs){
        try {
            ps=cnn.prepareStatement("insert into Encuesta values (?,?,?,?,?,?,?,?)");
            ps.setString(1,inggs.getEncCodigo());
            ps.setString(2,inggs.getEncEncargado());
            ps.setString(3,inggs.getEnDisponibilidad());
            ps.setString(4,inggs.getEncNombre());
            ps.setString(5,inggs.getEncCantPreguntas());
            ps.setString(6,inggs.getEncfhp());
            ps.setString(7,inggs.getEncfhe());
            ps.setString(8,inggs.getEstadistica());
            ps.executeUpdate();
            JOptionPane.showMessageDialog(null,"Datos Registrados");
        } catch (Exception e) {
            JOptionPane.showMessageDialog(null,"ERROR DE ENCUESTA" +e);
        }
}
       public void ingresarFichaPuntuacion(ingresodatosgetset inggs){
        try {
            ps=cnn.prepareStatement("insert into FichaPuntuacion values (?,?,?,?,?)");
            ps.setString(1,inggs.getFpCodigo());
            ps.setString(2,inggs.getFpTorneo());
            ps.setString(3,inggs.getFpJugador());
            ps.setString(4,inggs.getFpAnotadotor());
            ps.setString(5,inggs.getFpFecha());
            ps.executeUpdate();
            JOptionPane.showMessageDialog(null,"Datos Registrados");
        } catch (Exception e) {
            JOptionPane.showMessageDialog(null,"ERROR DE FICHA DE PUNTUACION" +e);
        }
}
       public void ingresarPQRS(ingresodatosgetset inggs){
        try {
            ps=cnn.prepareStatement("insert into PQRS values (?,?,?,?,?,?,?)");
            ps.setString(1,inggs.getPqCodRadicacion());
            ps.setString(2,inggs.getPqCliId());
            ps.setString(3,inggs.getPqTipo());
            ps.setString(4,inggs.getPqFechaHor());
            ps.setString(5,inggs.getPqContenido());
            ps.setString(6,inggs.getPqEstado());
            ps.setString(7,inggs.getPqRespuesta());
            ps.executeUpdate();
            JOptionPane.showMessageDialog(null,"Datos Registrados");
        } catch (Exception e) {
            JOptionPane.showMessageDialog(null,"ERROR DE PQRS" +e);
        }
}
       public void ingresarPreguntaxEncuesta(ingresodatosgetset3 inggs){
        try {
            ps=cnn.prepareStatement("insert into PreguntaxEncuesta values (?,?,?)");
            ps.setString(1,inggs.getPreEncCodigo());
            ps.setString(2,inggs.getPreEncContenido());
            ps.setString(3,inggs.getPreEncEnccod());
            ps.executeUpdate();
            JOptionPane.showMessageDialog(null,"Datos Registrados");
        } catch (Exception e) {
            JOptionPane.showMessageDialog(null,"ERROR DE PQRS" +e);
        }
}
}
