
package modelo;


import Controlador.Conexion;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.util.ArrayList;

public class Consultas {
    Conexion con=new Conexion();
    Connection cnn=con.conexionbd();
    PreparedStatement ps=null;
    ResultSet rs=null;
    public ArrayList<ingresodatosgetset> consultaRoles(){
        ArrayList<ingresodatosgetset> arreglo=new ArrayList<ingresodatosgetset>();
        try {
            ps=cnn.prepareStatement("select * from Roles");
            rs=ps.executeQuery();
            while(rs.next()){
                ingresodatosgetset getset=new ingresodatosgetset(rs.getString(1),rs.getString(2));
                arreglo.add(getset);
            }
        } catch (Exception e) {
            System.out.println("ERROR CONSULTA ROL"+e);
        }
        return arreglo;
    }
     public ArrayList<ingresodatosgetset> consultaClientes(){
        ArrayList<ingresodatosgetset> arreglo=new ArrayList<ingresodatosgetset>();
        try {
            ps=cnn.prepareStatement("select * from Cliente");
            rs=ps.executeQuery();
            while(rs.next()){
                ingresodatosgetset getset=new ingresodatosgetset(rs.getString(1),rs.getString(2),rs.getString(3),rs.getString(4),rs.getString(5),rs.getString(6));
                arreglo.add(getset);
            }
        } catch (Exception e) {
            System.out.println("ERROR CONSULTA CLIENTE"+e);
        }
        return arreglo;
    }
     
      public ArrayList<ingresodatosgetset> consultaTipoPQRS(){
        ArrayList<ingresodatosgetset> arreglo=new ArrayList<ingresodatosgetset>();
        try {
            ps=cnn.prepareStatement("select * from TipoPQRS");
            rs=ps.executeQuery();
            while(rs.next()){
                ingresodatosgetset getset=new ingresodatosgetset(rs.getString(1),rs.getString(2),rs.getString(3));
                arreglo.add(getset);
            }
        } catch (Exception e) {
            System.out.println("ERROR CONSULTA TIPO PQRS " + e);
        }
        return arreglo;
    }
      
      public ArrayList<ingresodatosgetset> consultaFichaPuntuacion(){
        ArrayList<ingresodatosgetset> arreglo=new ArrayList<ingresodatosgetset>();
        try {
            ps=cnn.prepareStatement("select * from FichaPuntuacion");
            rs=ps.executeQuery();
            while(rs.next()){
                ingresodatosgetset getset=new ingresodatosgetset(rs.getString(1),rs.getString(2),rs.getString(3),rs.getString(4),rs.getString(5));
                arreglo.add(getset);
            }
        } catch (Exception e) {
            System.out.println("ERROR CONSULTA FICHA DE PUNTUACION " + e);
        }
        return arreglo;
    }
      
      public ArrayList<ingresodatosgetset> consultaFichaCliente(){
        ArrayList<ingresodatosgetset> arreglo=new ArrayList<ingresodatosgetset>();
        try {
            ps=cnn.prepareStatement("select * from Cliente_Ficha");
            rs=ps.executeQuery();
            while(rs.next()){
                ingresodatosgetset getset=new ingresodatosgetset (rs.getString(1),rs.getString(2),rs.getString(3),rs.getString(4),rs.getString(5),rs.getString(6),rs.getString(7),rs.getString(8),rs.getString(9),rs.getString(10),rs.getString(11),rs.getString(12),rs.getString(13),rs.getString(14),rs.getString(15),rs.getString(16),rs.getString(17),rs.getString(18),rs.getString(19),rs.getString(20),rs.getString(21),rs.getString(22),rs.getString(23));
                arreglo.add(getset);
            }
        } catch (Exception e) {
            System.out.println("ERROR CONSULTA FICHA DE PUNTUACION " + e);
        }
        return arreglo;
    }
      
         public ArrayList<ingresodatosgetset> consultaPQRS(){
        ArrayList<ingresodatosgetset> arreglo=new ArrayList<ingresodatosgetset>();
        try {
            ps=cnn.prepareStatement("select * from PQRS");
            rs=ps.executeQuery();
            while(rs.next()){
                ingresodatosgetset getset=new ingresodatosgetset (rs.getString(1),rs.getString(2),rs.getString(3),rs.getString(4),rs.getString(5),rs.getString(6),rs.getString(7));
                arreglo.add(getset);
            }
        } catch (Exception e) {
            System.out.println("ERROR CONSULTA PQRS " + e);
        }
        return arreglo;
    }
         
         public ArrayList<ingresodatosgetset2> consultaServicioEmpleado(){
        ArrayList<ingresodatosgetset2> arreglo=new ArrayList<ingresodatosgetset2>();
        try {
            ps=cnn.prepareStatement("select * from Servicio_Empleado");
            rs=ps.executeQuery();
            while(rs.next()){
                ingresodatosgetset2 getset=new ingresodatosgetset2 (rs.getString(1),rs.getString(2),rs.getString(3));
                arreglo.add(getset);
            }
        } catch (Exception e) {
            System.out.println("ERROR CONSULTA SERVICIO EMPLEADO " + e);
        }
        return arreglo;
    }
         
         
         public ArrayList<ingresodatosgetset2> consultaRespuestaxPregunta(){
        ArrayList<ingresodatosgetset2> arreglo=new ArrayList<ingresodatosgetset2>();
        try {
            ps=cnn.prepareStatement("select * from RespuestasxPregunta");
            rs=ps.executeQuery();
            while(rs.next()){
                ingresodatosgetset2 getset=new ingresodatosgetset2 (rs.getString(1),rs.getString(2),rs.getString(3),rs.getString(4),rs.getString(5));
                arreglo.add(getset);
            }
        } catch (Exception e) {
            System.out.println("ERROR CONSULTA RESPUESTA POR PREGUNTA" + e);
        }
        return arreglo;
    }
         
          public ArrayList<ingresodatosgetset3> consultaPreguntaxEncuesta(){
        ArrayList<ingresodatosgetset3> arreglo=new ArrayList<ingresodatosgetset3>();
        try {
            ps=cnn.prepareStatement("select * from PreguntaxEncuesta");
            rs=ps.executeQuery();
            while(rs.next()){
                ingresodatosgetset3 getset=new ingresodatosgetset3 (rs.getString(1),rs.getString(2),rs.getString(3));
                arreglo.add(getset);
            }
        } catch (Exception e) {
            System.out.println("ERROR CONSULTA PREGUNTA POR ENCUESTA" + e);
        }
        return arreglo;
    }
          
            public ArrayList<ingresodatosgetset> consultaEncuesta(){
        ArrayList<ingresodatosgetset> arreglo=new ArrayList<ingresodatosgetset>();
        try {
            ps=cnn.prepareStatement("select * from Encuesta");
            rs=ps.executeQuery();
            while(rs.next()){
                ingresodatosgetset getset=new ingresodatosgetset (rs.getString(1),rs.getString(2),rs.getString(3),rs.getString(4),rs.getString(5),rs.getString(6),rs.getString(7),rs.getString(8));
                arreglo.add(getset);
            }
        } catch (Exception e) {
            System.out.println("ERROR CONSULTA ENCUESTA" + e);
        }
        return arreglo;
    }
             public ArrayList<ingresodatosgetset> consutaidcli(){
        ArrayList<ingresodatosgetset> arreglo=new ArrayList<ingresodatosgetset>();
        try {
            ps=cnn.prepareStatement("select CliId from Cliente");
            rs=ps.executeQuery();
            while(rs.next()){
                ingresodatosgetset getset=new ingresodatosgetset(rs.getString(1));
                arreglo.add(getset);
            }
        } catch (Exception e) {
            System.out.println("ERROR"+e);
            
        }
        return arreglo;
    }
             
              public ArrayList<ingresodatosgetset> consutaidclipq(){
        ArrayList<ingresodatosgetset> arreglo=new ArrayList<ingresodatosgetset>();
        try {
            ps=cnn.prepareStatement("select PqCliId from PQRS");
            rs=ps.executeQuery();
            while(rs.next()){
                ingresodatosgetset getset=new ingresodatosgetset(rs.getString(1));
                arreglo.add(getset);
            }
        } catch (Exception e) {
            System.out.println("ERROR"+e);
            
        }
        return arreglo;
    }
             
             
             
              public ArrayList<ingresodatosgetset5> consutatipopq(){
        ArrayList<ingresodatosgetset5> arreglo=new ArrayList<ingresodatosgetset5>();
        try {
            ps=cnn.prepareStatement("select TipCodigo from TipoPQRS");
            rs=ps.executeQuery();
            while(rs.next()){
                ingresodatosgetset5 getset=new ingresodatosgetset5(rs.getString(1));
                arreglo.add(getset);
            }
        } catch (Exception e) {
            System.out.println("ERROR"+e);
        }
        return arreglo;
    }
              
                   public ArrayList<ingresodatosgetset2> consutacodencu(){
        ArrayList<ingresodatosgetset2> arreglo=new ArrayList<ingresodatosgetset2>();
        try {
            ps=cnn.prepareStatement("select EncCodigo from Encuesta");
            rs=ps.executeQuery();
            while(rs.next()){
                ingresodatosgetset2 getset=new ingresodatosgetset2(rs.getString(1));
                arreglo.add(getset);
            }
        } catch (Exception e) {
            System.out.println("ERROR"+e);
        }
        return arreglo;
    }
                   
                   
                   public ArrayList<ingresodatosgetset3> consutaRespCodPre(){
        ArrayList<ingresodatosgetset3> arreglo=new ArrayList<ingresodatosgetset3>();
        try {
            ps=cnn.prepareStatement("select PreEncCodigo from preguntaxencuesta");
            rs=ps.executeQuery();
            while(rs.next()){
                ingresodatosgetset3 getset=new ingresodatosgetset3(rs.getString(1));
                arreglo.add(getset);
            }
        } catch (Exception e) {
            System.out.println("ERROR"+e);
        }
        return arreglo;
    }
                   
                        public ArrayList<codigoradicaciongetset> consutaRadicacion(){
        ArrayList<codigoradicaciongetset> arreglo=new ArrayList<codigoradicaciongetset>();
        try {
            ps=cnn.prepareStatement("select PqCodRadicacion from PQRS");
            rs=ps.executeQuery();
            while(rs.next()){
                codigoradicaciongetset getset=new codigoradicaciongetset(rs.getString(1));
                arreglo.add(getset);
            }
        } catch (Exception e) {
            System.out.println("ERROR"+e);
        }
        return arreglo;
    }
                        
                                  public ArrayList<idclientecombo> consutaRespuesta(){
        ArrayList<idclientecombo> arreglo=new ArrayList<idclientecombo>();
        try {
            ps=cnn.prepareStatement("select PqrResCodRad,PqrResRespuesta,PqrResEstado from PQRSRespuesta");
            rs=ps.executeQuery();
            while(rs.next()){
                idclientecombo getset=new idclientecombo(rs.getString(1));
                arreglo.add(getset);
            }
        } catch (Exception e) {
            System.out.println("ERROR"+e);
        }
        return arreglo;
    }
}
