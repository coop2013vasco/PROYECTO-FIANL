package modelo;


import Controlador.Conexion;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import javax.swing.JOptionPane;

/**
 *
 * @author user
 */
public class Actualizar {
    Conexion con=new Conexion();
    Connection cnn=con.conexionbd();
    PreparedStatement ps=null;
    ResultSet rs=null;
    
public int modificarusuario(Usuariosetget inggs){

String u;
int datt=0;
    JOptionPane.showMessageDialog(null,"variable");
    try {
        ps=cnn.prepareStatement("UPDATE Usuario set UsuUsuario='"+inggs.getUsuUsuario()+"',UsuNombre='"+inggs.getUsuNombre()+"',UsuClave='"+inggs.getUsuClave()+"',UsuNombre='"+inggs.getUsuNombre()+"',UsuCargo='"+inggs.getUsuCargo()+"',UsuFoto'"+inggs.getUsuFoto()+"',UsuEstado='"+inggs.getUsuEstado()+"' Where UsuId='"+inggs.getUsuId()+"'and UsuRol='"+inggs.getUsuRol()+"'");
    
ps.executeUpdate();
JOptionPane.showMessageDialog(null, "Datos Actualizados");
        
        } catch (Exception e) {
          JOptionPane.showMessageDialog(null,"Datos no Actualizados"+e);
    }
return datt;
 
}      
public int EliminarUsuario(Usuariosetget inggs){
 String  u;
 int datt=0;
 JOptionPane.showMessageDialog(null,"Variable");
    try {
    ps=cnn.prepareStatement("Delete from Usuario Where UsuId='"+inggs.getUsuId()+"' and UsuRol='"+inggs.getUsuRol()+"'");
    ps.executeUpdate();
    JOptionPane.showMessageDialog(null,"Datos Eliminados");
    } catch (Exception e) {
        JOptionPane.showMessageDialog(null,"Datos no Eliminados"+e);
    }
    return datt;
}    
    
public int modificarEmpleado(Empleadosetget inggs){

String u;
int datt=0;
    JOptionPane.showMessageDialog(null,"variable");
    try {
        ps=cnn.prepareStatement("UPDATE Empleado set EmNombre='"+inggs.getEmNombre()+"',EmCargo='"+inggs.getEmCargo()+"',EmTipo='"+inggs.getEmTipo()+"',EmEspecialidad='"+inggs.getEmEspecialidad()+"',EmEstado='"+inggs.getEmEstado()+"',EmFoto='"+inggs.getEmFoto()+"' Where EmId='"+inggs.getEmId()+"'");
   // JOptionPane.showMessageDialog(null,ps);
ps.executeUpdate();
JOptionPane.showMessageDialog(null, "Datos Actualizados");
        
        } catch (Exception e) {
          JOptionPane.showMessageDialog(null,"Datos no Actualizados"+e);
    }
return datt;
 
}      
public int EliminarEmpleado(Empleadosetget inggs){
 String  u;
 int datt=0;
 JOptionPane.showMessageDialog(null,"Variable");
    try {
    ps=cnn.prepareStatement("Delete from Empleado Where EmId='"+inggs.getEmId()+"'");
    ps.executeUpdate();
    JOptionPane.showMessageDialog(null,"Datos Eliminados");
    } catch (Exception e) {
        JOptionPane.showMessageDialog(null,"Datos no Eliminados"+e);
    }
    return datt;
}    
    
public int modificarFundacion(Fundacionsetget inggs){

String u;
int datt=0;
    JOptionPane.showMessageDialog(null,"variable");
    try {
        ps=cnn.prepareStatement("UPDATE Fundacion set FunTelefono='"+inggs.getFunTelefono()+"',FunUbicacion='"+inggs.getFunUbicacion()+"',FunNombre='"+inggs.getFunNombre()+"',Encargado='"+inggs.getEncargado()+"',FunFoto='"+inggs.getFunFoto()+"' Where FunNit='"+inggs.getFunNit()+"'");
    
ps.executeUpdate();
JOptionPane.showMessageDialog(null, "Datos Actualizados");
        
        } catch (Exception e) {
          JOptionPane.showMessageDialog(null,"Datos no Actualizados"+e);
    }
return datt;
 
}      
public int EliminarFundacion(Fundacionsetget inggs){
 String  u;
 int datt=0;
 JOptionPane.showMessageDialog(null,"Variable");
    try {
    ps=cnn.prepareStatement("Delete from Fundacion Where FunNit='"+inggs.getFunNit()+"'");
    ps.executeUpdate();
    JOptionPane.showMessageDialog(null,"Datos Eliminados");
    } catch (Exception e) {
        JOptionPane.showMessageDialog(null,"Datos no Eliminados"+e);
    }
    return datt;
}    
       

public int modificarCaddie(Caddiesetget inggs){

String u;
int datt=0;
    JOptionPane.showMessageDialog(null,"variable");
    try {
        ps=cnn.prepareStatement("UPDATE Caddie set CadFun='"+inggs.getCadFun()+"',CadNombre='"+inggs.getCadNombre()+"',CadRanking='"+inggs.getCadRanking()+"',Estado='"+inggs.getEstado()+"',CadFoto='"+inggs.getCadFoto()+"' Where CadId='"+inggs.getCadId()+"'");
    
ps.executeUpdate();
JOptionPane.showMessageDialog(null, "Datos Actualizados");
        
        } catch (Exception e) {
          JOptionPane.showMessageDialog(null,"Datos no Actualizados"+e);
    }
return datt;
 
}      
public int EliminarCaddie(Caddiesetget inggs){
 String  u;
 int datt=0;
 JOptionPane.showMessageDialog(null,"Variable");
    try {
    ps=cnn.prepareStatement("Delete from Caddie Where CadId='"+inggs.getCadId()+"'");
    ps.executeUpdate();
    JOptionPane.showMessageDialog(null,"Datos Eliminados");
    } catch (Exception e) {
        JOptionPane.showMessageDialog(null,"Datos no Eliminados"+e);
    }
    return datt;
}    



public int modificarClienteCaddie(ClienteCaddiesetget inggs){

String u;
int datt=0;
    JOptionPane.showMessageDialog(null,"variable");
    try {
        ps=cnn.prepareStatement("UPDATE ClienteCaddie set CliCaCliId='"+inggs.getCliCaCliId()+"',CliCaCliId='"+inggs.getCliCaCliId()+"',CliCaCaId='"+inggs.getCliCaCaId()+"',CliCaFHSer='"+inggs.getCliCaFHSer()+"',CliCaCalific='"+inggs.getCliCaCalific()+"',CliCaTalega='"+inggs.getCliCaTalega()+"' Where CliCaCodigo='"+inggs.getCliCaCodigo()+"'");
    
ps.executeUpdate();
JOptionPane.showMessageDialog(null, "Datos Actualizados");
        
        } catch (Exception e) {
          JOptionPane.showMessageDialog(null,"Datos no Actualizados"+e);
    }
return datt;
 
}      
public int EliminarClienteCaddie(ClienteCaddiesetget inggs){
 String  u;
 int datt=0;
 JOptionPane.showMessageDialog(null,"Variable");
    try {
    ps=cnn.prepareStatement("Delete from Caddie Where CadId='"+inggs.getCliCaCaId()+"'");
    ps.executeUpdate();
    JOptionPane.showMessageDialog(null,"Datos Eliminados");
    } catch (Exception e) {
        JOptionPane.showMessageDialog(null,"Datos no Eliminados"+e);
    }
    return datt;
}


public int modificarServico(Serviciosetget inggs){

String u;
int datt=0;
    JOptionPane.showMessageDialog(null,"variable");
    try {
        ps=cnn.prepareStatement("UPDATE Servicio set SerNombre='"+inggs.getSerNombre()+"',SerCosto='"+inggs.getSerCosto()+"',SerDescripcion='"+inggs.getSerDescripcion()+"',SerEstado='"+inggs.getSerEstado()+" Where SerCodigo='"+inggs.getSerCodigo()+"'");
    
ps.executeUpdate();
JOptionPane.showMessageDialog(null, "Datos Actualizados");
        
        } catch (Exception e) {
          JOptionPane.showMessageDialog(null,"Datos no Actualizados"+e);
    }
return datt;
 
}      
public int EliminarServicio(Serviciosetget inggs){
 String  u;
 int datt=0;
 JOptionPane.showMessageDialog(null,"Variable");
    try {
        ps=cnn.prepareStatement("Delete from Servicio where SerCodigo='"+inggs.getSerCodigo()+"'");
    ps.executeUpdate();
    JOptionPane.showMessageDialog(null,"Datos Eliminados");
    } catch (Exception e) {
        JOptionPane.showMessageDialog(null,"Datos no Eliminados"+e);
    }
    return datt;
}




public int modificarLugar(Lugarsetget inggs){

String u;
int datt=0;
    JOptionPane.showMessageDialog(null,"variable");
    try {
        ps=cnn.prepareStatement("UPDATE Lugar set LugUbicacion='"+inggs.getLugUbicacion()+"',LugHorario='"+inggs.getLugHorario()+"',LugCosto='"+inggs.getLugCosto()+"',LucCapacidad='"+inggs.getLugCapacidad()+"',LugEstado='"+inggs.getLugEstado()+"' Where LugCodigo='"+inggs.getLugCodigo()+"'");
    
ps.executeUpdate();
JOptionPane.showMessageDialog(null, "Datos Actualizados");
        
        } catch (Exception e) {
          JOptionPane.showMessageDialog(null,"Datos no Actualizados"+e);
    }
return datt;
 
}      
public int EliminarLugar(Lugarsetget inggs){
 String  u;
 int datt=0;
 JOptionPane.showMessageDialog(null,"Variable");
    try {
        ps=cnn.prepareStatement("Delete from Lugar where LugCodigo='"+inggs.getLugCodigo()+"'");
    ps.executeUpdate();
    JOptionPane.showMessageDialog(null,"Datos Eliminados");
    } catch (Exception e) {
        JOptionPane.showMessageDialog(null,"Datos no Eliminados"+e);
    }
    return datt;
}

public int modificarResserva(Reservagetset inggs){

String u;
int datt=0;
    JOptionPane.showMessageDialog(null,"variable");
    try {
        ps=cnn.prepareStatement("UPDATE Reservacion set ResCliId='"+inggs.getResCliId()+"',ResLugCodigo='"+inggs.getResLugCodigo()+"',ResSerCodigo='"+inggs.getResSerCodigo()+"',ResPrecio='"+inggs.getResPrecio()+"',ResFHInicio='"+inggs.getResFHInicio()+"',ResFHFin='"+inggs.getResFHFin()+"' Where ResCodReserva='"+inggs.getResCodReserva()+"'");
    
ps.executeUpdate();
JOptionPane.showMessageDialog(null, "Datos Actualizados");
        
        } catch (Exception e) {
          JOptionPane.showMessageDialog(null,"Datos no Actualizados"+e);
    }
return datt;
 
}      
public int EliminarReserva(Reservagetset inggs){
 String  u;
 int datt=0;
 JOptionPane.showMessageDialog(null,"Variable");
    try {
        ps=cnn.prepareStatement("Delete from Reservacion where ResCodReserva='"+inggs.getResCodReserva()+"'");
    ps.executeUpdate();
    JOptionPane.showMessageDialog(null,"Datos Eliminados");
    } catch (Exception e) {
        JOptionPane.showMessageDialog(null,"Datos no Eliminados"+e);
    }
    return datt;
}






public int modificarEvento(Eventosetget inggs){

String u;
int datt=0;
    JOptionPane.showMessageDialog(null,"variable");
    try {
        ps=cnn.prepareStatement("UPDATE Evento set EveEmpId='"+inggs.getEveEmpId()+"',EveLugCod='"+inggs.getEveLugCod()+"',EveDescripcion='"+inggs.getDescripcion()+"',EveFoto='"+inggs.getEveFoto()+"',EveFecHo='"+inggs.getEveFecHo()+"' Where Evecodigo='"+inggs.getEvecodigo()+"'");
    
ps.executeUpdate();
JOptionPane.showMessageDialog(null, "Datos Actualizados");
        
        } catch (Exception e) {
          JOptionPane.showMessageDialog(null,"Datos no Actualizados"+e);
    }
return datt;
 
}      
public int EliminarEvento(Eventosetget inggs){
 String  u;
 int datt=0;
 JOptionPane.showMessageDialog(null,"Variable");
    try {
        ps=cnn.prepareStatement("Delete from Evento where Evecodigo='"+inggs.getEvecodigo()+"'");
    ps.executeUpdate();
    JOptionPane.showMessageDialog(null,"Datos Eliminados");
    } catch (Exception e) {
        JOptionPane.showMessageDialog(null,"Datos no Eliminados"+e);
    }
    return datt;
}


public int modificarPerfil(editarperfilcliente inggs){

String u;
int datt=0;
    JOptionPane.showMessageDialog(null,"variable");
    try {
        ps=cnn.prepareStatement("UPDATE Perfil set CliNombre='"+inggs.getCliNombre()+"',CliTipo='"+inggs.getCliTipo()+"',CliTelefono='"+inggs.getCliTelefono()+"',CliFechaVinculacion='"+inggs.getCliFechVinculacion()+"' Where CliId='"+inggs.getCliId()+"'");
    
ps.executeUpdate();
JOptionPane.showMessageDialog(null, "Datos Actualizados");
        
        } catch (Exception e) {
          JOptionPane.showMessageDialog(null,"Datos no Actualizados"+e);
    }
return datt;
}
}