package modelo;


import Controlador.Conexion;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;
import javax.swing.JOptionPane;

public class consultalog {
    Conexion con=new Conexion();
    Connection cnn=con.conexionbd();
    PreparedStatement ps=null;
    ResultSet rs=null;
    private String u,c,r;
    private static int d;
    private String nombre;
    private String rol;
    public ArrayList<ingresodatosgetset4> consultaloginempleado(ingresodatosgetset4 indat4){
        ArrayList<ingresodatosgetset4> arreglo=new ArrayList<ingresodatosgetset4>();
        try {
            ps=cnn.prepareStatement("select * from usuario where UsuUsuario='"+indat4.getUsuUsuario()+"' and UsuClave='"+indat4.getUsuClave()+"'");
            rs=ps.executeQuery();
            
           while(rs.next()){
                ingresodatosgetset4 getset=new ingresodatosgetset4(rs.getString(1),rs.getString(2),rs.getString(3),rs.getString(4),rs.getString(5),rs.getString(6),rs.getString(7),rs.getString(8));
                arreglo.add(getset);
                
                d=rs.getInt(1);
                r=rs.getString(4);
            }
        } catch (Exception e) {
            JOptionPane.showMessageDialog(null,rs);
             JOptionPane.showMessageDialog(null,"ERROR CONSULTA 1"+e);
             
        }
        return arreglo;
    }
    public String consultanombreusuario(){
        String x=null;
        try {
            ps=cnn.prepareStatement("select UsuNombre from Usuario where UsuId='"+d+"' ");
            rs=ps.executeQuery();
           
            while(rs.next()){
                x=rs.getString(1);
            }
        } catch (Exception e) {
             JOptionPane.showMessageDialog(null,"ERROR CONSULTA 2"+e);
        }
    return x;
    }
    
   public boolean consultarol(ingresodatosgetset4 ing){
       
       boolean x=false;
       try {
           ps=cnn.prepareStatement("select UsuRol from UsuRol where UsuUsuario='"+ing.getUsuUsuario()+"' and UsuClave='"+ing.getUsuClave()+"'");
    rs=ps.executeQuery();
    if(rs.next()){
        rol=rs.getString(1);
        x=true;
    }
    else{
        x=false;
    }
       } catch (Exception e) {
           JOptionPane.showMessageDialog(null,"ERROR CONSULTA 3"+e);
       }
       return x;    
   }
}
